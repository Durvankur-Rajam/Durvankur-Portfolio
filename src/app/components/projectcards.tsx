"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  JSX,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";

/* ---------------- TYPES ---------------- */

type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  githubUrl?: string;
};

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

/* ---------------- CONTEXT ---------------- */

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

/* ---------------- CAROUSEL ---------------- */

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: setCurrentIndex, currentIndex }}
    >
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-scroll py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        >
          <div className="flex gap-4 pl-4 md:pl-16 mx-auto">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.15 },
                }}
                className="last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 mr-10">
          <button
            onClick={() =>
              carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" })
            }
            disabled={!canScrollLeft}
            className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>

          <button
            onClick={() =>
              carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" })
            }
            disabled={!canScrollRight}
            className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

/* ---------------- CARD ---------------- */

export const Card = ({
  card,
}: {
  card: CardType;
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50">
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-50 max-w-5xl mx-auto my-10 bg-neutral-900 rounded-3xl p-8"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 h-8 w-8 bg-black rounded-full flex items-center justify-center"
              >
                <IconX className="h-5 w-5 text-white" />
              </button>

              <p className="font-mono text-sm text-orange-400">
                {card.category}
              </p>
              <h2 className="text-3xl font-bold mt-2">{card.title}</h2>

              <div className="py-8">{card.content}</div>

              {card.githubUrl && (
                <div className="flex justify-end">
                  <a
                    href={card.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF611D] px-6 py-2 rounded-full hover:scale-105 transition"
                  >
                    View Project
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(true)}
        className="relative rounded-3xl bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-20" />
        <div className="relative z-30 p-6 text-left">
          <p className="font-mono text-sm">{card.category}</p>
          <p className="text-xl md:text-3xl font-semibold mt-2">
            {card.title}
          </p>
        </div>

        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover"
        />
      </button>
    </>
  );
};

/* ---------------- BLUR IMAGE ---------------- */

export const BlurImage = ({
  src,
  alt,
  className,
  ...rest
}: ImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      onLoad={() => setLoading(false)}
      className={cn(
        "transition duration-300",
        loading ? "blur-sm" : "blur-0",
        className
      )}
    />
  );
};
