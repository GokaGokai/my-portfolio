// assets
import homePageImg from "../assets/home-page.svg";
import downloadIcon from "../assets/download-btn-icon.svg";
import me from "../assets/me.png";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

// react-scroll
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col 
          xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl
              font-bolt text-textPrimary uppercase"
          >
            Creative
            <br />
            <span className="text-secondary">
              <Typewriter
                words={["Developer", "Designer"]}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <Link to="contact" smooth>
              <Button secondary>Contact me</Button>
            </Link>
            <a href="https://gokagokai.github.io/my-portfolio/SouthidejOudanonh_Resume_2024.pdf">
              <Button icon={downloadIcon}>Download CV</Button>
            </a>
          </motion.div>
        </div>

        <motion.img
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={me}
          alt=""
          className="max-w-full sm:max-w-[401px] relative top-0 right-0 xl:right-[5.5rem]"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;
