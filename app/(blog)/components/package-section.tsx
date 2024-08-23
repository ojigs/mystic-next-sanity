import ButtonLink from "../button-link";

interface Package {
  title?: string | undefined;
  description?: string | undefined;
  features?: string[] | undefined;
  price?: string | undefined;
}

type PackagesSectionProps = {
  packages: Package[];
  link: string | null;
};

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  link,
}) => {
  return (
    <section className="py-16 px-8 bg-secondary-100 text-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center glowRed">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-secondary p-6 rounded-lg shadow-lg "
            >
              <div className="flex flex-col justify-between flex-auto h-full">
                <div>
                  <h3 className="text-lg text-accent font-semibold text-center mb-4">
                    {pkg.title}
                  </h3>
                  <p className="mb-4 text-primary-50">{pkg.description}</p>
                  <p className="text-3xl text-primary-50 mb-4 text-center font-bold">
                    {" "}
                    <span className="mr-1">₦</span>
                    {pkg.price}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {pkg.features?.map((feature, index) => (
                      <li key={index} className="ml-2 text-primary-100">
                        <span className="mr-2 text-accent">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center py-6">
                  <ButtonLink
                    href={`${link}`}
                    className="bg-secondary-100 bg-opacity-75 hover:bg-opacity-100 text-center py-3 shadow-inner drop-shadow-md shadow-primary-100/50 text-primary-100 text-opacity-75 hover:text-primary hover:text-opacity-100 w-full"
                    target="_blank"
                  >
                    Choose package
                  </ButtonLink>
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
