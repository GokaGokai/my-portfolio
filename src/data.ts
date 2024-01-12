import cafe from "./assets/cafe.png";
import ddr from "./assets/ddr.png";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    category: "web",
    img: cafe,
    title: "Café sans-fil",
    link: "https://cafesansfil.onrender.com/",
  },
  {
    id: 2,
    category: "other",
    img: ddr,
    title: "DDR Dance Pad",
    link: "https://google.com",
  },
];
