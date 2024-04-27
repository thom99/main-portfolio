import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { foto } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full sm:h-[80vh] md:h-[80vh] lg:h-[95vh] h-[78vh] mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* <div className="w-5 h-5 rounded-full bg-[#4544a5]" /> */}
          <div className="w-5 h-5 rounded-full bg-[#AAA6C3]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#AAA6C3]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            {/* Hi, I'm <span className="text-[#4544a5]">Thomas</span> */}
            {/* Hi, I'm <span className="text-[#5a8afc]">Thomas</span> */}
            {/* Hi, I'm <span className="text-[#3a5697]">Thomas</span> */}
            {/* Hi, I'm <span className="text-secondary">Thomas</span> */}
            <span className="text-secondary">Hi, I'm</span> Thomas.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop user interfaces <br className="sm:block hidden" /> and web
            application.
          </p>
        </div>
      </div>

      <div className="absolute md:top-96 flex flex-col h-full items-center md:items-stretch justify-end md:justify-center md:flex-row w-full">
        <div className="flex justify-center items-center h-[30vh] md:h-[40vh] ">
          <img
            src={foto}
            alt="foto"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      {/* 
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#4544a5] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#4544a5] mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
