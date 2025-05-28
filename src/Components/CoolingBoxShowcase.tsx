import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import styled from "styled-components";

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

// Add import for the fire icon and DC-1 image
import fireIcon from "../assets/fireIcon.png";
import dc1Image from "../assets/Dc-1.png";
// Ensure you have actual assets at these paths or update the paths

// Define Interfaces
interface ListItem {
  text: string;
  icon?: string;
}

interface TabContent {
  title: string;
  subtitle: string;
  infoBar: string[];
  leftTitle: string;
  leftList: string[];
  leftTitle2: string;
  leftList2: ListItem[];
  images: string[];
  rightFeatures: ListItem[];
}

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
      { icon: fireIcon, text: "Proprietary heating technology" }, // Use imported icon
      { icon: portableIcon, text: "Portable" }, // Use imported icon
      { icon: safety1Icon, text: "Improved safety measures" }, // Use imported icon
      { icon: costIcon, text: "Cost - effective" }, // Use imported icon
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
      { icon: coolingIcon, text: "Proprietary Cooling Technology" }, // Using imported icon
      { icon: portableIcon, text: "Portable" }, // Using imported icon
      { icon: safety1Icon, text: "Improved Safety Measures" }, // Using imported icon
      { icon: costIcon, text: "Cost - Effective" }, // Using imported icon
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
    images: [dc1Image],
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
              background: "transparent",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              cursor: "pointer",
              color: "#cdcdcd",
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
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!animating) {
                (e.target as HTMLButtonElement).style.color = "rgba(17, 123, 139, 0.9)";
              }
            }}
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!animating) {
                (e.target as HTMLButtonElement).style.color = "#cdcdcd";
              }
            }}
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
              background: "transparent",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              cursor: "pointer",
              color: "#cdcdcd",
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
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!animating) {
                (e.target as HTMLButtonElement).style.color = "rgba(17, 123, 139, 0.9)";
              }
            }}
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!animating) {
                (e.target as HTMLButtonElement).style.color = "#cdcdcd";
              }
            }}
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
          background: "transparent",
          color: "#cdcdcd",
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

// Define Interfaces for styled component props
interface LeftColumnProps {
  $expanded: boolean;
}

interface TabButtonProps {
  $active: boolean;
}

// Styled Components for Responsive Design
const Container = styled.div`
  background: white;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  padding: 0;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled(motion.div)`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

const Title = styled(motion.h1)`
  color: #117b8b;
  font-weight: 900;
  font-size: 48px;
  letter-spacing: 2px;
  margin: 0;
  line-height: 1.1;
  text-shadow: 0 4px 16px rgba(17, 123, 139, 0.2);

  @media (max-width: 768px) {
    font-size: 24px;
    letter-spacing: 1px;
  }
`;

const Subtitle = styled(motion.div)`
  color: #117b8b;
  font-weight: 400;
  font-size: 24px;
  font-style: italic;
  margin-top: 8px;
  letter-spacing: 0.5px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 4px;
  }
`;

const InfoBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 0 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 20px;
  }
`;

const InfoBarContent = styled(motion.div)`
  background: linear-gradient(90deg, #0a3a43 0%, #117b8b 100%);
  color: #ffffff;
  border-radius: 20px;
  padding: 24px 60px;
  font-weight: 600;
  font-size: 16px;
  max-width: 1200px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(17, 123, 139, 0.25);
  line-height: 1.4;

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 12px;
    border-radius: 16px;
  }
`;

const ContentGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 60px;
  align-items: start;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const MobileFeatures = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
`;

const FeatureItem = styled.div`
  text-align: center;
  width: 80px;

  img {
    width: 32px;
    height: 32px;
  }

  p {
    font-size: 10px;
    margin-top: 4px;
  }
`;

const DesktopFeatures = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftColumn = styled(motion.div)<LeftColumnProps>`
  @media (max-width: 768px) {
    display: ${props => props.$expanded ? 'block' : 'none'};
  }
`;

const ReadMoreButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 10px auto;
    padding: 8px 16px;
    background: #117b8b;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    margin-top: 35px;

    &:hover {
      background: #0a3a43;
    }
  }
`;

const NavTabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: #117b8b;
  min-height: 60px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    background: transparent;
    gap: 8px;
    margin-top: 20px;
  }
`;

const TabButton = styled(motion.button)<TabButtonProps>`
  background: transparent;
  color: ${props => props.$active ? "#ffffff" : "rgba(255,255,255,0.7)"};
  font-weight: ${props => props.$active ? 700 : 400};
  font-size: 16px;
  border: none;
  border-bottom: 4px solid ${props => props.$active ? "#ffffff" : "transparent"};
  padding: 16px 32px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  flex: 1;
  white-space: nowrap;

  @media (max-width: 768px) {
    background: ${props => props.$active ? "#117b8b" : "#e0e0e0"};
    color: ${props => props.$active ? "white" : "#444"};
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-size: 14px;
  }

  &:hover {
    @media (min-width: 769px) {
      color: #ffffff;
      border-bottom: 4px solid rgba(255,255,255,0.3);
    }
  }
`;

// Add useIsMobile hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};

export default function CoolingBoxShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  const [readMore, setReadMore] = useState(false); // Add readMore state
  const isMobile = useIsMobile(); // Use the hook

  // Add refs for scroll animations
  const headerRef = useRef(null);
  const infoBarRef = useRef(null);
  const contentRef = useRef(null);

  // Add useInView hooks for scroll-triggered animations
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isInfoBarInView = useInView(infoBarRef, { once: true, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 });

  const handleTabChange = (newTabIndex: number) => {
    if (newTabIndex === activeTab) return;
    
    setDirection(newTabIndex > activeTab ? 1 : -1);
    setActiveTab(newTabIndex);
  };

  const tab = tabContent[activeTab];

  // Enhanced animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Add scroll-based animation variants
  const scrollFadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const scrollFadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container>
      <Header ref={headerRef} initial="hidden" animate={isHeaderInView ? "visible" : "hidden"} variants={scrollFadeUp}>
        <Title variants={scrollFadeUp}>{tab.title}</Title>
        <Subtitle variants={scrollFadeUp}>{tab.subtitle}</Subtitle>
      </Header>

      <InfoBar ref={infoBarRef} initial="hidden" animate={isInfoBarInView ? "visible" : "hidden"} variants={scrollFadeUp}>
        <InfoBarContent variants={scrollFadeUp}>
          {tab.infoBar.map((text, i) => (
            <motion.div key={i} variants={scrollFadeUp}>{text}</motion.div>
          ))}
        </InfoBarContent>
      </InfoBar>

      <motion.div ref={contentRef} initial="hidden" animate={isContentInView ? "visible" : "hidden"} variants={scrollFadeIn}>
        <motion.div variants={scrollFadeUp} style={{
          background: "#ffffff",
          borderRadius: 24,
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          overflow: "hidden",
          maxWidth: isMobile ? "unset" : "1200px",
          margin: isMobile ? "0" : "0 auto"
        }}>
          <div style={{ padding: isMobile ? 20 : 60, minHeight: isMobile ? 300 : 500 }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`content-${activeTab}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
              >
                <ContentGrid>
                  {/* Mobile Features */}
                  <MobileFeatures>
                    {tab.rightFeatures.map((f, i) => (
                      <FeatureItem key={i}>
                        <img src={f.icon} alt={f.text} />
                        <p>{f.text}</p>
                      </FeatureItem>
                    ))}
                  </MobileFeatures>

                  {/* Left Column */}
                  <LeftColumn
                    $expanded={readMore || !isMobile}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      variants={itemFadeIn}
                      style={{
                        color: "#117b8b",
                        fontWeight: 700,
                        fontSize: 18,
                        marginBottom: 16,
                        borderBottom: "3px solid #e0f7fa",
                        paddingBottom: 8
                      }}
                    >
                      {tab.leftTitle}
                    </motion.div>
                    <motion.ul
                      variants={staggerContainer}
                      style={{
                        color: "#555",
                        fontWeight: 400,
                        fontSize: 15,
                        marginBottom: 32,
                        paddingLeft: 20,
                        lineHeight: 1.7
                      }}
                    >
                      {tab.leftList.map((item, i) => (
                        <motion.li
                          key={i}
                          variants={itemFadeIn}
                          style={{
                            marginBottom: 10,
                            listStyleType: "disc"
                          }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.div
                      variants={itemFadeIn}
                      style={{
                        color: "#117b8b",
                        fontWeight: 700,
                        fontSize: 18,
                        marginBottom: 16,
                        borderBottom: "3px solid #e0f7fa",
                        paddingBottom: 8
                      }}
                    >
                      {tab.leftTitle2}
                    </motion.div>
                    <motion.ul
                      variants={staggerContainer}
                      style={{
                        color: "#555",
                        fontWeight: 400,
                        fontSize: 15,
                        lineHeight: 1.6,
                        listStyleType: "none",
                        padding: 0
                      }}
                    >
                      {tab.leftList2.map((item, i) => (
                        <motion.li
                          key={i}
                          variants={itemFadeIn}
                          style={{
                            marginBottom: 12,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {item.icon && (
                            <motion.img
                              variants={itemFadeIn}
                              src={item.icon}
                              alt={`${item.text} icon`}
                              style={{
                                width: 18,
                                height: 18,
                                marginRight: 10,
                                objectFit: "contain",
                                filter: "none"
                              }}
                            />
                          )}
                          {item.text}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </LeftColumn>

                  {/* Center Carousel */}
                  <motion.div variants={itemFadeIn} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <SimpleCarousel images={tab.images} />
                  </motion.div>

                  {/* Desktop Features */}
                  <DesktopFeatures>
                    {tab.rightFeatures.map((f, i) => (
                      <motion.div key={i} variants={itemFadeIn} style={{ textAlign: "center", marginBottom: 50 }}>
                        <img src={f.icon} alt={f.text} style={{ width: 40, height: 40 }} />
                        <p>{f.text}</p>
                      </motion.div>
                    ))}
                  </DesktopFeatures>
                </ContentGrid>
              </motion.div>
            </AnimatePresence>
          </div>

          {isMobile && (
            <ReadMoreButton onClick={() => setReadMore(prev => !prev)}>
              {readMore ? 'Show Less' : 'Read More'}
            </ReadMoreButton>
          )}

          <NavTabs>
            {TABS.map((tabName, idx) => (
              <TabButton
                key={tabName}
                $active={activeTab === idx}
                onClick={() => handleTabChange(idx)}
                whileHover={!isMobile ? { scale: 1.02 } : {}}
                whileTap={{ scale: 0.98 }}
              >
                {tabName}
              </TabButton>
            ))}
          </NavTabs>
        </motion.div>
      </motion.div>
    </Container>
  );
}