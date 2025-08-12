import  { useState, useRef, useEffect } from "react";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  const [showBall, setShowBall] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowBall(true);
            observer.unobserve(entry.target); // stop observing after load
          }
        });
      },
      { threshold: 0.15 } // load when 15% visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-row flex-wrap justify-center gap-10">
      {showBall
        ? technologies.map((technology) => (
            <div className="h-28 w-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))
        : technologies.map((technology) => (
            // Placeholder boxes until BallCanvas loads
            <div className="h-28 w-28" key={technology.name} />
          ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
