import React, { useState } from "react";

// Placeholder imports for Khojo images/icons - replace with actual paths
import khojoMain from '../assets/khojoMain.png'; // Placeholder for the central app screenshot
import khojoWhatsapp from "../assets/khojoWhatsapp.png";
import findIcon from '../assets/findIcon.png'; // Placeholder for Find Nearby Vendors icon
import offersIcon from '../assets/offersIcon.png'; // Placeholder for Get Offers icon
import feedbackIcon from '../assets/feedbackIcon.png'; // Placeholder for Share Feedbacks icon
import verifiedIcon from '../assets/verifiedIcon.png'; // Placeholder for Verified and Trusted icon
import manageIcon from "../assets/manageIcon.png";
import listIcon from "../assets/listIcon.png";
import shareFeedbackIcon from "../assets/shareFeedbackIcon.png";
import connectIcon from "../assets/connectIcon.png";

const TABS = [
  "Street Vendor Discovery Webapp",
  "WhatsApp Workflow for Street Vendors",
];

const tabContent = [
  // Street Vendor Discovery Webapp content from image
  {
    title: "LAARI™ Khojo",
    subtitle: "Digital platform",
    infoBar: ["Vendor discovery, government support and business enablement platform"],
    leftTitle: "Key Features",
    leftList: [
      "Connects Street Vendors with Customers in Real-Time",
      "View Updated Vendor Details, Including Menu, Hours, and Ratings",
      "Support Local Businesses by Choosing Verified Vendors.",
    ],
    leftTitle2: "Use Cases and Applications",
    leftList2: [
      "Night Market Discovery",
      "Food Walks & Tourism Zones",
      "Vendor Onboarding Drives",
      "Urban Lunch Crowd",
    ],
    images: [khojoMain], // Placeholder main image
    rightFeatures: [
      { icon: findIcon, text: "Find Nearby Vendors" }, // Placeholder icon
      { icon: offersIcon, text: "Get Offers and Recommendations" }, // Placeholder icon
      { icon: feedbackIcon, text: "Share Feedbacks" }, // Placeholder icon
      { icon: verifiedIcon, text: "Verified and Trusted" }, // Placeholder icon
    ],
  },
  // Placeholder for WhatsApp Workflow for Street Vendors content
  {
    title: "LAARI™ Khojo",
    subtitle: "WhatsApp Workflow for Street Vendors",
    infoBar: ["Vendor discovery, government support and business enablement platform"],
    leftTitle: "Key Features",
    leftList: [
      "Real-time location sharing with customers",
      "Easy license & loan application support",
      "Direct access to verified suppliers",
      "Daily updates to boost visibility & trust",
    ],
    leftTitle2: "Use Cases and Applications",
    leftList2: [
      "New Vendor Starting a Street Food Stall",
      "Existing Vendor Relocating to a New Spot",
      "Vendor Preparing for a Festive Festive Season Rush",
      "Vendor Applying for Hygiene Certification",
    ],
    images: [khojoWhatsapp], // Placeholder main image
    rightFeatures: [
      { icon: manageIcon, text: "Manages financial aspects" },
      { icon: listIcon, text: "Verified Suppliers List" },
      { icon: shareFeedbackIcon, text: "Share Feedbacks" },
      { icon: connectIcon, text: "Easy to connect" },
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

export default function LaariKhojoShowcase() {
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
          {tab.infoBar[0]}
        </div>
      </div>

      {/* Main content with integrated navigation */}
      <div style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "0 40px",
        marginBottom: 40
      }}>
        <div style={{
          background: "#ffffff",
          borderRadius: 24,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          transition: "all 0.5s ease",
          opacity: isTransitioning ? 0.8 : 1,
          transform: isTransitioning ? "translateY(10px)" : "translateY(0)",
          overflow: "hidden"
        }}>
          {/* Content Area */}
          <div style={{ padding: 60 }}>
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

          {/* Bottom navigation bar - aligned with white box bottom */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            background: "#117b8b",
            minHeight: 60
          }}>
            {TABS.map((tabName, idx) => (
              <button
                key={tabName}
                onClick={() => handleTabChange(idx)}
                style={{
                  background: "transparent",
                  color: activeTab === idx ? "#ffffff" : "rgba(255,255,255,0.7)",
                  fontWeight: activeTab === idx ? 700 : 400,
                  fontSize: 14,
                  border: "none",
                  borderBottom: activeTab === idx ? "4px solid #ffffff" : "4px solid transparent",
                  padding: "16px 20px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  position: "relative",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1
                }}
                onMouseOver={(e) => {
                  if (activeTab !== idx) {
                    (e.target as HTMLButtonElement).style.color = "#ffffff";
                    (e.target as HTMLButtonElement).style.borderBottom = "4px solid rgba(255,255,255,0.3)";
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== idx) {
                    (e.target as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
                    (e.target as HTMLButtonElement).style.borderBottom = "4px solid transparent";
                  }
                }}
              >
                {tabName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};