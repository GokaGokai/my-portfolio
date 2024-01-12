// assets
import aboutPageImg from "../assets/about-me-page.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

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
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
                A recent graduate from <strong>Université de Montréal</strong> with a <strong>B.Sc in Computer Science</strong>. I am passionate about web development and I am always looking for new challenges. I am currently looking for a full-time position as a web developer.
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
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
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" title="Python" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title="TypeScript" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="Javascript" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title="Java" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" title="PHP" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" title="C#" />

            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" title="FastAPI" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" title="Tailwind CSS" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" title="MongoDB" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" title="PostgreSQL" />

            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" title="Bash" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" title="VS Code" />
            <SocialMediaIcon imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title="Docker" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
