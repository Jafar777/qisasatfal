import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import the CSS file separately
import ro3b from '../assets/ro3b.jpg'
import adventure from '../assets/adventure.jpg'
import mystery from '../assets/mystery.jpg'
import islamic from '../assets/islamic.jpg'
import civil from '../assets/civil.jpg'
import scifi from '../assets/sci-fi.jpg'
import education from '../assets/education.jpg'
import comedy from '../assets/comedy.jpg'
import history from '../assets/history.jpg'
import action from '../assets/action.jpg'
import animals from '../assets/animals.jpg'
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    // Advance to the next slide automatically every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex % 11) + 1); // Cycle through 1 to 3
      }, 6000); // Change slide every 6 seconds
  
      return () => clearInterval(interval); // Clear interval on component unmount
    }, []);
  
    const plusSlides = (n) => {
      setSlideIndex((prevIndex) => {
        const newIndex = prevIndex + n;
        return newIndex > 11 ? 1 : newIndex < 1 ? 11 : newIndex;
      });
    };
  
    const currentSlide = (n) => {
      setSlideIndex(n);
    };
  
    useEffect(() => {
      showSlides(slideIndex);
    }, [slideIndex]);
  
    const showSlides = (n) => {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
  
      Array.from(slides).forEach((slide) => {
        slide.style.display = "none";
      });
  
      Array.from(dots).forEach((dot) => {
        dot.className = dot.className.replace(" active", "");
      });
  
      if (slides[n - 1]) {
        slides[n - 1].style.display = "block";
        dots[n - 1].className += " active";
      }
    };

  return (
    <div className='mt-20'>
        <h1 className='text-center lg:mb-4 md:mb-4 mb-0 lg:text-xl md:text-lg text-base'>مجموعة واسعة من القصص تناسب الجميع</h1>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 11</div>
          <img src={adventure} alt="adventure" style={{ width: "100%" , height:'1000' }} />
          <div className="text">قصص مغامرات</div>
          
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 11</div>
          <img src={ ro3b} alt="horror" style={{ width: "100%" , height:'1000' }} />
          <div className="text">قصص رعب</div>
          
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 11</div>
          <img src={mystery} alt="mystery" style={{ width: "100%" , height:'1000' }} />
          <div className="text">قصص غموض</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">4 / 11</div>
          <img src={islamic} alt="islamic" style={{ width: "100%" , height:'1000' }} />
          <div className="text">قصص اسلامية</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">5 / 11</div>
          <img src={civil} alt="civil" style={{ width: "100%" , height:'1000' }} />
          <div className="text">قصص شعبية</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">6 / 11</div>
          <img src={scifi} alt="sci-fi" style={{ width: "100%" , height:'1000' }} />
          <div className="text">قصص خيال علمي</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">7 / 11</div>
          <img src={education} alt="education" style={{ width: "100%" , height:'1000' }} />
          <div className="text">قصص تعليمية</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">8 / 11</div>
          <img src={comedy} alt="comedy" style={{ width: "100%" , height:'1000' }} />
          <div className="text">قصص مضحكة</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">9 / 11</div>
          <img src={history} alt="history" style={{ width: "100%" , height:'1000' }} />
          <div className="text">قصص تاريخية</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">10 / 11</div>
          <img src={action} alt="action" style={{ width: "100%" , height:'1000' }} />
          <div className="text">قصص أكشن</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">11 / 11</div>
          <img src={animals} alt="animals" style={{ width: "100%", height:'1000'}} />
          <div className="text">قصص حيوانات</div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
        <span className="dot" onClick={() => currentSlide(6)}></span>
        <span className="dot" onClick={() => currentSlide(7)}></span>
        <span className="dot" onClick={() => currentSlide(8)}></span>
        <span className="dot" onClick={() => currentSlide(9)}></span>
        <span className="dot" onClick={() => currentSlide(10)}></span>
        <span className="dot" onClick={() => currentSlide(11)}></span>
      </div>
    </div>
  );
};

export default Slider;
