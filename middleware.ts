import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Quick, minimal edge middleware to block an offending IP / CIDR and short-circuit abusive requests.
// - Blocks 74.7.243.252 and the 74.7.128.0/17 prefix (Microsoft/Bing range reported).
// - Lightweight IPv4 CIDR check implemented inline to avoid external deps.
// - Returns 403 Forbidden with a small reason header so you can identify blocks in logs.

function ipv4ToInt(ip: string) {
  const parts = ip.split('.').map((p) => parseInt(p, 10));
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return null;
  return ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
}

function cidrContains(cidr: string, ip: string) {
  // cidr e.g. "74.7.128.0/17"
  const [range, bitsStr] = cidr.split('/');
  const bits = parseInt(bitsStr || '32', 10);
  const ipInt = ipv4ToInt(ip);
  const rangeInt = ipv4ToInt(range);
  if (ipInt === null || rangeInt === null) return false;
  const mask = bits === 0 ? 0 : (~0 << (32 - bits)) >>> 0;
  return (ipInt & mask) === (rangeInt & mask);
}

const BLOCKED_IPS = new Set(["74.7.243.252"]);
const BLOCKED_CIDRS = ["74.7.128.0/17"]; // Microsoft-owned range reported

export function middleware(request: NextRequest) {
  // Try to get the client's IP from common headers set by CDNs / Vercel
  const xff = request.headers.get('x-forwarded-for') || '';
  const ipFromXff = xff.split(',')[0].trim();
  const ip = ipFromXff || request.headers.get('x-real-ip') || '';

  if (ip) {
    if (BLOCKED_IPS.has(ip)) {
      const res = new NextResponse('Forbidden', { status: 403 });
      res.headers.set('x-block-reason', 'blocked-ip');
      res.headers.set('x-blocked-ip', ip);
      return res;
    }

    for (const cidr of BLOCKED_CIDRS) {
      if (cidrContains(cidr, ip)) {
        const res = new NextResponse('Forbidden', { status: 403 });
        res.headers.set('x-block-reason', 'blocked-cidr');
        res.headers.set('x-blocked-cidr', cidr);
        res.headers.set('x-blocked-ip', ip);
        return res;
      }
    }
  }
  

  // Allow the request to proceed
  return NextResponse.next();
}

// Apply middleware to all routes 
export const config = {
  matcher: ['/:path*'],
};
