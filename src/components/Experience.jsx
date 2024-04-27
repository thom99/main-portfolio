import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  console.log({ experience });
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#0a0f1b", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <h4
          className="text-secondary text-[20px] font-bold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </h4>
        {experience.projects.map((item) => {
          return (
            <>
              <div>
                <h3 className="mt-10 text-secondary text-[18px] font-bold italic">
                  {item.title}
                </h3>
                <span className="text-[14px]">{item.date}</span>
                {/* <h4
                  className="text-secondary text-[16px] font-bold"
                  style={{ margin: 0 }}
                >
                  {item.company_name}
                </h4> */}
                <p
                  className="text-secondary text-[14px] font-normal underline italic"
                  style={{ marginTop: 10 }}
                >
                  {item.project}
                </p>
              </div>
              <ul className="mt-5 list-disc ml-5 space-y-2">
                {item.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              {/* {item.description} */}
            </>
          );
        })}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
