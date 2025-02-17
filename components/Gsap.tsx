"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedPage = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.to("body", {
      backgroundColor: "#111",
      scrollTrigger: {
        trigger: sectionRefs.current[1],
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });

    gsap.to("body", {
      backgroundColor: "#222",
      scrollTrigger: {
        trigger: sectionRefs.current[2],
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="text-white min-h-screen">
      {["첫 번째 섹션", "두 번째 섹션", "세 번째 섹션"].map((text, index) => (
        <section
          key={index}
          ref={(el) => (sectionRefs.current[index] = el!)}
          className="h-screen flex items-center justify-center text-4xl font-bold"
        >
          {text}
        </section>
      ))}
    </div>
  );
};

export default AnimatedPage;
