import React, { useState } from "react";

//Icons
import flatpack from "../assets/l-flatpack.png";
import weather from "../assets/l-weather.png";
import custom from "../assets/l-custom.png";
import toolfree from "../assets/l-toolfree.png";
import lock from "../assets/lv-lockIcon.png";
import roof from "../assets/lv-roofIcon.png";
import surface from "../assets/lv-surfaceIcon.png";
import bike from "../assets/lt-bike.png";
import fabrication from "../assets/fabrication.png";
import interior from "../assets/interior.png";
import women from "../assets/womenIcon.png";
import seat from "../assets/seatIcon.png";
import operate from "../assets/operateIcon.png";
import reuse from "../assets/reuseIcon.png";
import customer from "../assets/customerIcon.png";

//Laari Flex
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";
import l4 from "../assets/l4.png";
import l5 from "../assets/l5.png";
//Laari Vault
import lv1 from "../assets/lv1.png";
import lv2 from "../assets/lv2.png";
import lv3 from "../assets/lv3.png";
//Laari Trike
import lt1 from "../assets/lt1.png";
import lt2 from "../assets/lt2.png";
import lt3 from "../assets/lt3.png";
import lt4 from "../assets/lt4.png";
//Laari Max
import lm1 from "../assets/lm1.png";
import lm2 from "../assets/lm2.png";
import lm3 from "../assets/lm3.png";
import lm4 from "../assets/lm4.png";
//Laari Saathi
import ls1 from "../assets/ls1.png";
import ls2 from "../assets/ls2.png";
import ls3 from "../assets/ls3.png";
import ls4 from "../assets/ls4.png";
import ls5 from "../assets/ls5.png";
//Laari Serve
import lse1 from "../assets/lse1.png";
import lse2 from "../assets/lse2.png";
import lse3 from "../assets/lse3.png";
//Laari Custom
import lc1 from "../assets/lc1.png";
import lc2 from "../assets/lc2.png";
import lc3 from "../assets/lc3.png";
import lc4 from "../assets/lc4.png";
import lc5 from "../assets/lc5.png";

import circlesBg from "../assets/circles.png";

const TABS = [
  "Laari Flex",
  "Laari Vault",
  "Laari Trike",
  "Laari Max", 
  "Laari Saathi", 
  "Laari Custom",
  "Laari Serve"
];

const tabContent = [
  {
    // Laari Flex
    title: "LAARI™",
    subtitle: "Modular infrastructure for everyone",
    infoBar: [
      "Laari Flex is a lightweight, fully foldable mobile cart designed for dynamic entrepreneurs.",
      "Its flatpack build ensures easy transport and quick setup - fully operational within two minutes by a single person"
    ],
    leftTitle: "Ideal Setups & Environments",
    leftList: [
      "Busy streets and public corners",
      "Malls and indoor retail zones",
      "Outdoor festivals and flea markets",
      "Campus or institutional pop-ups",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      "Tea, coffee, and beverage stalls",
      "Ready-to-eat snacks and street food",
      "Fashion accessories and jewellery displays",
      "Brand activations and sampling kiosks",
    ],
    images: [l5, l2, l1, l4, l3],
    rightFeatures: [
      { icon: flatpack, text: "Flatpack design for mobility" },
      { icon: weather, text: "Weather-resistant" },
      { icon: custom, text: "Custom size/material options" },
      { icon: toolfree, text: "Tool-free, 2-minute setup" },
    ],
  },
  // Laari Vault
  {
    title: "LAARI™",
    subtitle: "Modular infrastructure for everyone",
    infoBar: [
      "Laari Vault is a lockable vending cart that converts from a compact box to a full-height display with a detachable roof.",
      "Designed for daily vendors who need both mobility and security."
    ],
    leftTitle: "Ideal Setups & Environments",
    leftList: [
      "Daily street vending locations",
      "Market clusters and food courts",
      "Gated communities",
      "Institutional campuses",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      "Chaat, sandwich, and roll counters",
      "Mobile book or toy stalls",
      "NGO or government info booths",
      "Juice or lassi stations",
    ],
    images: [lv1, lv2, lv3],
    rightFeatures: [
      { icon: lock, text: "Lockable structure" },
      { icon: roof, text: "Collapsible roof" },
      { icon: weather, text: "Weather-protective" },
      { icon: surface, text: "Branding surface" },
    ],
  },
  // Laari Trike
  {
    title: "LAARI™",
    subtitle: "Modular infrastructure for everyone",
    infoBar: [
      "Laari Go is a tricycle vending cart for mobile sales, with manual and electric options for optimal mobility and stability.",
      "The customizable cart fits a common trike chassis, allowing easy scaling and adaptation for various vendor needs."
    ],
    leftTitle: "Ideal Setups & Environments",
    leftList: [
      "Door-to-door sales routes",
      "Tourist zones and beachfronts",
      "Large residential colonies",
      "Rural and peri-urban streets",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      "Ice creams and cold beverages",
      "Fresh produce or snacks",
      "FMCG micro-delivery",
      "Tailoring/repair services",
    ],
    images: [lt1, lt2, lt3, lt4],
    rightFeatures: [
      { icon: bike, text: "Manual/electric trike" },
      { icon: custom, text: "Custom size/material options" },
      { icon: weather, text: "Weather-protective" },
      { icon: surface, text: "Branding surface" },
    ],
  },
    // Laari Max
  {
    title: "LAARI™",
    subtitle: "Modular infrastructure for everyone",
    infoBar: [
      "Laari Max is a fully customizable food truck solution designed for high- traffic, formal F&B retail.",
      "Built to meet Municipal norms, it's available in various sizes and customizable for cuisines, equipment, or branding."
    ],
    leftTitle: "Ideal Setups & Environments",
    leftList: [
      "City streets and urban food courts",
      "Event grounds",
      "Office parks",
      "College campus",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      "Fast food or fusion cuisine trucks",
      "Juice or dessert trucks",
      "Catering vans",
      "Corporate promotion trucks",
    ],
    images: [lm1, lm2, lm3, lm4],
    rightFeatures: [
      { icon: bike, text: "Manual/electric trike" },
      { icon: fabrication, text: "End-to-end fabrication & compliance" },
      { icon: interior, text: "Custom interior layouts" },
      { icon: surface, text: "Branding surface" },
    ],
  },
      // Laari Saathi
  {
    title: "LAARI™",
    subtitle: "Modular infrastructure for everyone",
    infoBar: [
      "Laari Saathi is a purpose driven vending cart designed specifically for micro - entrepreneurs in rural and semi- urban regions.",
      "With a secure, lockable design, the cart is built for ease, affordability, and scale—supporting women-led livelihoods in Bhuj."
    ],
    leftTitle: "Ideal Setups & Environments",
    leftList: [
      "Rural and semi-urban markets",
      "Haats and Local Fairs",
      "Temple and Tourist Areas",
      "Community Events",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      "Home-cooked snacks and pickles",
      "SHG group products",
      "Clothing and Daily Essentials",
      "Accessories and stationery",
    ],
    images: [ls1, ls2, ls3, ls4, ls5],
    rightFeatures: [
      { icon: seat, text: " Integrated seat for vendors" },
      { icon: lock, text: "Lockable structure" },
      { icon: operate, text: "Easy to operate, clean and maintain" },
      { icon: women, text: "Designed for local women vendors and SHGs" },
    ],
  },
        // Laari Custom
  {
    title: "LAARI™",
    subtitle: "Modular infrastructure for everyone",
    infoBar: [
      "Laari Custom offers fully personalized carts and kiosks tailored to a client's brand, style, and functional needs.",
      "Designed with each client, these carts merge function and storytelling—every detail, from layout to lighting, reflects the brand vision."
    ],
    leftTitle: "Ideal Setups & Environments",
    leftList: [
      "High-street pop-ups",
      "Semi-permanent urban kiosks",
      "Malls and indoor retail zones",
      "Daily street vending locations",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      "Brand-led pop-ups and experiential marketing",
      "Hotel lobby kiosks or café extensions",
      "Ready-to-eat snacks and street food",
      "In-store sampling carts",
    ],
    images: [lc1, lc2, lc3, lc4, lc5],
    rightFeatures: [
      { icon: customer, text: "Enhances customer engagement" },
      { icon: fabrication, text: "End-to-end fabrication & compliance" },
      { icon: custom, text: "Custom size/material options" },
      { icon: surface, text: "Branding surface" },
    ],
  },
  //Laari Serve
  {
    title: "LAARI™",
    subtitle: "Modular infrastructure for everyone",
    infoBar: [
      "Laari Serve offers compact, brand-aligned trolleys and mini bar units for in-premise service in retail and hospitality spaces.",
      "Ideal for serving, display, or table-side use, these units combine utility with brand-aligned design."
    ],
    leftTitle: "Ideal Setups & Environments",
    leftList: [
      "Cafés, lounges, and fine-dining restaurants",
      "Event venues, hotels, and resorts",
      "Breweries, tasting rooms, or mocktail bars",
      "Hotel lobbies",
    ],
    leftTitle2: "Use cases and applications",
    leftList2: [
      "Beverage service trolleys",
      "Salon or wellness trolley setups",
      "Branded rolling kiosks for events or exhibitions",
      "Mini bar setups for room service or banquet floors",
    ],
    images: [lse1, lse2, lse3],
    rightFeatures: [
      { icon: flatpack, text: "Flatpack design for mobility" },
      { icon: surface, text: "Branding surface" },
      { icon: custom, text: "Custom size/ material options" },
      { icon: reuse, text: "Reusable and mobile" },
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

export default function LaariShowcase() {
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
                  fontSize: 16,
                  border: "none",
                  borderBottom: activeTab === idx ? "4px solid #ffffff" : "4px solid transparent",
                  padding: "16px 32px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  position: "relative",
                  flex: 1,
                  whiteSpace: "nowrap"
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
