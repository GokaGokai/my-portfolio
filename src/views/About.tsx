// assets
import aboutPageImg from "../assets/about-me-page.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

// components
import { Icon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              Hello, I'm <span className="text-secondary">Southidej</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="text-center text-base text-textSecondary sm:text-lg xl:text-start">
              <span>An aspiring software developer and recent <strong>Université de Montréal</strong></span>
              <span className="sm:block"> <strong>B.Sc. in CS</strong> graduate with a strong foundation in <strong>full-stack development</strong>.</span>
            </div>
          </Reveal>


          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <a href="https://www.linkedin.com/in/southidej/" target="_blank">
              <div
                className="flex items-center justify-center h-10 w-10 cursor-pointer
                transition-all ease-linear duration-300 hover:scale-110"
              >
                <img src={linkedin} alt="linkedin" />
              </div>
            </a>

            <a href="https://github.com/GokaGokai" target="_blank">
              <div
                className="flex items-center justify-center h-10 w-10 cursor-pointer
                transition-all ease-linear duration-300 hover:scale-110"
              >
                <img src={github} alt="github" />
              </div>
            </a>
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.div
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="grid grid-cols-4 gap-4 max-w-full sm:max-w-[401px]"
          >
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" title="Python" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title="TypeScript" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="Javascript" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title="Java" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" title="PHP" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" title="C#" />

            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" title="FastAPI" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" title="Tailwind CSS" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" title="MongoDB" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" title="PostgreSQL" />

            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" title="Bash" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" title="VS Code" />
            <Icon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title="Docker" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
