import React, { useState } from "react";
import { X } from "lucide-react";
import { CardWithTilt } from "@/components/ui/CardWithTilt";

// Тип данных для картинки
type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  description: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/show/1.JPG",
    alt: "MariVilia в элегантном образе",
    description: "Портрет артистки",
  },
  {
    id: 2,
    src: "/images/show/8.JPG",
    alt: "MariVilia Show выступление",
    description: "Яркое сценическое шоу",
  },
  {
    id: 3,
    src: "/images/show/main.png",
    alt: "MariVilia в сценическом образе",
    description: "Профессиональная фотосессия",
  },
  {
    id: 4,
    src: "/images/show/4.JPG",
    alt: "MariVilia артистическое фото",
    description: "Творческий портрет",
  },
  {
    id: 5,
    src: "/images/show/5.JPG",
    alt: "MariVilia Show атмосфера",
    description: "Магия выступления",
  },
  {
    id: 6,
    src: "/images/show/6.JPG",
    alt: "MariVilia профессиональное фото",
    description: "Элегантность и стиль",
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-2">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <CardWithTilt key={image.id} image={image} onClick={() => openLightbox(image)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white hover:text-yellow-400 bg-black/70 rounded-full p-2 transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Закрыть"
            >
              <X size={28} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-xl"
              loading="lazy"
            />
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 font-bold text-lg">{selectedImage.alt}</h3>
              <p className="text-white/80 text-base">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
