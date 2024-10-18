import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary-50 text-xs py-16">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Mystic Film Works</h3>
            <p className="text-sm">
              Capturing your precious moments with artistry and passion.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <Link href="/about-us" className="hover:text-accent">
                About
              </Link>
              <Link href="/portfolio" className="hover:text-accent">
                Portfolio
              </Link>
              <Link href="/services" className="hover:text-accent">
                Services
              </Link>
              <Link href="/blog" className="hover:text-accent">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-accent">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link
                href="https://www.facebook.com/share/6B7C7Lz3fmGSV4tu/?mibextid=LQQJ4d"
                target="_blank"
                title="Facebook"
                aria-label="Facebook"
                className="hover:text-accent"
              >
                <FaFacebook className="text-blue-600 h-6 w-6" />
              </Link>
              <Link
                href="https://instagram.com/mysticfilmimageryevents"
                target="_blank"
                title="Instagram"
                aria-label="Instagram"
                className="hover:text-accent"
              >
                <FaInstagram className="text-pink-500 h-6 w-6" />
              </Link>
              {/* <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-accent"
              >
                <FaTwitter className="text-blue-400 h-6 w-6" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="hover:text-accent"
              >
                <FaYoutube className="text-red-600 h-6 w-6" />
              </Link> */}
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-2 justify-center md:justify-start">
              <address className="">
                Flat 6, Wealth Plaza @ 20 Okpe Road, Sapele, Delta State,
                Nigeria{" "}
              </address>
              <p className="">
                <a href="mailto:mysticfilmworks2011@gmail.com">
                  mysticfilmworks2011@gmail.com
                </a>
              </p>
              <p className="">
                <a href="tel:07032904251">07032904251</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-600 pt-8 text-sm">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Mystic Film Works. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
