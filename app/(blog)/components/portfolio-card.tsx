import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import ButtonLink from "./button-link";
import Image from "next/image";

interface Props {
  title: string;
  href: string;
  imageSrc: string;
  portfolio: string;
}

const PortfolioCard = ({ title, href, imageSrc, portfolio }: Props) => {
  return (
    <Link href={href} target="_blank">
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
          <div className="w-full">
            <ButtonLink
              href={href}
              className="bg-secondary-100 text-center hover:text-primary-100 w-full"
            >
              {portfolio} portfolio
            </ButtonLink>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
