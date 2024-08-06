import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="relative bg-secondary py-16">
      <div className="absolute inset-0 overflow-hidden">
        {/* Overlay Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent opacity-50 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent opacity-40 rounded-full"></div>
      </div>
      <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8 text-primary-100">
          We'd love to hear from you. Click the link below to reach our contact
          page and let us know how we can assist you.
        </p>
        <Link
          href="/contact"
          className="text-accent hover:text-white transition-colors duration-300 glowing-text"
        >
          Contact Us &rarr;
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
