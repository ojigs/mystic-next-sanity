"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-secondary text-primary shadow-xl z-50 fixed left-0 right-0 shadow-gray-600">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/">Mystic Films</Link>
        </div>
        <nav className="hidden md:flex space-x-12 text-sm">
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
        <div className="md:hidden">
          <button
            className={`hamb ${isOpen ? "active" : null}`}
            aria-label="Open Menu"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open Menu</span>
            <svg className="ham" viewBox="0 0 100 100">
              <path
                className="line top"
                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
              ></path>
              <path className="line middle" d="m 30,50 h 40"></path>
              <path
                className="line bottom"
                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300`}
      >
        <nav className="flex flex-col items-center space-y-8 py-8 px-6">
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
    </header>
  );
};

export default Header;
