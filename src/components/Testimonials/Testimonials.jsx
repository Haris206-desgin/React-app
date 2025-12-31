








import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Emily R",
    country: "USA",
    text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
    avatar: "/image/emily.jpg", // Placeholder path for the avatar image
  },
  {
    name: "Ryan", 
    country: "USA",   
    text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.",
    avatar: "/image/ryan.jpg",
  },
  {
    name: "Sophie M",
    country: "UK",
    text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
    avatar: "/image/sophie.jpg",
  },
  {
    name: "Javier L",
    country: "Spain",
    text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.",
    avatar: "/image/javier.png",
  },
  {
    name: "Lucas T",
    country: "Brazil",
    text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
    avatar: "/image/lucas.jpg",
  },
  {
    name: "Nora S",
    country: "Canada",
    text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.",
    avatar: "/image/nora.png",
  },
];

function Testimonials() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((item, i) => (
          <div
            className="testimonial-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="stars">★★★★★</div>
            <p>{item.text}</p>
            
            {/* New section for Avatar, Name, and Country */}
            <div className="user-info">
              {/* The Avatar/DP element */}
              <img src={item.avatar} alt={`Avatar of ${item.name}`} className="user-avatar" />
              
              <div className="user-details">
                <h4>{item.name}</h4>
                <span>{item.country}</span>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* The See More button from your original code */}
      <button className="see-more">See More</button>
    </section>
  );
}

export default Testimonials;
