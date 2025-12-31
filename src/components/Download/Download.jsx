

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Download.css";

gsap.registerPlugin(ScrollTrigger);

function Download() {
  const phoneRef = useRef(null);

  useEffect(() => {
    gsap.from(phoneRef.current, {
      scrollTrigger: {
        trigger: ".download-container",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="download-section">
      <div className="download-container">
        <div className="download-text">
          <h1>Join the Fun – Download <br /> MyBindle Now!</h1>
          <p>
            Your Social Network, Your Way. <br />
            Download MyBindle Now and Be a Part <br />
            of a Community That's Always Evolving!
          </p>

          <div className="store-buttons">
            
            <a 
              // href="https://apps.apple.com/your-app-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/image/appstore.png" alt="App Store" className="store-img" />
            </a>

           
            <a 
              // href="https://play.google.com/store/apps/your-app-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/image/playstore.png" alt="Google Play" className="store-img" />
            </a>
          </div>
        </div>

        <div className="download-images" ref={phoneRef}>
          <img src="/image/p62.png" alt="App Preview" className="phone-back" />
          <img src="/image/p62.png" alt="App Preview" className="phone-front" />
        </div>
      </div>
    </section>
  );
}

export default Download;






