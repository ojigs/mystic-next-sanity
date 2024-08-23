import Image from "next/image";
import Link from "next/link";
import ButtonLink from "../components/button-link";
import ContactSection from "../components/contact-section";

interface PortfolioCategory {
  title: string;
  image: string;
  link: string;
}

const PortfolioPage = () => {
  const portfolioCategories: PortfolioCategory[] = [
    { title: "Weddings", image: "/wedding-8.jpg", link: "/portfolio/weddings" },
    {
      title: "Portraits",
      image: "/portrait.jpeg",
      link: "/portfolio/portraits",
    },
    { title: "Branding", image: "/brand.jpg", link: "/portfolio/branding" },
    {
      title: "Cinematography",
      image: "/cinematography2.jpg",
      link: "/portfolio/cinematography",
    },
  ];

  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary-100 py-20 pt-36 px-8">
        <div className="mx-auto text-center text-primary-50">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
            Our Portfolio
          </h1>
          <p className="text-lg text-primary-50 mb-8">
            Discover the moments we&apos;ve captured over the years.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center glowRed">
            Categories
          </h2>
          <p className="uppercase max-w-xl mx-auto text-xs mb-16 text-center">
            Explore our <span className="glowing-text">portfolio</span> by
            categories
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {portfolioCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden flex flex-col justify-between flex-auto"
              >
                <Link href={category.link}>
                  <div className="relative rounded-t-md w-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={500}
                      height={500}
                      className="rounded-t-md w-full h-auto group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-accent bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                </Link>
                <div className="text-center py-6">
                  <ButtonLink
                    href={category.link}
                    className="bg-secondary-100 text-center py-3 hover:text-primary-100 w-full"
                  >
                    {category.title} portfolio
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-16 bg-secondary-100 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center glowRed">
            Featured Work
          </h2>
          <div className="flex flex-col space-y-8">
            <div className="group relative">
              <div className="relative w-full h-[500px]">
                <Image
                  src="/wedding-6.jpg"
                  alt="Featured Work"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-accent bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center">
                The Grand Wedding
              </h3>
              <p className="text-center text-primary-100 mt-2 text-lg">
                A celebration of love and joy captured in every frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <ContactSection
        title="Ready to Capture Your Story?"
        description="Every moment has a story, and we are here to tell yours with
            passion, creativity, and a touch of artistry."
      />
    </div>
  );
};

export default PortfolioPage;
