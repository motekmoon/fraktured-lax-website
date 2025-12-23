"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function HeroImage() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Detect mobile/touch device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
        "ontouchstart" in window
      );
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll-based reveal (mobile only)
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.6) {
            setIsRevealed(true);
          }
        });
      },
      { threshold: [0.6] }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  // Handle tap/click (mobile only)
  const handleTap = () => {
    if (isMobile) {
      setIsRevealed((prev) => !prev);
    }
  };

  return (
    <div
      ref={imageRef}
      onClick={handleTap}
      className={isMobile ? "cursor-pointer" : ""}
      role={isMobile ? "button" : undefined}
      tabIndex={isMobile ? 0 : undefined}
      onKeyDown={(e) => {
        if (isMobile && (e.key === "Enter" || e.key === " ")) {
          handleTap();
        }
      }}
    >
      <Image
        src="/hero-image.png"
        alt="FRAKTURED LAX"
        width={1200}
        height={800}
        priority
        className={`h-auto w-full rounded-lg object-cover shadow-xl transition-all duration-500
          ${isMobile && isRevealed ? "grayscale-0" : "grayscale"}
          hover:grayscale-0
        `}
      />
    </div>
  );
}
