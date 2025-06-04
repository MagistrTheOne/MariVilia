import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ShowCardProps {
  title: string;
  duration: string;
  description: string;
  details: string[];
  price: string;
  icon: React.ReactNode; // Ключевая правка
}

const ShowCard: React.FC<ShowCardProps> = ({
  title,
  duration,
  description,
  details,
  price,
  icon
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group perspective-1000 h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className={`
          relative w-full h-full bg-black border-yellow-400/30 cursor-pointer
          transition-all duration-500 transform-style-preserve-3d
          hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-400/20
          ${isHovered ? 'rotate-y-12 scale-[1.05]' : ''}
        `}
        style={{
          boxShadow: isHovered
            ? '0 6px 60px 0 #ffe06644, 0 0 20px #FFD70055'
            : undefined,
          transition: 'box-shadow 0.5s cubic-bezier(.21,.6,.45,1.36), transform 0.5s'
        }}
      >
        <CardContent className="p-6 h-full flex flex-col justify-between relative overflow-hidden">
          {/* Background animated glow */}
          <div className={`absolute -top-10 -left-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 bg-yellow-400/30 pointer-events-none z-0`} />

          {/* Неактивный вид (до ховера) */}
          <div className={`relative z-10 transition-all duration-500 ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex justify-center items-center mb-4 drop-shadow-glow">{icon}</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-1 text-center animate-glow">{title}</h3>
            <p className="text-yellow-300 text-sm mb-3 text-center">{duration}</p>
            <p className="text-white text-sm leading-relaxed text-center">{description}</p>
          </div>

          {/* Деталка на ховере */}
          <div
            className={`
              absolute inset-0 bg-black/95 p-6 flex flex-col justify-between z-20
              transition-all duration-500 rounded-xl shadow-2xl
              ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}
          >
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{title}</h3>
              <ul className="space-y-2 text-white text-sm">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-yellow-300 mb-3">{price}</p>
              <Button
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-bold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-golden"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                tabIndex={isHovered ? 0 : -1}
              >
                📅 Забронировать
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowCard;
