import { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((techonlogy) => (
        <div className="w-28 h-28" key={techonlogy.name}>
          {windowSize.innerWidth < 500 && windowSize.innerHeight < 1000 ? (
            <img src={techonlogy.icon} alt="" />
          ) : (
            <BallCanvas icon={techonlogy.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default SectionWrapper(Tech, "");
