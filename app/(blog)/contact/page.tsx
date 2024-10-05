import { FaEnvelope, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaVideo, FaImagePortrait, FaCodeMerge } from "react-icons/fa6";
import { SiBrandfolder } from "react-icons/si";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import ButtonLink from "../components/button-link";
import ServiceCard from "../components/service-contact-card";
import TestimonialsSection from "../components/testimonial-section";
import CalendlySection from "../components/calendly-section";

interface Service {
  name: string;
  link: string;
  icon: IconType;
}

const ContactPage = () => {
  const services: Service[] = [
    {
      name: "Wedding",
      link: "https://forms.gle/QGiZBizR2uc2rh5U6",
      icon: FaCodeMerge,
    },
    {
      name: "Portrait",
      link: "https://forms.gle/QGiZBizR2uc2rh5U6",
      icon: FaImagePortrait,
    },
    {
      name: "Branding",
      link: "https://forms.gle/QGiZBizR2uc2rh5U6",
      icon: SiBrandfolder,
    },
    {
      name: "Cinematography",
      link: "https://forms.gle/QGiZBizR2uc2rh5U6",
      icon: FaVideo,
    },
  ];

  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative pt-36 bg-gradient-to-br from-secondary to-secondary-100 py-20 px-8">
        <div className="mx-auto max-w-2xl text-center text-primary-50">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
            Contact Us
          </h1>
          <p className="text-lg text-primary-50 mb-8">
            Ready to transform your ideas into stunning visuala? Reach out to
            us, we would love to hear from you!
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 px-8" id="book-a-session">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-center glowRed">
            Book a Session
          </h2>
          <p className="uppercase max-w-xl mx-auto text-xs mb-16 text-center">
            Let us know which of the{" "}
            <span className="glowing-text">sessions</span> you are interested in
            to receive a more personalized experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.name}
                href={service.link}
                Icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Calendly section */}
      {/* <CalendlySection /> */}

      {/* Testimonial Section */}
      <TestimonialsSection />

      {/* General Contact Information */}
      <section className="bg-gradient-to-br from-secondary to-secondary-100 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <p className="text-lg text-primary-100 mb-6">
            For any general inquiries, feel free to reach out to us:
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-accent" />
              <Link
                href="mailto:mysticfilmworks2011@gmail.com"
                className="text-primary-100 hover:underline"
              >
                mysticfilmworks2011@gmail.com
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-accent" />
              <Link
                href="tel:+2347032904251"
                className="text-primary-100 hover:underline"
              >
                07032904251
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FaFacebook className="text-2xl text-accent" />
              <Link
                href="https://www.facebook.com/share/6B7C7Lz3fmGSV4tu/?mibextid=LQQJ4d"
                className="text-primary-100 hover:underline"
                target="_blank"
              >
                Facebook
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FaInstagram className="text-2xl text-accent" />
              <Link
                href="https://instagram.com/mysticfilmimageryevents"
                className="text-primary-100 hover:underline"
                target="_blank"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
