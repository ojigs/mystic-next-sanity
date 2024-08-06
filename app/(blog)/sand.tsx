import Image from "next/image";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Images container */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
          {/* Image 1 */}
          <div className="relative w-full h-64 lg:h-96">
            <Image
              src="/pexels.jpeg"
              alt="About Us Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Image 2 */}
          <div className="absolute bottom-0 right-0 lg:bottom-auto lg:right-auto lg:top-1/4 lg:left-1/4 w-2/3 h-48 lg:h-72">
            <Image
              src="/inspire.jpeg"
              alt="About Us Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="w-full lg:w-1/2 lg:pl-16">
          <h2 className="text-3xl font-bold mb-4">About Our Studio</h2>
          <p className="mb-4">
            We are passionate about capturing life's most precious moments
            through the art of photography and videography. Our team of skilled
            professionals brings years of experience and creativity to every
            project.
          </p>
          <p className="mb-4">
            Whether it's a wedding, corporate event, or personal portrait
            session, we strive to deliver stunning visuals that tell your unique
            story. Our commitment to quality and attention to detail sets us
            apart in the industry.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
