import Image from "next/image";
import React from "react";
import ButtonLink from "../button-link";

interface Service {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

interface ServiceCardProps extends Service {}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  link,
}) => (
  <div className="bg-secondary rounded-lg shadow-md overflow-hidden flex flex-col">
    <div className="relative">
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={500}
        className="rounded-t-md w-full h-auto"
      />
    </div>
    <div className="py-6 flex flex-col flex-auto justify-between items-center">
      <div className="mb-4">
        <h3 className="text-xl text-center px-2 font-semibold mb-2 text-accent">
          {title}
        </h3>
        <p className="text-primary-100 text-sm px-4 mb-4">{description}</p>
      </div>
      <div className="w-full px-4">
        <ButtonLink
          href={link}
          className="bg-secondary-100 text-center hover:text-primary-100 w-full"
        >
          Learn More
        </ButtonLink>
      </div>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Weddings",
      description:
        "Capture every magical moment of your special day with our professional wedding photography and videography services.",
      imageSrc: "/wedding-8.jpg",
      link: "/services/weddings",
    },
    {
      title: "Portraits",
      description:
        "From individual sessions to family photoshoots, our portrait services bring out the best in you and your loved ones.",
      imageSrc: "/portrait.jpeg",
      link: "/services/portraits",
    },
    {
      title: "Branding",
      description:
        "Elevate your brand with stunning visuals that tell your story and connect with your audience.",
      imageSrc: "/brand.jpg",
      link: "/services/branding",
    },
    {
      title: "Cinematography",
      description:
        "Bring your vision to life with our professional cinematography services for events, commercials, and more.",
      imageSrc: "/cinematography2.jpg",
      link: "/services/cinematography",
    },
  ];

  return (
    <section className="bg-secondary-100 py-16">
      <div className="px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center glowRed">
          Our Services
        </h2>
        <p className="uppercase text-xs mb-16 text-center">
          Learn about our <span className="glowing-text">offerings</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
