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
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My name is Thomas, and I’m a Front-End Developer passionate about
        building modern, fast, and intuitive web interfaces. I specialize in
        React and JavaScript/TypeScript, creating complete user experiences,
        from UI/UX interactions to API integrations, design systems, and
        performance-driven architectures.
        <br />
        <br />
        Over the past years, I’ve worked on enterprise-level products for the
        banking and financial sector (UniCredit, Illimity, corporate portals,
        dashboards, customer experiences), delivering features with high
        standards of scalability, maintainability, and security.
        <br />
        <br />I also work on full-stack side projects using Next.js, Supabase,
        Node APIs, and modern cloud services and on mobile with React Native.
      </motion.p>

      {/* Technologies & Tools */}
      <motion.div variants={fadeIn("", "", 0.15, 1)} className="mt-6">
        <h3 className="text-white font-semibold">Technologies &amp; Tools</h3>
        <ul className="mt-2 list-disc ml-5 space-y-1 text-secondary text-[15px] leading-[26px]">
          <li>
            <span className="text-white font-medium">Languages &amp; FE:</span>{" "}
            HTML5, CSS3/SASS, JavaScript, TypeScript
          </li>
          <li>
            <span className="text-white font-medium">Frameworks:</span> React,
            Next.js, React Native
          </li>
          <li>
            <span className="text-white font-medium">State Management:</span>{" "}
            Redux (Redux Toolkit, RTK Query)
          </li>
          <li>
            <span className="text-white font-medium">UI &amp; Design:</span>{" "}
            Tailwind CSS, FluentUI, Bootstrap, Framer Motion, Shadcn/UI
          </li>
          <li>
            <span className="text-white font-medium">Backend &amp; Cloud:</span>{" "}
            Supabase, Node.js APIs, OpenAPI, File Storage, Resend, Stripe
          </li>
          <li>
            <span className="text-white font-medium">Testing:</span> Jest
          </li>
          <li>
            <span className="text-white font-medium">Dev Tools:</span> Git,
            GitHub, Bitbucket, Webpack, Vite, VSCode, Postman, Jira, Jenkins
          </li>
          <li>
            <span className="text-white font-medium">Others:</span> ChartJS,
            CI/CD pipelines
          </li>
        </ul>
      </motion.div>

      {/* Experience */}
      <motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-6">
        <h3 className="text-white font-semibold">Experience</h3>
        <ul className="mt-2 list-disc ml-5 space-y-2 text-secondary text-[15px] leading-[26px]">
          <li>
            <span className="text-white font-medium">
              UniCredit Customer Experience:
            </span>{" "}
            sales &amp; after-sales flows for digital banking products;
            microfrontend architecture, dashboards, marketplace modules,
            insights &amp; charts.
          </li>
          <li>
            <span className="text-white font-medium">
              Illimity Bank – COMS Credit Origination System:
            </span>{" "}
            new Design System components, business workflows, UI modernization.
          </li>
          <li>
            <span className="text-white font-medium">Personal projects:</span>{" "}
            event booking platforms; e-commerce concepts; design systems;
            full-stack apps (auth, dashboards, QR systems, file uploads);
            AI-powered interfaces and creative tools.
          </li>
          <li>
            <span className="text-white font-medium">
              React SharePoint Webparts (SPFx):
            </span>{" "}
            custom React components with pnp.js and Microsoft APIs.
          </li>
        </ul>
      </motion.div>

      {/* What motivates me */}
      <motion.p
        variants={fadeIn("", "", 0.25, 1)}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I love working in collaborative environments, meeting high standards,
        and continuously improving both my technical skills and design thinking.
        I enjoy exploring new technologies and delivering clean, efficient, and
        memorable digital experiences.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
