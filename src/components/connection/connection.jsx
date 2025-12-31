import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./connection.css";

gsap.registerPlugin(ScrollTrigger);

function Connection() {
  const sectionRef = useRef(null);
  const phonesRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

 
    tl.from(phonesRef.current, {
      x: -100,
      opacity: 0,
      stagger: 0.25,
      duration: 0.9,
      ease: "power3.out",
    })
    
      .from(
        textRef.current,
        {
          x: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="connection" ref={sectionRef}>
      <div className="connection-container">
        
        {/* LEFT: PHONES */}
        <div className="connection-phones">
          <img
            src="/image/p5.jpg"
            alt="Phone UI 1"
            ref={(el) => (phonesRef.current[0] = el)}
          />
          {/* <img
            src="/image/phone4.jpg"
            alt="Phone UI 2"
            ref={(el) => (phonesRef.current[1] = el)}
          /> */}
        </div>

        {/* RIGHT: TEXT */}
        <div className="connection-text" ref={textRef}>
          <h2>Where Every Click Sparks a Connection!</h2>
          <p>
            A small act of kindness today can create a lifetime of impact
            tomorrow. Stay connected, discover moments, and grow together.
          </p>

          <ul>
            <li>🎬 Short Videos & Reels</li>
            <li>🔔 Smart Notifications</li>
            <li>🌍 Interest-Based Communities</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Connection;

