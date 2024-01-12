import cafe from "./assets/cafe.png";
import ddr from "./assets/ddr.png";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string;
  description: string;
  tools: string;
}

export const projects: Project[] = [
  {
    id: 1,
    category: "web",
    img: cafe,
    title: "Café sans-fil",
    link: "https://cafesansfil.onrender.com/",
    description: "A web app for the cafés of UdeM.",
    tools: "FastAPI, React, MongoDB, Tailwind CSS, Render",
  },
  {
    id: 2,
    category: "other",
    img: ddr,
    title: "DDR Dance Pad",
    link: "https://youtube.com/shorts/OpIH9xendsc",
    description: "A dance pad made from scratch.",
    tools: "Arduino, Circuitry, Woodworking, Soldering, Painting",
  },
];
