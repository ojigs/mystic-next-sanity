import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface Props {
  title: string;
  href: string;
  Icon: IconType;
}

const ServiceCard = ({ title, href, Icon }: Props) => {
  return (
    <Link href={href} target="_blank">
      <div className="group perspective-1000 cursor-pointer w-full h-80">
        <div className="relative w-full h-full rounded-lg shadow-lg shadow-accent/15 transform-style-3d transition-transform duration-700 transform group-hover:rotate-y-180 group-active:rotate-y-180">
          <div className="backface-hidden bg-secondary-100 rounded-lg p-6 absolute w-full h-full inset-0 rotate-y-0">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <Icon className="text-4xl text-accent mb-4 mx-auto animate-spin-z-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <FaExternalLinkAlt className="absolute top-2 right-2 text-accent text-xl sm:hidden" />
            </div>
          </div>
          <div className="backface-hidden bg-[#595959] rounded-lg p-6 absolute w-full h-full inset-0 rotate-y-180">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <p className="text-center text-primary-50 mb-4">
                Fill out our Google Form for {title.toLowerCase()} inquiries.
              </p>
              <span className="text-accent font-bold hover:text-white transition-colors duration-300 glowing-text">
                Go to form &rarr;
              </span>
              <FaExternalLinkAlt className="absolute top-2 right-2 text-accent text-xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
