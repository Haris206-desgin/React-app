import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Features.css";

gsap.registerPlugin(ScrollTrigger);


const features = [
  { title: "🔥Seamless Connections", desc: "Stay in touch with friends, family, and like-minded people." },
  { title: "📸Share Your Story", desc: "Upload photos, videos, and updates to express yourself." },
  { title: "💬Real-Time Chat", desc: "Instant messaging with smooth and fast experience." },
  { title: "🔒Privacy First", desc: "Your data, your control. We prioritize your privacy." },
  { title: "🌏Discover & Explore", desc: "Find trending content and follow pages you love." },
  { title: "💼Grow Your Business", desc: "Promote your brand and connect with customers." },
];


function Features() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="features">



      <h2>Features That Keep You Hooked!</h2>
      <p className="features-sub">
        Meet, Chat, Share – Anytime, Anywhere!
      </p>

      <div className="features-grid">
        {features.map((item, i) => (
          <div
            className="feature-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Features;
