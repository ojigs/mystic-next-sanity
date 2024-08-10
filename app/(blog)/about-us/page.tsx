import { StarIcon } from "@sanity/icons";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaHandshake,
  FaInstagram,
  FaPaintBrush,
  FaUsers,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import ButtonLink from "../button-link";

interface TeamMember {
  name: string;
  image: string;
  role: string;
  facebook: string;
  instagram: string;
}

interface Value {
  icon: IconType;
  title: string;
  description: string;
}

const AboutPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      image: "/team-member-1.jpg",
      role: "CEO",
      facebook: "johndoe",
      instagram: "johndoe",
    },
    {
      name: "Jane Doe",
      image: "/team-member-2.jpg",
      role: "Photographer",
      facebook: "janedoe",
      instagram: "janedoe",
    },
    {
      name: "Elena Woods",
      image: "/team-member-3.jpg",
      role: "Photographer",
      facebook: "elenawoods",
      instagram: "elenawoods",
    },
  ];

  const values = [
    {
      icon: FaPaintBrush,
      title: "Creativity",
      description:
        "We approach each project with fresh eyes, always seeking innovative ways to tell your story.",
    },
    {
      icon: FaHandshake,
      title: "Professionalism",
      description:
        "From our first meeting to the final delivery, we maintain the highest standards of professionalism.",
    },
    {
      icon: FaUsers,
      title: "Client-centric",
      description:
        "Your vision is our priority. We work closely with you to ensure your expectations are not just met, but exceeded,",
    },
  ];

  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative pt-36 bg-gradient-to-br from-secondary to-secondary-100 py-20 px-8">
        <div className="mx-auto text-center text-primary-50">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
            About Us
          </h1>
          <p className="text-lg text-primary-50 mb-8">
            We Capture Life’s Most Precious Moments
          </p>
          <ButtonLink href="/contact" className="bg-accent">
            Get in Touch
          </ButtonLink>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative w-full h-[400px] lg:h-[600px]">
                <Image
                  src="/our-story.webp"
                  alt="Our Story"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-sm text-accent uppercase tracking-widest font-bold mb-6">
                Our Story
              </h2>
              <p className="mb-4 text-primary-100">
                Our journey began in 2010 with a shared passion for capturing
                life's most precious moments through the art of photography and
                videography. What started as a small team of two has now grown
                into a vibrant collective of skilled professionals, each
                bringing their unique creativity and expertise to every project.
              </p>
              <p className="mb-4 text-primary-100">
                Over the years, we've had the privilege of documenting countless
                weddings, corporate events, and personal milestones. Each
                experience has not only honed our skills but also deepened our
                appreciation for the power of visual storytelling.
              </p>
              <p className="mb-6 text-primary-100">
                We believe in delivering stunning visuals that not only capture
                moments but also evoke emotions. Our commitment to quality,
                attention to detail, and innovative approaches have set us apart
                in the industry and earned us the trust of our clients.
              </p>
              <div className="flex flex-col sm:flex-row justify-between shadow-lg shadow-accent/50 items-center bg-primary-50 text-secondary-100 font-semibold p-6 rounded-lg">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                  <p className="text-2xl text-center font-bold text-accent">
                    500+
                  </p>
                  <p className="text-sm text-center">Happy Clients</p>
                </div>
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                  <p className="text-2xl text-center font-bold text-accent">
                    1000+
                  </p>
                  <p className="text-sm text-center">Projects Completed</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-2xl text-center font-bold text-accent">
                    12+
                  </p>
                  <p className="text-sm text-center">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-secondary-100 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 glowRed">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {teamMembers.map((teamMember, index) => (
              <div key={index}>
                <div className="relative group">
                  <Image
                    src={teamMember.image}
                    alt={teamMember.name}
                    width={300}
                    height={300}
                    className="rounded-full w-full h-auto"
                  />
                  <div className="absolute inset-0 mx-auto bg-secondary bg-opacity-70 rounded-full flex space-x-4 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={`https://facebook.com/${teamMember.facebook}`}
                      className="hover:text-accent"
                      target="_blank"
                    >
                      <FaFacebook className="text-blue-600 text-2xl" />
                    </Link>
                    <Link
                      href={`https://instagram.com/${teamMember.instagram}`}
                      className="hover:text-accent"
                      target="_blank"
                    >
                      <FaInstagram className="text-pink-500 text-2xl" />
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex flex-col justify-center">
                  <p className="px-4 mb-2 text-center font-semibold">
                    {teamMember.name}
                  </p>
                  <p className="px-4 text-primary-100 text-center">
                    {teamMember.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 glowRed">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 flex flex-col items-center">
                <div className="mb-4 p-4 rounded-full bg-accent bg-opacity-20 flex items-center justify-center">
                  <value.icon className="text-4xl text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">
                  {value.title}
                </h4>
                <p className="text-center text-primary-100">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-secondary-100 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center glowRed">
            Our Journey
          </h2>
          <div className="relative">
            <div className="flex flex-col items-start md:items-center">
              {/* Milestone 1 */}
              <div className="w-full md:w-1/2">
                <div className="flex relative">
                  <div className="bg-accent mt-2 shrink-0 w-4 h-4 rounded-full"></div>
                  <div className="bg-accent shrink-0 absolute border-l-2 h-full border-accent transform translate-x-2 translate-y-2"></div>
                  <div className="ml-4 text-primary-50">
                    <h3 className="font-bold text-lg mb-2">Founded</h3>
                    <p className="text-primary-100 mb-16">
                      Our company was founded in 2010 with a vision to capture
                      life's moments.
                    </p>
                  </div>
                </div>
              </div>
              {/* Milestone 1 */}
              <div className="w-full md:w-1/2">
                <div className="flex relative">
                  <div className="bg-accent mt-2 shrink-0 w-4 h-4 rounded-full"></div>
                  <div className="bg-accent shrink-0 absolute border-l-2 h-full border-accent transform translate-x-2 translate-y-2"></div>
                  <div className="ml-4 text-primary-50">
                    <h3 className="font-bold text-lg mb-2">
                      First Major Project
                    </h3>
                    <p className="text-primary-100 mb-16">
                      In 2012, we completed our first major project, a wedding
                      shoot that received rave reviews.
                    </p>
                  </div>
                </div>
              </div>
              {/* Milestone 1 */}
              <div className="w-full md:w-1/2">
                <div className="flex relative">
                  <div className="bg-accent mt-2 shrink-0 w-4 h-4 rounded-full"></div>
                  <div className="bg-accent shrink-0 absolute border-l-2 h-full border-accent transform translate-x-2 translate-y-2"></div>
                  <div className="ml-4 text-primary-50">
                    <h3 className="font-bold text-lg mb-2">Studio Opening</h3>
                    <p className="text-primary-100 mb-16">
                      In 2015, we opened our first studio, providing a
                      professional space for all types of shoots.
                    </p>
                  </div>
                </div>
              </div>
              {/* Milestone 1 */}
              <div className="w-full md:w-1/2">
                <div className="flex relative">
                  <div className="bg-accent mt-2 shrink-0 w-4 h-4 rounded-full"></div>
                  <div className="bg-accent shrink-0 absolute border-l-2 h-full border-accent transform translate-x-2 translate-y-2"></div>
                  <div className="ml-4 text-primary-50">
                    <h3 className="font-bold text-lg mb-2">
                      National Recognition
                    </h3>
                    <p className="text-primary-100 mb-16">
                      In 2018, our work was featured in an national photography
                      magazine, expanding our reach.
                    </p>
                  </div>
                </div>
              </div>
              {/* Milestone 1 */}
              <div className="w-full md:w-1/2 mb-8">
                <div className="flex relative">
                  <div className="bg-accent mt-2 shrink-0 w-4 h-4 rounded-full"></div>
                  <div className="ml-4 text-primary-50">
                    <h3 className="font-bold text-lg mb-2">10th Anniversary</h3>
                    <p className="text-primary-100 mb-8">
                      In 2020, we celebrated our 10th anniversary with a
                      portfolio showcase event.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary-100 py-16 px-8">
        <div className="mx-auto text-center text-primary">
          <h2 className="text-3xl font-bold mb-4">Be a Part of Our Journey</h2>
          <p className="text-lg mb-8 text-primary-100">
            Interested in working with us? Reach out to learn more about our
            services and team.
          </p>
          <ButtonLink href="/contact" className="bg-accent">
            Contact Us
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
