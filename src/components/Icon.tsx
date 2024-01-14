// mui
import { Tooltip } from "@mui/material";

// react
import { FC } from "react";

interface IconProps {
  imgSrc: string;
  title: string;
}

const Icon: FC<IconProps> = ({ imgSrc, title }) => {
  return (
    <Tooltip title={title} placement="bottom" arrow>
      <div
        className="flex items-center justify-center h-20 w-20 rounded-full bg-icons
        hover:scale-105 transition-all ease-linear duration-300"
      >
        <img src={imgSrc} alt="" />
      </div>
    </Tooltip>
  );
};

export default Icon;
