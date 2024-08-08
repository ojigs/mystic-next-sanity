import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        className="rounded-md w-full h-auto"
      />
    </div>
    <div className="py-6 flex flex-col flex-auto justify-between items-center">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold mb-2 text-accent">{title}</h3>
        <p className="text-primary-100 mb-4">{description}</p>
      </div>
      <div>
        <Link
          href={link}
          className="inline-block bg-accent hover:bg-opacity-75 transition-colors text-primary text-center py-2 px-4 rounded"
        >
          Learn More
        </Link>
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
    <section className="bg-secondary py-16">
      <div className="px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center glowRed">
          Our Services
        </h2>
        <p className="uppercase text-xs mb-16 text-center">
          Learn about our <span className="glowing-text">offerings</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
