import { useState } from 'react';
import temp1 from "../assets/temp1.png"
import temp2 from "../assets/temp2.png"
import temp3 from "../assets/temp3.png"
import temp4 from "../assets/temp4.png"
import temp5 from "../assets/temp5.png"
import temp6 from "../assets/temp6.png"
import temp7 from "../assets/temp7.png"


import './ProductSlider.css'

const TemperatureControlledSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handlePrevArrow = () => {
    setActiveSlide(prev => 
      prev > 1 ? prev - 1 : 7
    );
  };

  const handleNextArrow = () => {
    setActiveSlide(prev => 
      prev < 7 ? prev + 1 : 1
    );
  };

  return (
    <div id="slider">
      <input 
        type="radio" 
        name="slider" 
        id="slide1" 
        checked={activeSlide === 1} 
        onChange={() => setActiveSlide(1)} 
      />
      <input 
        type="radio" 
        name="slider" 
        id="slide2" 
        checked={activeSlide === 2} 
        onChange={() => setActiveSlide(2)} 
      />
      <input 
        type="radio" 
        name="slider" 
        id="slide3" 
        checked={activeSlide === 3} 
        onChange={() => setActiveSlide(3)} 
      />
      <input 
        type="radio" 
        name="slider" 
        id="slide4" 
        checked={activeSlide === 4} 
        onChange={() => setActiveSlide(4)} 
      />
       <input 
        type="radio" 
        name="slider" 
        id="slide5" 
        checked={activeSlide === 5} 
        onChange={() => setActiveSlide(5)} 
      />
       <input 
        type="radio" 
        name="slider" 
        id="slide6" 
        checked={activeSlide === 6} 
        onChange={() => setActiveSlide(6)} 
      />
       <input 
        type="radio" 
        name="slider" 
        id="slide7" 
        checked={activeSlide === 7} 
        onChange={() => setActiveSlide(7)} 
      />
      
      <div id="slides">
        <div id="overflow">
          <div className="inner">
            <div className="slide slide1">
              <div className="slide-content">
                <img src={temp1} alt="Slide 1" className="product-image w-full h-auto" />
              </div>
            </div>
            <div className="slide slide2">
              <div className="slide-content">
                <img src={temp2} alt="Slide 2" className="product-image w-full h-auto" />
              </div>
            </div>
            <div className="slide slide3">
              <div className="slide-content">
                <img src={temp3} alt="Slide 3" className="product-image w-full h-auto" />
              </div>
            </div>
            <div className="slide slide4">
              <div className="slide-content">
                <img src={temp4} alt="Slide 4" className="product-image w-full h-auto" />
              </div>
            </div>
            <div className="slide slide5">
              <div className="slide-content">
                <img src={temp5} alt="Slide 5" className="product-image w-full h-auto" />
              </div>
            </div>
            <div className="slide slide6">
              <div className="slide-content">
                <img src={temp6} alt="Slide 6" className="product-image w-full h-auto" />
              </div>
            </div>
            <div className="slide slide7">
              <div className="slide-content">
                <img src={temp7} alt="Slide 7" className="product-image w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="navigation-arrows">
          <div 
            className="prev-arrow" 
            onClick={handlePrevArrow}
          >
            &#10094;
          </div>
          <div 
            className="next-arrow" 
            onClick={handleNextArrow}
          >
            &#10095;
          </div>
        </div>
        
        <div id="bullets">
          <label 
            htmlFor="slide1" 
            className={activeSlide === 1 ? 'active' : ''}
          ></label>
          <label 
            htmlFor="slide2" 
            className={activeSlide === 2 ? 'active' : ''}
          ></label>
          <label 
            htmlFor="slide3" 
            className={activeSlide === 3 ? 'active' : ''}
          ></label>
          <label 
            htmlFor="slide4" 
            className={activeSlide === 4 ? 'active' : ''}
          ></label>
          <label 
            htmlFor="slide5" 
            className={activeSlide === 5 ? 'active' : ''}
          ></label>
          <label 
            htmlFor="slide6" 
            className={activeSlide === 6 ? 'active' : ''}
          ></label>
          <label 
            htmlFor="slide7" 
            className={activeSlide === 7 ? 'active' : ''}
          ></label>
        </div>
      </div>
    </div>
  );
};

export default TemperatureControlledSlider;