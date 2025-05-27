import React, { useState } from "react";

import ir1 from "../assets/c-ir1.png";
import ir2 from "../assets/c-ir2.png";
import ir3 from "../assets/c-ir3.png";

import a1 from "../assets/c-a1.png";
import a2 from "../assets/c-a2.png";


const TABS = [
  "IR Cooking",
  "Solar cooking",
];

const tabContent = [
  // Orza Infrared Cooktop Clean Cooking
  {
    title: "ORZA",
    subtitle: "Infrared Cooktop Clean Cooking",
    infoBar: ["Faster heating, lower energy consumption, and safer use."],
    leftTitle: "Key Features",
    leftList: [
      "Scratch-resistant crystal glass plate",
      "Heat proof handles",
      "Temperature/power control knob",
      "4 cooking modes",
      "Timer",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      "For Catering services and Cloud kitchen",
      "For hostels and pg",
      "For hospitals",
      "For religious place and community centers",
    ],
    images: [ir1, ir2, ir3], // Use imported images for carousel
    rightFeatures: [
      { icon: "../assets/energyIcon.png", text: "Energy Efficient" }, // Placeholder icon
      { icon: "../assets/heatingIcon.png", text: "Rapid Heating" }, // Placeholder icon
      { icon: "../assets/safetyIcon.png", text: "Safety First" }, // Placeholder icon
      { icon: "../assets/sleekIcon.png", text: "Sleek Design" }, // Placeholder icon
    ],
  },
  // Agnit Solar powered cooktop
  {
    title: "AGNIT",
    subtitle: "Solar powered cooktop",
    infoBar: ["Cook without limits. No dependence on fuel or unreliable electricity."],
    leftTitle: "Key Features",
    leftList: [
      "Scratch-resistant crystal glass plate",
      "Outlets for connecting battery and solar panel",
      "Temperature/power control knob",
      "After charging battery runs up to 3 and a half hours",
      "4 cooking modes",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      "For rural women",
      "For travellers",
      "For carbon credit companies",
    ],
    images: [a1, a2], // Placeholder image
    rightFeatures: [
      { icon: "../assets/operationIcon.png", text: "Truly Off-Grid Operation" }, // Placeholder icon
      { icon: "../assets/safetyIcon.png", text: "Safe & Clean Cooking" }, // Placeholder icon
      { icon: "../assets/batteryIcon.png", text: "Battery-Compatible for Night Use" }, // Placeholder icon
      { icon: "../assets/smartIcon.png", text: "Smart Usage Monitoring (Optional)" }, // Placeholder icon
    ],
  },
];

// SimpleCarousel component for center images
function SimpleCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  if (!images || images.length === 0) return null;

  const handleArrow = (dir: number) => {
    if (animating) return;
    setAnimating(true);
    
    setTimeout(() => {
      setIdx((prev) => {
        if (dir === 1) return prev === images.length - 1 ? 0 : prev + 1;
        else return prev === 0 ? images.length - 1 : prev - 1;
      });
      setAnimating(false);
    }, 150);
  };

  return (
    <div style={{ 
      position: "relative", 
      width: "100%", 
      maxWidth: 500, 
      height: 400, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center" 
    }}>
      {/* Main image container */}
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
      }}>
        <img
          src={images[idx]}
          alt={`Laari product ${idx + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transition: animating ? "opacity 0.4s ease-in-out, transform 0.4s ease-in-out" : "none",
            opacity: animating ? 0.7 : 1,
            transform: animating ? "scale(0.95)" : "scale(1)"
          }}
        />
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            style={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              background: "linear-gradient(135deg, #117b8b 0%, #0a3a43 100%)",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              cursor: "pointer",
              color: "#ffffff",
              boxShadow: "0 4px 16px rgba(17, 123, 139, 0.4)",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              transition: "all 0.3s ease",
              opacity: animating ? 0.5 : 1
            }}
            onClick={() => handleArrow(-1)}
            aria-label="Previous image"
            disabled={animating}
          >
            ❮
          </button>
          <button
            style={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              background: "linear-gradient(135deg, #117b8b 0%, #0a3a43 100%)",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              cursor: "pointer",
              color: "#ffffff",
              boxShadow: "0 4px 16px rgba(17, 123, 139, 0.4)",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              transition: "all 0.3s ease",
              opacity: animating ? 0.5 : 1
            }}
            onClick={() => handleArrow(1)}
            aria-label="Next image"
            disabled={animating}
          >
            ❯
          </button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div style={{
          position: "absolute",
          bottom: -40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          gap: 12,
          zIndex: 3
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => !animating && setIdx(i)}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                border: "none",
                background: i === idx 
                  ? "linear-gradient(135deg, #117b8b 0%, #0a3a43 100%)" 
                  : "#d1d5db",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: i === idx 
                  ? "0 2px 8px rgba(17, 123, 139, 0.4)" 
                  : "0 1px 3px rgba(0,0,0,0.1)",
                transform: i === idx ? "scale(1.2)" : "scale(1)"
              }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div style={{
          position: "absolute",
          top: 16,
          right: 16,
          background: "rgba(17, 123, 139, 0.9)",
          color: "#ffffff",
          padding: "6px 12px",
          borderRadius: 20,
          fontSize: 14,
          fontWeight: 600,
          zIndex: 3,
          backdropFilter: "blur(4px)"
        }}>
          {idx + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export default function CleanCookingShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const tab = tabContent[activeTab];

  const handleTabChange = (newTabIndex: number) => {
    if (newTabIndex === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveTab(newTabIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section style={{ 
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)", 
      padding: 0,
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div style={{ 
        textAlign: "center", 
        paddingTop: 40,
        paddingBottom: 20
      }}>
        <h1 style={{
          color: "#117b8b",
          fontWeight: 900,
          fontSize: 48,
          letterSpacing: 2,
          margin: 0,
          lineHeight: 1.1,
          textShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          {tab.title}
        </h1>
        <div style={{
          color: "#117b8b",
          fontWeight: 400,
          fontSize: 24,
          fontStyle: "italic",
          marginTop: 8,
          letterSpacing: 0.5,
          opacity: 0.9
        }}>
          {tab.subtitle}
        </div>
      </div>

      {/* Info bar */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 40px",
        marginBottom: 40
      }}>
        <div style={{
          background: "linear-gradient(90deg, #0a3a43 0%, #117b8b 100%)",
          color: "#ffffff",
          borderRadius: 20,
          padding: "24px 60px",
          fontWeight: 600,
          fontSize: 16,
          maxWidth: 1200,
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          lineHeight: 1.4
        }}>
          <div style={{ marginBottom: 8 }}>{tab.infoBar[0]}</div>
          <div>{tab.infoBar[1]}</div>
        </div>
      </div>

      {/* Main content container with navigation */}
      <div style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "0 40px",
        marginBottom: 40
      }}>
        {/* White box container */}
        <div style={{
          background: "#ffffff",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          padding: 60,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          transition: "all 0.5s ease",
          opacity: isTransitioning ? 0.8 : 1,
          transform: isTransitioning ? "translateY(10px)" : "translateY(0)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            gap: 60,
            alignItems: "start"
          }}>
            {/* Left column */}
            <div>
              <div style={{ 
                color: "#117b8b", 
                fontWeight: 700, 
                fontSize: 18, 
                marginBottom: 16,
                borderBottom: "2px solid #e0f7fa",
                paddingBottom: 8
              }}>
                {tab.leftTitle}
              </div>
              <ul style={{ 
                color: "#555", 
                fontWeight: 400, 
                fontSize: 15, 
                marginBottom: 28,
                paddingLeft: 20,
                lineHeight: 1.6
              }}>
                {tab.leftList.map((item, i) => (
                  <li key={i} style={{ 
                    marginBottom: 8,
                    listStyleType: "disc"
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div style={{ 
                color: "#117b8b", 
                fontWeight: 700, 
                fontSize: 18, 
                marginBottom: 16,
                borderBottom: "2px solid #e0f7fa",
                paddingBottom: 8
              }}>
                {tab.leftTitle2}
              </div>
              <ul style={{ 
                color: "#555", 
                fontWeight: 400, 
                fontSize: 15,
                paddingLeft: 20,
                lineHeight: 1.6
              }}>
                {tab.leftList2.map((item, i) => (
                  <li key={i} style={{ 
                    marginBottom: 8,
                    listStyleType: "disc"
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Center carousel */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative"
            }}>
              <SimpleCarousel images={tab.images || []} />
            </div>

            {/* Right features */}
            <div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 32,
                alignItems: "center"
              }}>
                {tab.rightFeatures.map((f, i) => (
                  <div key={i} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <img 
                      src={f.icon} 
                      alt={f.text} 
                      style={{ 
                        width: 48, 
                        height: 48, 
                        objectFit: "contain", 
                        marginBottom: 12,
                        filter: "none"
                      }} 
                    />
                    <span style={{
                      color: "#0a3a43",
                      fontWeight: 500,
                      fontSize: 12,
                      textAlign: "center",
                      lineHeight: 1.3,
                      width: "120px"
                    }}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation bar - aligned with white box */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          background: "#117b8b",
          minHeight: 50,
          width: "100%",
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)"
        }}>
          {TABS.map((tabName, idx) => (
            <button
              key={tabName}
              onClick={() => handleTabChange(idx)}
              style={{
                background: "transparent",
                color: activeTab === idx ? "#ffffff" : "rgba(255,255,255,0.7)",
                fontWeight: activeTab === idx ? 700 : 400,
                fontSize: 16,
                border: "none",
                borderBottom: activeTab === idx ? "3px solid #ffffff" : "3px solid transparent",
                padding: "14px 28px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                position: "relative",
                flex: 1,
                maxWidth: 160,
                whiteSpace: "nowrap"
              }}
              onMouseOver={(e) => {
                if (activeTab !== idx) {
                  (e.target as HTMLButtonElement).style.color = "#ffffff";
                  (e.target as HTMLButtonElement).style.borderBottom = "3px solid rgba(255,255,255,0.3)";
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== idx) {
                  (e.target as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
                  (e.target as HTMLButtonElement).style.borderBottom = "3px solid transparent";
                }
              }}
            >
              {tabName}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}