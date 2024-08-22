// "use client";

// import { useRouter, useSearchParams } from "next/navigation";

// type CategoryFilterProps = {
//   isMobile?: boolean;
// };

// export default function CategoryFilter({ isMobile }: CategoryFilterProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const categories = [
//     "Weddings",
//     "Portraits",
//     "Branding",
//     "Cinematography",
//     "Behind the Scenes",
//     "Client Stories",
//     "Tips & Tricks",
//     "Industry Trends",
//     "Events",
//     "Gear Reviews",
//   ];

//   const createQueryString = (name: string, value: string) => {
//     const params = new URLSearchParams(searchParams);
//     params.set(name, value);
//     return params.toString();
//   };

//   const handleCategoryClick = (category: string) => {
//     router.push(`/blog?${createQueryString("category", category)}`);
//   };

//   return (
//     <div
//       className={`${
//         isMobile
//           ? "flex sticky top-0 space-x-4 overflow-x-auto"
//           : "flex flex-col space-y-2"
//       }`}
//     >
//       {categories.map((category) => (
//         <button
//           key={category}
//           className="text-primary bg-secondary px-4 py-2 rounded-md hover:bg-accent shadow-inner shadow-primary-100/50"
//           onClick={() => handleCategoryClick(category)}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

"use client";

import { CategoriesQueryResult } from "@/sanity.types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

type CategoryFilterProps = {
  categories: CategoriesQueryResult;
  selectedCategory: string | null;
  isMobile?: boolean;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  isMobile,
}: CategoryFilterProps) {
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    params.delete("page"); // Reset page when changing category
    return params.toString();
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold leading-tight tracking-tight">
        Categories
      </h2>
      <div
        className={`${
          isMobile
            ? "flex items-center text-center space-x-4 overflow-x-auto"
            : "flex flex-col space-y-2"
        }`}
      >
        <Link
          href={`/blog`}
          className={twMerge(
            `text-primary shrink-0  bg-secondary-100 text-center px-4 py-2 rounded-md hover:bg-accent/75 md:shadow-inner md:shadow-primary-100/50 ${
              selectedCategory === null ? "bg-accent" : ""
            }`
          )}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category.value}
            href={`/blog?${createQueryString("category", category.value || null)}`}
            className={twMerge(
              `text-primary bg-secondary-100 shrink-0  text-center px-4 py-2 rounded-md hover:bg-accent/75 md:shadow-inner md:shadow-primary-100/50 ${
                selectedCategory === category.value ? "bg-accent" : ""
              }`
            )}
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
