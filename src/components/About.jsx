import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  const ref = useRef(null);
  return (
    <Tilt className="xs:w-[250px] w-full" ref={ref}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col bg-[#0a0f1b]"
        >
          <img src={icon} alt={title} className="w-30 h-30 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My name is Thomas and I like to develop things on the Internet. When I
        chose to create my first web page, "Hello World," in 2016, I became
        interested in web development. It was at that point that a passion was
        born. Moving forward I started learning and practicing web programming
        using online courses from sites like Udemy, Zenva, Pluralsight and
        various YouTube videos. I have the pleasure of working in a software
        company called Aesys Tech, where I have been involved in several
        projects such as a banking management system.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 xs:justify-center md:justify-start ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
