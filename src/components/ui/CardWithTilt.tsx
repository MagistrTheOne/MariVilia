import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  description: string;
};

type CardWithTiltProps = {
  image: GalleryImage;
  onClick: () => void;
};

export const CardWithTilt: React.FC<CardWithTiltProps> = ({ image, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt эффект без хуков!
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((y - midY) / midY) * 10; // up to 10deg
    const rotateY = ((x - midX) / midX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      tabIndex={0}
      aria-label={image.alt}
      className="mb-6 break-inside-avoid rounded-2xl bg-black/30 border border-yellow-400/10 hover:border-yellow-400/40 overflow-hidden group cursor-pointer transition-all shadow-lg tilt-card"
      onKeyDown={e => e.key === 'Enter' && onClick()}
      style={{ transition: "transform 0.3s cubic-bezier(.21,.6,.45,1.36), box-shadow 0.3s" }}
    >
      <div className="tilt-inner">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full object-cover hover:scale-105 transition-transform duration-400"
          loading="lazy"
        />
        <CardContent className="p-4">
          <h3 className="text-yellow-400 font-bold mb-1 text-lg">{image.alt}</h3>
          <p className="text-white/90 text-sm">{image.description}</p>
        </CardContent>
      </div>
    </Card>
  );
};
