import { ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  className = "",
  children,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `inline-block text-primary px-4 py-2 hover:bg-opacity-75 transition-colors rounded ${className}`
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
