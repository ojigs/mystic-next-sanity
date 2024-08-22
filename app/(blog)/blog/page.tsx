import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import BlogList from "@/app/(blog)/components/blog-list";
import Pagination from "@/app/(blog)/components/pagination";
import CategoryFilter from "@/app/(blog)/components/category-filter";
import {
  blogPostsQuery,
  categoriesQuery,
  totalPostsQuery,
} from "@/sanity/lib/queries";
import { BlogPostsQueryResult, CategoriesQueryResult } from "@/sanity.types";
import ContactSection from "../components/contact-section";
import NoPostsFound from "../components/no-posts-found";

const postsPerPage = 5;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page: string; category: string | null };
}) {
  const page = parseInt(searchParams.page || "1");
  const category = searchParams.category || null;

  const startLimit = (page - 1) * postsPerPage;
  const endLimit = startLimit + postsPerPage;

  const blogPosts = await sanityFetch<BlogPostsQueryResult>({
    query: blogPostsQuery,
    params: { startLimit, endLimit, category },
  });

  const totalPosts = await sanityFetch<number>({
    query: totalPostsQuery,
    params: { category },
  });

  const categories = await sanityFetch<CategoriesQueryResult>({
    query: categoriesQuery,
  });

  return (
    <div className="flex flex-col min-h-screen bg-secondary text-primary">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary-100 py-20 pt-36 px-8">
        <div className="mx-auto text-center text-primary-50">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
            Our Blog
          </h1>
          <p className="text-lg text-primary-50 mb-8">
            Latest insights into our journey and stories.
          </p>
        </div>
      </section>

      <div className="flex-grow flex flex-col md:flex-row md:h-auto overflow-auto">
        {/* Sidebar for categories on desktop */}
        <aside className="w-full md:w-1/4 shrink-0 hidden md:block sticky top-0 overflow-y-auto p-4  text-primary">
          <CategoryFilter categories={categories} selectedCategory={category} />
        </aside>

        {/* Main content area */}
        <section className="flex-grow">
          {/* Horizontal scroll for categories on mobile */}
          <div className="md:hidden overflow-x-auto mb-4">
            <CategoryFilter
              categories={categories}
              selectedCategory={category}
              isMobile
            />
          </div>
          {blogPosts.length > 0 ? (
            <>
              <BlogList blogPosts={blogPosts} />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={totalPosts}
                currentPage={page}
                currentCategory={category}
              />
            </>
          ) : (
            <NoPostsFound category={category} />
          )}
        </section>
      </div>

      <ContactSection
        title="Join the journey"
        description="Be the first to explore new stories, get exclusive tips, and dive into the world of creativity"
      />
    </div>
  );
}
