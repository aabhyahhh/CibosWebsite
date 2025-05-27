import React, { useState } from "react";

import cool1 from "../assets/temp1.png";
import cool2 from "../assets/temp2.png";
import cool3 from "../assets/temp3.png";
import cool4 from "../assets/temp4.png";
import cool5 from "../assets/temp5.png";

import heat1 from "../assets/temp6.png";
import heat2 from "../assets/temp7.png";

import coolingIcon from "../assets/coolingIcon.png";
import portableIcon from "../assets/portableIcon.png";
import safety1Icon from "../assets/safety1Icon.png";
import costIcon from "../assets/costIcon.png";

// Add imports for the new icons based on the image
import deliveryIcon from "../assets/deliveryIcon1.png"; // Placeholder path
import streetVendorIcon from "../assets/streetVendorIcon.png"; // Placeholder path
import alertIcon from "../assets/alertIcon.png"; // Placeholder path

// Add imports for the new icons based on the images
import agriculturalIcon from "../assets/agriculturalIcon.png"; // Placeholder path for wheat icon
import pharmaIcon from "../assets/pharmaIcon.png"; // Placeholder path for factory icon
// Ensure you have actual assets at these paths or update the paths


const TABS = [
  "Heated delivery box",
  "Cold delivery box", // Placeholder tab
  "DC Compressor"
];

const tabContent = [
  // Heated delivery box content from image
  {
    title: "CIBOS™",
    subtitle: "Temperature controlled delivery box",
    infoBar: ["Battery operated solar powered retrofittable hotbox that can reach up to a temperature of 150 degree Celsius to keep food hot"],
    leftTitle: "Key Features",
    leftList: [
      "12 V DC compressor used",
      "Battery charging time is 2 hours",
      "Runs up to 6 hours on one charge",
      "Compatible with solar",
      "PTC element for efficient, even cooking",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      { text: "Food delivery", icon: deliveryIcon }, // Assuming deliveryIcon is the correct icon for heated food delivery
      { text: "Street vending", icon: streetVendorIcon }, // Assuming streetVendorIcon is correct for heated street vending
      { text: "Defense, emergency and disaster relief", icon: alertIcon }, // Assuming alertIcon is correct for heated defense/emergency
    ],
    images: [cool1, cool2, cool3, cool4, cool5], // Use imported heated images
    rightFeatures: [
      { icon: "../assets/fireIcon.png", text: "Proprietary heating technology" }, // Placeholder icon for heating
      { icon: "../assets/portableIcon.png", text: "Portable" }, // Placeholder icon for portable
      { icon: "../assets/safety1Icon.png", text: "Improved safety measures" }, // Placeholder icon for safety
      { icon: "../assets/costIcon.png", text: "Cost - effective" }, // Placeholder icon for cost effective
    ],
  },
  // Placeholder for Cold delivery box content
  {
    title: "CIBOS™",
    subtitle: "Temperature Controlled Delivery Box",
    infoBar: ["Battery-operated solar powered cool box to preserve perishables in off-grid manner"],
    leftTitle: "Key Features",
    leftList: [
      "4.5 Hours Run Time Per Charge",
      "Charging Time : 3 hours",
      "Compatible With Solar",
      "Temperature Down to -4°C.",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      { text: "Food Delivery", icon: deliveryIcon },
      { text: "Street Vending", icon: streetVendorIcon },
      { text: "Agricultural Logistics", icon: agriculturalIcon },
      { text: "Pharmaceuticals and Vaccinations", icon: pharmaIcon },
      { text: "Defense, Emergency and Disaster Relief", icon: alertIcon },
    ],
    images: [heat1, heat2], // Use imported cooling images
    rightFeatures: [
      { icon: "../assets/coolingIcon.png", text: "Proprietary Cooling Technology" }, // Using imported icon
      { icon: "../assets/portableIcon.png", text: "Portable" }, // Using imported icon
      { icon: "../assets/safety1Icon.png", text: "Improved Safety Measures" }, // Using imported icon
      { icon: "../assets/costIcon.png", text: "Cost - Effective" }, // Using imported icon
    ],
  },
  {
    title: "CIBOS™",
    subtitle: "DC Cooling System For Future",
    infoBar: ["DC compressors made in India for the world with multiple applications"],
    leftTitle: "Key Features",
    leftList: [
      "Ensured Cooling with Utmost Safety",
      "Weighs 700 gms",
      "Compatible With Solar",
      "Cooling Capacity: upto 20,000 BTU/h",
    ],
    leftTitle2: "Use Cases and Applications",
    leftList2: [
      { text: "Street Vending", icon: streetVendorIcon }, // Example: using the cold box street vending icon
      { text: "Agricultural Logistics", icon: agriculturalIcon }, // Example: using the agricultural icon
      { text: "Pharmaceuticals and Vaccinations", icon: pharmaIcon }, // Example: using the pharma icon
      { text: "Defense, Emergency and Disaster Relief", icon: alertIcon }, // Example: using the defense icon
    ],
    images: ["../assets/Dc-1.png"],
    rightFeatures: [
      { icon: coolingIcon, text: "Proprietary Cooling Technology" },
      { icon: portableIcon, text: "Portable" },
      { icon: safety1Icon, text: "Improved Safety Measures" },
      { icon: costIcon, text: "Cost - Effective" },
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

export default function CoolingBoxShowcase() {
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
        </div>
      </div>

      {/* Main content container with aligned navigation */}
      <div style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "0 40px",
        marginBottom: 40
      }}>
        {/* White box container */}
        <div style={{
          background: "#ffffff",
          borderRadius: "24px 24px 0 0", // Only top corners rounded
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
                lineHeight: 1.6,
                listStyleType: "none", // Remove default list bullets
                padding: 0 // Remove default padding
              }}>
                {tab.leftList2.map((item, i) => (
                  <li key={i} style={{
                    marginBottom: 12, // Increased space between list items
                    display: "flex", // Use flexbox for icon and text alignment
                    alignItems: "center", // Vertically center icon and text
                  }}>
                    {item.icon && (
                      <img
                        src={item.icon} // Use icon path from the data
                        alt={`${item.text} icon`}
                        style={{
                          width: 18, // Adjust size as needed
                          height: 18, // Adjust size as needed
                          marginRight: 10, // Space between icon and text
                          objectFit: "contain",
                          filter: "none" // Keep filter as is
                        }}
                      />
                    )}
                    {item.text} {/* Use text from the data */}
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
                    <div style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 12,
                      width: 48,
                      height: 48
                    }}>
                      <img
                        src={f.icon}
                        alt={f.text}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          filter: "none"
                        }}
                      />
                    </div>
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

        {/* Bottom navigation bar - now aligned with white box */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          background: "#117b8b",
          minHeight: 50,
          borderRadius: "0 0 24px 24px", // Only bottom corners rounded
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
                maxWidth: 200,
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