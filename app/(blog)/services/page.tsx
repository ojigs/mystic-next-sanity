import ContactSection from "../components/contact-section";
import StoryBlock from "../components/story-block";

export default function ServicesPage() {
  const stories = [
    {
      title: "Wedding Photography",
      description:
        "We offer a custom-designed wedding photography service, ensuring a stunning and memorable experience. From pre-wedding shoots to post-wedding albums, we provide comprehensive coverage of your wedding celebration.",
      imageSrc: "/wedding-4.jpg",
      link: "/services/weddings",
      desc: "Wedding"
    },
    {
      title: "Portrait Photography",
      description:
        "We provide personalized portrait photography sessions, showcasing your true essence. From family portraits to individual headshots, we offer a wide range of portrait photography services to suit your needs.",
      imageSrc: "/portrait.jpeg",
      link: "/services/portraits",
      reverse: true,
      desc: "Portrait"
    },
    {
      title: "Branding Photography",
      description:
        "We create stunning visuals to elevate your brand identity, capturing the essence of your brand. Our high-resolution images are perfect for use in marketing materials, social media, and your website.",
      imageSrc: "/brand.jpg",
      link: "/services/branding",
      desc: "Branding"
    },
    {
      title: "Cinematography",
      description:
        "We offer high-quality cinematography to capture the motion and emotion of your story. Our experienced cinematographers use state-of-the-art equipment and techniques to capture breathtaking footage",
      imageSrc: "/cinematography.jpg",
      link: "/services/cinematography",
      reverse: true,
      desc: "Cinematography"
    },
  ];

  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative pt-36 bg-gradient-to-br from-secondary to-secondary-100 py-20 px-8">
        <div className="mx-auto max-w-2xl text-center text-primary-50">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
            Our Services
          </h1>
          <p className="text-lg text-primary-50 mb-8">
            Explore the range of services we offer, each tailored to tell your
            unique story.
          </p>
        </div>
      </section>

      {/* Story Blocks Section */}
      <section className="py-16 px-8">
        <div className="mx-auto max-w-6xl">
          {stories.map((story, index) => (
            <StoryBlock
              key={index}
              title={story.title}
              description={story.description}
              imageSrc={story.imageSrc}
              link={story.link}
              reverse={story.reverse}
              desc={story.desc}
            />
          ))}
        </div>
      </section>

      {/* Contact section */}
      <ContactSection
        title="Let's Create Together"
        description="Have questions? Don't hesitate to reach out. We're here to help you bring your vision to life!"
      />
    </div>
  );
}
