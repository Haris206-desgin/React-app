import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Install.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Download App", desc: "Get it from Play Store or App Store." },
  { title: "Create Profile", desc: "Sign up and personalize your profile." },
  { title: "Start Connecting", desc: "Chat, share, and explore instantly." },
];

function Install() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: ".install",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="install">
      <h2>Install App in 3 Easy Steps</h2>

      <div className="install-grid">
        {steps.map((step, i) => (
          <div
            className="install-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <span>0{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Install;
