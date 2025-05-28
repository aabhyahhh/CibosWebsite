import React from 'react';
import "./App.css";

import banner2 from "./assets/Banner2.png";
import laariIcon from "./assets/laariIcon.png";
import cookingIcon from "./assets/cookingIcon.png";
import deliveryIcon from "./assets/deliveryIcon.png";
import digitalIcon from "./assets/digitalIcon.png";
import banner3 from "./assets/banner3.png";
import client1 from "./assets/client1.jpg";
import client2 from "./assets/client2.png";
import client3 from "./assets/client3.png";
import client4 from "./assets/client4.jpg";
import client5 from "./assets/client5.png";
import client6 from "./assets/client6.jpg";
import client7 from "./assets/client7.jpg";
import logo from "./assets/Cibos-logo.png";
import phoneIcon from "./assets/phone-icon.png";
import locationIcon from "./assets/locationIcon.png";
import mailIcon from "./assets/mailIcon.png";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import s5 from "./assets/s5.png";
import s6 from "./assets/s6.png";
import s7 from "./assets/s7.png";
import s8 from "./assets/s8.png";
import s9 from "./assets/s9.png";
import s10 from "./assets/s10.png";
import s11 from "./assets/s11.png";
import s12 from "./assets/s12.png";
import s13 from "./assets/s13.png";
import s14 from "./assets/s14.png";
import s15 from "./assets/s15.png";
import s16 from "./assets/s16.png";
import a1 from "./assets/a1.jpg";
import a2 from "./assets/a2.jpg";
import a3 from "./assets/a3.jpg";
import a4 from "./assets/a4.jpg";
import a5 from "./assets/a5.jpg";
import l1 from "./assets/l1.png";
import solarRight from "./assets/solar-right.png";
import batteryLeft from "./assets/battery-left.png";
import digitalPlatform from "./assets/digitalPlatform.png";
import LaariShowcase from "./Components/LaariShowcase";
import CleanCookingShowcase from "./Components/CleanCookingShowcase";
import CoolingBoxShowcase from "./Components/CoolingBoxShowcase";
import LaariKhojoShowcase from "./Components/LaariKhojoShowcase";

if (typeof window !== 'undefined') {
  (window as any).__BACKGROUND_IMAGES__ = {
    l1,
    solarRight,
    batteryLeft,
    digitalPlatform
  };
}

function App() {
  return (
    <>
      {/* Section 1 */}
      <div className="banner-top">
        <img src={logo} alt="Banner Top" className="banner-top-img" />
      </div>
      {/* Section 2 */}
      <div className="wrapper">
        <div className="image-container">
          <img src={banner2} className="banner2" alt="Banner" />
          <div className="image-content">
            <div className="content-inner">
              <h1>the streets never sleep...</h1>
              <p>
                we see the micro entrepreneurs—the ones who grind every day,
                making just enough to get by, yet always daring to dream bigger.
                They don't complain. They don't stop. And we ask: What if they
                didn't have to choose between progress and affordability?
                Between sustainability and convenience? What if they could have
                both?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="product-categories">
        <div className="categories-container">
          <button
            className="category-item"
            onClick={() =>
              (
                document.getElementById("laari-section") as HTMLElement
              ).scrollIntoView({ behavior: "smooth" })
            }
          >
            <img src={laariIcon} alt="LAARI" className="category-icon" />
            <h3 className="category-title">
              LAARI<sup>TM</sup>
            </h3>
            <p className="category-desc">Food Carts, Kiosks & Pods</p>
            <p className="category-desc">Portable Retail Shops</p>
          </button>

          <button
            className="category-item"
            onClick={() =>
              (
                document.getElementById("clean-cooking-section") as HTMLElement
              ).scrollIntoView({ behavior: "smooth" })
            }
          >
            <img
              src={cookingIcon}
              alt="Clean Cooking"
              className="category-icon"
            />
            <h3 className="category-title">Clean Cooking</h3>
            <p className="category-desc">Solar-Powered Cookstoves</p>
            <p className="category-desc">Infrared Cookstoves</p>
          </button>

          <button
            className="category-item"
            onClick={() =>
              (
                document.getElementById(
                  "digital-platform-section"
                ) as HTMLElement
              ).scrollIntoView({ behavior: "smooth" })
            }
          >
            <img
              src={digitalIcon}
              alt="Digital Platform"
              className="category-icon"
            />
            <h3 className="category-title">Digital Platform</h3>
            <p className="category-desc">Vendor Discovery Platform</p>
            <p className="category-desc">WhatsApp-Based Vendor Support</p>
          </button>

          <button
            className="category-item"
            onClick={() =>
              (
                document.getElementById(
                  "temperature-controlled-section"
                ) as HTMLElement
              ).scrollIntoView({ behavior: "smooth" })
            }
          >
            <img
              src={deliveryIcon}
              alt="Temperature Controlled Delivery"
              className="category-icon"
            />
            <h3 className="category-title">Temperature Controlled Delivery</h3>
            <p className="category-desc">Portable Heating Boxes</p>
            <p className="category-desc">Portable Cooling Boxes</p>
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <section>
        <div className="slider-title">
          <h1>Our Clients</h1>
          <div className="slider">
            <div className="slider-items">
              <img src={client1} alt="Client Logo" />
              <img src={client2} alt="Client Logo" />
              <img src={client3} alt="Client Logo" />
              <img src={client4} alt="Client Logo" />
              <img src={client5} alt="Client Logo" />
              <img src={client6} alt="Client Logo" />
              <img src={client7} alt="Client Logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <div className="wrapper2">
        <div className="image-container2">
          <img src={banner3} className="banner3" alt="Banner" />
          <div className="image-content2">
            <div className="content-inner2">
              <h1>
                The Cibos<sup>TM</sup> Setup - Ecosystem for Micro-Entrepreneurs
              </h1>
              <p>
                The streets never rest, and neither should opportunities for
                micro-entrepreneurs. Cibos provides the infrastructure,
                technology, and digital tools that empower vendors to run their
                businesses efficiently and sustainably.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 - New Vendor & Product Section */}
      {/* Laari Showcase Section */}
      <section id="laari-section">
        <LaariShowcase />
      </section>

      {/* Clean Cooking Showcase Section */}
      <section id="clean-cooking-section">
        <CleanCookingShowcase />
      </section>

      {/* Temperature Controlled Delivery Showcase Section */}
      <section id="temperature-controlled-section">
        <CoolingBoxShowcase />
      </section>

      {/* Digital Platform Showcase Section */}
      <section id="digital-platform-section">
        <LaariKhojoShowcase />
      </section>

      {/* SUPPORTED BY */}
      <section className="customers-partners-section">
        <h2 className="customers-partners-title">Supported by</h2>
        <div className="customers-partners-logos">
          <img src={s1} alt="" />
          <img src={s2} alt="" />
          <img src={s3} alt="" />
          <img src={s4} alt="" />
          <img src={s5} alt="" />
          <img src={s6} alt="" />
          <img src={s7} alt="" />
          <img src={s8} alt="" />
          <img src={s9} alt="" />
          <img src={s10} alt="" />
          <img src={s11} alt="" />
          <img src={s12} alt="" />
          <img src={s13} alt="" />
          <img src={s14} alt="" />
          <img src={s15} alt="" />
          <img src={s16} alt="" />
        </div>
      </section>

      <section id="achievements-section">
        <div className="achievements-container">
          <div className="achievements-grid">
            <div className="achievement-item1">
              <img src={a1} alt="SolarX Startup Challenge Winners" />
              <div className="achievement-description">
                <h1>Winners</h1>
                <p>
                  of the SolarX Startup Challenge by the International Solar
                  Alliance. Presented solutions to the Honorable Prime Minister
                  of India, Ministry of New and Renewable Energy, German
                  Minister of Energy, and other global leaders. Recognized as a
                  leading innovator in clean energy and sustainable
                  entrepreneurship.
                </p>
              </div>
            </div>
            <div className="achievement-small-grid">
              <div className="achievement-item2">
                <img src={a2} alt="Top 10 Startup in SolarX Challenge" />
                <div className="achievement-description">
                  <p>
                    Recognized as a Top 10 Startup in SolarX Challenge 2024 with
                    $15,000 prize
                  </p>
                </div>
              </div>
              <div className="achievement-item3">
                <img src={a4} alt="Hot Plates Deployment" />
                <div className="achievement-description">
                  <p>
                    Deployed 20+ Hot plates at Ministry of New and Renewable
                    Energy and International Solar Alliance
                  </p>
                </div>
              </div>
              <div className="achievement-item4">
                <img src={a5} alt="Founder Presentation" />
                <div className="achievement-description">
                  <p>
                    Our Founder Mr. Aditya Dave explaining the Hot Plate to
                    German Ministers and dignitaries
                  </p>
                </div>
              </div>
              <div className="achievement-item5">
                <img src={a3} alt="News and Media Coverage" />
                <div className="achievement-description">
                  <p>
                    News and Social Media coverage of Re-Invest 2024 Summit at
                    Gandhinagar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="" className="Cibos-logo" />
          </div>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <img className="footer-icon" src={phoneIcon} />
              <span>+91 6353050357</span>
            </div>
            <div className="footer-contact-item">
              <img className="footer-icon" src={mailIcon} />
              <span>aditya@cibos.in</span>
            </div>
            <div className="footer-contact-item">
              <img src={locationIcon} alt="" className="footer-icon" />
              <span>Ahmedabad</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
