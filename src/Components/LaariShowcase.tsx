import React, { useState } from "react";

// Placeholder images - in real implementation, these would be your actual imports
const flatpack = "../assets/flatpack.png";
const weather = "../assets/weather.png";
const custom = "../assets/custom.png";
const toolfree = "../assets/toolfree.png";
const l1 = "../assets/l1.png";
const l2 = "../assets/l2.png";
const l3 = "../assets/l3.png";
const l4 = "../assets/l4.png";
const l5 = "../assets/l5.png";
const circlesBg = "../assets/circles.png";

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
  // Additional tabs would go here...
];

// SimpleCarousel component (add this above your export default function)
function SimpleCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return null;

  const handleArrow = (dir: number) => {
    setIdx((prev) => {
      if (dir === 1) return prev === images.length - 1 ? 0 : prev + 1;
      else return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  return (
    <div style={{ position: "relative", width: 340, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: 350,
          height: 350,
          background: "#f7f7f7",
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          zIndex: 1,
          position: "relative"
        }}
      >
        <img src={images[idx]} alt={`carousel-img-${idx}`} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 20 }} />
      </div>
      {images.length > 1 && (
        <>
          <button
            style={{ position: "absolute", left: -40, top: "50%", transform: "translateY(-50%)", background: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontWeight: 700, fontSize: 20, color: "#117b8b", boxShadow: "0 2px 8px rgba(0,0,0,0.10)", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={() => handleArrow(-1)}
            aria-label="Previous"
          >
            &#10094;
          </button>
          <button
            style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)", background: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontWeight: 700, fontSize: 20, color: "#117b8b", boxShadow: "0 2px 8px rgba(0,0,0,0.10)", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={() => handleArrow(1)}
            aria-label="Next"
          >
            &#10095;
          </button>
        </>
      )}
      {/* Dots */}
      {images.length > 1 && (
        <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6, zIndex: 2 }}>
          {images.map((_, i) => (
            <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === idx ? "#117b8b" : "#bbb", display: "inline-block" }}></span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function LaariShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabContent[0]; // For now, just show the first tab

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
          width: 1300,
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          lineHeight: 1.4
        }}>
          <div style={{ marginBottom: 8 }}>{tab.infoBar[0]}</div>
          <div>{tab.infoBar[1]}</div>
        </div>
      </div>

      {/* Main content */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gap: 60,
        maxWidth: 1400,
        margin: "0 auto",
        padding: "0 40px",
        alignItems: "start"
      }}>
        {/* Left column */}
        <div style={{ 
          background: "#ffffff",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          height: "fit-content"
        }}>
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
          background: "#ffffff",
          borderRadius: 20,
          padding: 40,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          position: "relative"
        }}>
          <SimpleCarousel images={tab.images || []} />
        </div>

        {/* Right features */}
        <div style={{
          background: "#ffffff",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          height: "fit-content"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 24
          }}>
            {tab.rightFeatures.map((f, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: 16,
                background: "#f8fdfe",
                borderRadius: 12,
                border: "1px solid #e0f7fa"
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  background: "linear-gradient(135deg, #117b8b 0%, #0a3a43 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(17, 123, 139, 0.3)"
                }}>
                  <img src={f.icon} alt={f.text} style={{ width: 28, height: 28, objectFit: "contain" }} />
                </div>
                <div style={{
                  flex: 1
                }}>
                  <span style={{
                    color: "#117b8b",
                    fontWeight: 600,
                    fontSize: 15,
                    lineHeight: 1.3
                  }}>
                    {f.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(90deg, #0a3a43 0%, #117b8b 100%)",
        marginTop: 60,
        minHeight: 60,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
        width: "100%",
        padding: "0 13%"
      }}>
        {TABS.map((tabName, idx) => (
          <button
            key={tabName}
            onClick={() => setActiveTab(idx)}
            style={{
              background: activeTab === idx ? "#ffffff" : "transparent",
              color: activeTab === idx ? "#117b8b" : "#ffffff",
              fontWeight: activeTab === idx ? 700 : 500,
              fontSize: 16,
              border: "none",
              borderRadius: activeTab === idx ? "8px 8px 0 0" : 0,
              padding: "16px 24px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              position: "relative",
              ...(activeTab === idx && {
                transform: "translateY(-2px)",
                boxShadow: "0 -2px 8px rgba(0,0,0,0.1)"
              })
            }}
            onMouseOver={(e) => {
              if (activeTab !== idx) {
                (e.target as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
              }
            }}
            onMouseOut={(e) => {
              if (activeTab !== idx) {
                (e.target as HTMLButtonElement).style.background = "transparent";
              }
            }}
          >
            {tabName}
          </button>
        ))}
      </div>
    </section>
  );
}