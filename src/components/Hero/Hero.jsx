// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "./Hero.css";

// function Hero() {
//   const heroRef = useRef(null);
//   const textRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(textRef.current.children, {
//         x: -80,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//       });

//       gsap.from(imageRef.current, {
//         x: 80,
//         opacity: 0,
//         duration: 1,
//         delay: 0.3,
//         ease: "power3.out",
//       });

//       gsap.to(".floating-badge", {
//         y: -10,
//         repeat: -1,
//         yoyo: true,
//         duration: 1.5,
//         ease: "sine.inOut",
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="hero" ref={heroRef}>
//       <div className="hero-left" ref={textRef}>
//         <h1>
//           Stay Connected <br />
//           Stay Social <br />
//           Stay You!
//         </h1>
//         <p>
//           A place where friendships grow, communities thrive, and moments
//           turn into unforgettable experiences.
//         </p>
//         <button className="hero-btn">Get Started</button>
//       </div>

//       {/* HERO RIGHT */}
//       <div className="hero-right" ref={imageRef}>
//         <img src="/image/phone2.png" alt="App Preview" />

//         {/* TOP BADGE */}
//         <div className="floating-badge badge-top">
//           🔥 Seamless Connections
//         </div>

//         {/* BOTTOM BADGE */}
//         <div className="floating-badge badge-bottom">
//           🌍 Discover & Explore
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;






import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);   // 👈 NEW

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        x: -80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.to(".floating-badge", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });
      const btn = buttonRef.current;

      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.08, duration: 0.25, ease: "power2.out" });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.25, ease: "power2.out" });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-left" ref={textRef}>
        <h1>
          Stay Connected <br />
          Stay Social <br />
          Stay You!
        </h1>
        <p>
          A place where friendships grow, communities thrive, and moments
          turn into unforgettable experiences.
        </p>
        <button ref={buttonRef} className="hero-btn">Get Started</button>
      </div>

      <div className="hero-right" ref={imageRef}>
        <img src="/image/phone2.png" alt="App Preview" />

        <div className="floating-badge badge-top">
          🔥 Seamless Connections
        </div>

        <div className="floating-badge badge-bottom">
          🌍 Discover & Explore
        </div>
      </div>
    </section>
  );
}

export default Hero;



