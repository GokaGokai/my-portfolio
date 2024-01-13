// react
import { FC } from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  link: string;
  description: string;
  tools: string[];
}

const Card: FC<CardProps> = ({ imgSrc, title, link, description, tools }) => {

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className="relative group flex items-center justify-center py-12 px-8 bg-accent
      hover:bg-hoverPrimary flex-1 cursor-pointer min-w-fit
        rounded-2xl overflow-hidden transition-all duration-700 ease-in-out hover:scale-[1.01]"
      >
        <img
          src={imgSrc}
          alt=""
          className="transition-all rounded-lg group-hover:mt-12 duration-700 backdrop-blur-0 group-hover:scale-[1.02] ease-in-out md:max-h-[430px] md:w-auto max-h-[350px]"
        />

        <div className="text-textPrimary absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-center w-full px-8 z-10">
          <h3 className="text-base pt-1 sm:text-lg font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
          <ul className="text-xs mt-2">
            {tools.map(tool => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default Card;
