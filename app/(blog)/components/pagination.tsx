"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  currentCategory: string | null;
};

export default function Pagination({
  postsPerPage,
  totalPosts,
  currentPage,
  currentCategory,
}: PaginationProps) {
  const searchParams = useSearchParams();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    if (currentCategory) {
      params.set("category", currentCategory);
    }
    return params.toString();
  };

  return (
    <nav className="mt-8 flex justify-center pb-16">
      <ul className="inline-flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              href={`/blog?${createQueryString("page", number.toString())}`}
              className={`px-4 py-2 rounded-md ${
                currentPage === number
                  ? "bg-secondary-100 shadow-inner shadow-primary-100/50 text-accent"
                  : "bg-secondary text-primary hover:bg-accent"
              }`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
