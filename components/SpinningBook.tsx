"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useAnimationFrame, useTransform, useMotionTemplate } from "framer-motion";

export default function SpinningBook({ frontImage, backImage, className = "" }: { frontImage: string, backImage: string, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const thickness = 28; // Book thickness in px

  // Animation values
  const baseRotationY = useMotionValue(0);
  const mouseXOffset = useMotionValue(0);
  const mouseYOffset = useMotionValue(0);
  
  // Default tilt so it looks 3D even when spinning
  const defaultTiltX = -10; 
  const defaultTiltY = -20;

  const smoothMouseXOffset = useSpring(mouseXOffset, { stiffness: 200, damping: 25 });
  const smoothMouseYOffset = useSpring(mouseYOffset, { stiffness: 200, damping: 25 });

  useAnimationFrame((time, delta) => {
    if (!isHovered) {
      baseRotationY.set(baseRotationY.get() + delta * 0.035); // Constant spin speed
    }
  });

  const totalRotationY = useTransform(() => baseRotationY.get() + smoothMouseXOffset.get() + defaultTiltY);
  const rotateY = useMotionTemplate`${totalRotationY}deg`;
  
  const totalRotationX = useTransform(() => smoothMouseYOffset.get() + defaultTiltX);
  const rotateX = useMotionTemplate`${totalRotationX}deg`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to -1 to 1
    const xPct = (mouseX / width - 0.5) * 2; 
    const yPct = (mouseY / height - 0.5) * 2;
    
    mouseXOffset.set(xPct * 40); // Max 40 deg rotation from center
    mouseYOffset.set(yPct * -40); // Max 40 deg rotation from center
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseXOffset.set(0);
    mouseYOffset.set(0);
  };

  return (
    <div className={`relative perspective-[1200px] ${className}`}>
      <motion.div 
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="w-full h-full relative cursor-grab active:cursor-grabbing"
        style={{ 
          transformStyle: "preserve-3d",
          rotateY,
          rotateX
        }}
      >
        {/* Front Cover */}
        <div 
          className="absolute inset-0 w-full h-full rounded-sm shadow-[inset_4px_0_10px_rgba(0,0,0,0.1)] overflow-hidden bg-white"
          style={{ 
            transform: `translateZ(${thickness / 2}px)`,
            backfaceVisibility: "hidden"
          }}
        >
          <img src={frontImage} alt="Book Front" className="w-full h-full object-cover" />
        </div>
        
        {/* Back Cover */}
        <div 
          className="absolute inset-0 w-full h-full rounded-sm shadow-[inset_-4px_0_10px_rgba(0,0,0,0.1)] overflow-hidden bg-white"
          style={{ 
            transform: `rotateY(180deg) translateZ(${thickness / 2}px)`,
            backfaceVisibility: "hidden"
          }}
        >
          <img src={backImage} alt="Book Back" className="w-full h-full object-cover" />
        </div>

        {/* Left Spine (Binding) */}
        <div 
          className="absolute top-0 left-0 h-full bg-[#111111] shadow-[inset_0_0_8px_rgba(255,255,255,0.1)]"
          style={{ 
            width: `${thickness}px`,
            transform: `translateX(-50%) rotateY(-90deg)`,
            backfaceVisibility: "hidden"
          }}
        ></div>

        {/* Right Spine (Pages) */}
        <div 
          className="absolute top-0 right-0 h-full bg-[#f4f4f4] flex flex-col justify-evenly overflow-hidden"
          style={{ 
            width: `${thickness}px`,
            transform: `translateX(50%) rotateY(90deg)`,
            backfaceVisibility: "hidden"
          }}
        >
          {Array.from({length: 40}).map((_, i) => (
            <div key={i} className="w-full h-[1px] bg-[#ddd]"></div>
          ))}
        </div>

        {/* Top Spine (Pages) */}
        <div 
          className="absolute top-0 left-0 w-full bg-[#f4f4f4] flex justify-evenly overflow-hidden"
          style={{ 
            height: `${thickness}px`,
            transform: `translateY(-50%) rotateX(90deg)`,
            backfaceVisibility: "hidden"
          }}
        >
          {Array.from({length: 30}).map((_, i) => (
            <div key={i} className="h-full w-[1px] bg-[#ddd]"></div>
          ))}
        </div>

        {/* Bottom Spine (Pages) */}
        <div 
          className="absolute bottom-0 left-0 w-full bg-[#f4f4f4] flex justify-evenly overflow-hidden"
          style={{ 
            height: `${thickness}px`,
            transform: `translateY(50%) rotateX(-90deg)`,
            backfaceVisibility: "hidden"
          }}
        >
          {Array.from({length: 30}).map((_, i) => (
            <div key={i} className="h-full w-[1px] bg-[#ddd]"></div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
