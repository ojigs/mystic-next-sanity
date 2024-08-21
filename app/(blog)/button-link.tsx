import { ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  target?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  className = "",
  children,
  target,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `inline-block text-primary px-4 py-2 hover:bg-opacity-75 hover:text-opacity-75 transition-colors rounded ${className}`
      )}
      target={target}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
