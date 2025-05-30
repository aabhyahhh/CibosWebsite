import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import styled from "styled-components";

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

// Add imports for the leftList2 icons based on the image crops
// Please replace these with the actual paths to your icon assets
import teaIcon from "../assets/teaIcon.png"; // Placeholder
import streetFoodCartIcon from "../assets/streetVendorIcon.png"; // Placeholder
import fashionIcon from "../assets/fashionIcon.png"; // Placeholder
import kioskIcon from "../assets/kioskIcon.png"; // Placeholder
import bookStallIcon from "../assets/bookStallIcon.png"; // Placeholder
import infoBoothIcon from "../assets/infoBoothIcon.png"; // Placeholder
import juiceStallIcon from "../assets/juiceStallIcon.png"; // Placeholder
import iceCreamIcon from "../assets/juiceStallIcon.png"; // Placeholder
import produceCartIcon from "../assets/streetVendorIcon.png"; // Placeholder
import deliveryBikeIcon from "../assets/deliveryBikeIcon.png"; // Placeholder (assuming FMCG micro-delivery)
import tailoringIcon from "../assets/tailoringIcon.png"; // Placeholder
import foodTruckIcon from "../assets/streetVendorIcon.png"; // Placeholder
import juiceTruckIcon from "../assets/juiceStallIcon.png"; // Placeholder
import cateringVanIcon from "../assets/cateringVanIcon.png"; // Placeholder
import promotionTruckIcon from "../assets/promotionTruckIcon.png"; // Placeholder
import homeCookedIcon from "../assets/homeCookedIcon.png"; // Placeholder
import shgIcon from "../assets/shgIcon.png"; // Placeholder
import clothingIcon from "../assets/fashionIcon.png"; // Placeholder
import stationeryIcon from "../assets/stationeryIcon.png"; // Placeholder
import popUpIcon from "../assets/popUpIcon.png"; // Placeholder
import hotelKioskIcon from "../assets/kioskIcon.png"; // Placeholder
import samplingCartIcon from "../assets/stationeryIcon.png"; // Placeholder
import beverageTrolleyIcon from "../assets/juiceStallIcon.png"; // Placeholder
import salonTrolleyIcon from "../assets/salonTrolleyIcon.png"; // Placeholder
import rollingKioskIcon from "../assets/fashionIcon.png"; // Placeholder
import miniBarIcon from "../assets/miniBarIcon.png"; // Placeholder

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
      { text: "Tea, coffee, and beverage stalls", icon: teaIcon },
      { text: "Ready-to-eat snacks and street food", icon: streetFoodCartIcon },
      { text: "Fashion accessories and jewellery displays", icon: fashionIcon },
      { text: "Brand activations and sampling kiosks", icon: kioskIcon },
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
      { text: "Chaat, sandwich, and roll counters", icon: streetFoodCartIcon },
      { text: "Mobile book or toy stalls", icon: bookStallIcon },
      { text: "NGO or government info booths", icon: infoBoothIcon },
      { text: "Juice or lassi stations", icon: juiceStallIcon },
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
      { text: "Ice creams and cold beverages", icon: iceCreamIcon },
      { text: "Fresh produce or snacks", icon: produceCartIcon },
      { text: "FMCG micro-delivery", icon: deliveryBikeIcon },
      { text: "Tailoring/repair services", icon: tailoringIcon },
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
      { text: "Fast food or fusion cuisine trucks", icon: foodTruckIcon },
      { text: "Juice or dessert trucks", icon: juiceTruckIcon },
      { text: "Catering vans", icon: cateringVanIcon },
      { text: "Corporate promotion trucks", icon: promotionTruckIcon },
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
      { text: "Home-cooked snacks and pickles", icon: homeCookedIcon },
      { text: "SHG group products", icon: shgIcon },
      { text: "Clothing and Daily Essentials", icon: clothingIcon },
      { text: "Accessories and stationery", icon: stationeryIcon },
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
      { text: "Brand-led pop-ups and experiential marketing", icon: popUpIcon },
      { text: "Hotel lobby kiosks or café extensions", icon: hotelKioskIcon },
      { text: "Ready-to-eat snacks and street food", icon: streetFoodCartIcon },
      { text: "In-store sampling carts", icon: samplingCartIcon },
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
      { text: "Beverage service trolleys", icon: beverageTrolleyIcon },
      { text: "Salon or wellness trolley setups", icon: salonTrolleyIcon },
      { text: "Branded rolling kiosks for events or exhibitions", icon: rollingKioskIcon },
      { text: "Mini bar setups for room service or banquet floors", icon: miniBarIcon },
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
    color: #555;
    font-weight: 400;
    line-height: 1.6;
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

export default function LaariShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const isMobile = useIsMobile();
  
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
      <p style={{ 
        fontSize: "15px",
        color: "#555",
        fontWeight: 400,
        lineHeight: 1.6
      }}>{f.text}</p>
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