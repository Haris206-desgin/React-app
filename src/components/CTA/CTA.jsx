import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./CTA.css";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(btnRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
      ease: "back.out(1.7)",
    });

    gsap.from(phoneRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });
  }, []);

  return (
    <section className="cta" ref={sectionRef}>
      <div className="cta-content">
        {/* LEFT TEXT */}
        <div className="cta-text">
          <h1>
            Be the Reason <br /> Someone Smiles Today!
          </h1>
          <p>
            Your generosity can change lives. Every donation brings hope,
            support, and a brighter future. Give today and make a difference!
          </p>
          <button ref={btnRef} className="cta-btn">
            Donate Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="cta-visual" ref={phoneRef}>
          <img src="image/su2.png" alt="Donation App UI" />
             {/* <img src="/image/su.png" alt="Google Play" className="store-img" /> */}
          <img src="/image/su.png" alt="Thank You Screen" className="overlay" />
        </div>
      </div>
    </section>
  );
}

export default CTA;
