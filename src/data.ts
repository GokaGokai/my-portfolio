import cafe from "./assets/cafe.png";
import raytracer from "./assets/color_plink2.ray1440p10spp.png";
import ddr from "./assets/blitzpad.png";

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
    description: "Web app for student cafés of Université de Montréal.",
    tools: "FastAPI · React · MongoDB · Tailwind CSS · Render",
  },
  {
    id: 2,
    category: "raytracer",
    img: raytracer,
    title: "Raytracer",
    link: "https://cdn.discordapp.com/attachments/900402165179359234/1035923195280236574/color_plink2.ray1440p10spp.png?ex=65abd8a8&is=659963a8&hm=341a59cb04de477e6e94f47a711fbf2f3808ece6637b597f7f15a9ffa7381188&",
    description: "Ray tracing engine made from scratch.",
    tools: "C++ · CMake",
  },
  {
    id: 3,
    category: "arduino",
    img: ddr,
    title: "BlitzPad",
    link: "https://youtube.com/shorts/OpIH9xendsc",
    description: "DDR Dance Pad made from scratch.",
    tools: "Arduino · Circuitry · Woodworking · Soldering · Painting",
  },
];
