export default function NoPostsFound({
  category,
}: {
  category: string | null;
}) {
  return (
    <div className="text-center py-10 h-full flex flex-col justify-center items-center text-primary-100 text-sm">
      <h2 className="text-base font-semibold mb-4">No Posts Found</h2>
      <p className="">
        {category
          ? `There are no posts in the ${category} category yet.`
          : "There are no posts available at the moment."}
      </p>
      <p className="mt-4 text-xs">
        Please check back later or try a different category.
      </p>
    </div>
  );
}
