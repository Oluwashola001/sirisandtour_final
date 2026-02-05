'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ---------------- IMAGES ---------------- */

const images = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/6.jpg',
  '/images/gallery/7.jpg',
  '/images/gallery/8.jpg',
  '/images/gallery/9.jpg',
  '/images/gallery/10.jpg',
  '/images/gallery/11.jpg',
  '/images/gallery/12.jpg',
  '/images/gallery/13.jpg',
  '/images/gallery/14.jpg',
];

/* ---------------- TYPES ---------------- */

type TapeProps = {
  color: string;
  className?: string;
};

type PolaroidProps = {
  src: string;
  index: number;
  onOpen: (i: number) => void;
  className?: string;
  rotate: number;
  tapeColor: string;
  tapeClass?: string;
  aspect?: 'portrait' | 'square' | 'landscape';
};

/* ---------------- TAPE ---------------- */

const Tape: React.FC<TapeProps> = ({ color, className }) => (
  <div
    className={`absolute h-8 w-24 opacity-90 shadow-sm z-50 ${className || ''}`}
    style={{ backgroundColor: color }}
  />
);

/* ---------------- POLAROID ---------------- */

const Polaroid: React.FC<PolaroidProps> = ({
  src,
  index,
  onOpen,
  className,
  rotate,
  tapeColor,
  tapeClass,
  aspect = 'square',
}) => {
  let aspectClass = 'aspect-square';
  if (aspect === 'portrait') aspectClass = 'aspect-[3/4]';
  if (aspect === 'landscape') aspectClass = 'aspect-[16/9]';

  return (
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 60 }}
      whileTap={{ scale: 1.1, zIndex: 60 }}
      transition={{ duration: 0.3 }}
      className={`absolute bg-white p-3 md:p-4 shadow-2xl transition-all cursor-pointer group ${className || ''}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      onClick={() => onOpen(index)}
    >
      <Tape color={tapeColor} className={tapeClass} />

      <div
        className={`relative w-full h-full overflow-hidden bg-gray-900 ${aspectClass}`}
      >
        <img
          src={src}
          alt={`Travel moment ${index + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Shine */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-y-full group-hover:-translate-y-full transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------- MAIN ---------------- */

export default function RecentTravelMoments() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((p) => (p + 1) % images.length);
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((p) =>
      p === 0 ? images.length - 1 : p - 1
    );
  };

  return (
    <div className="min-h-screen w-full bg-white text-black font-sans pb-32 overflow-x-hidden">

      {/* HEADER */}
      <div className="pt-20 pb-10 text-center px-4 mb-10">
        <p
          className="font-[cursive] text-2xl mb-4 text-[#0A7BBE]"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Embark on a soul-stirring journey
        </p>

        <h2 className="text-5xl font-bold text-[#0A7BBE]">
          Recent travel moments
        </h2>
      </div>

      {/* --- SCATTERED CONTAINER (first section) --- */}
      {/* Increased height to 600px on mobile to prevent overlapping */}
      <div className="relative w-full max-w-[90vw] md:max-w-[900px] h-[350px] md:h-[800px] mx-auto mt-4 md:mt-16">


        {/* 1. TOP LEFT */}
        <Polaroid
          src={images[0]}
          index={0}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="left-[5%] top-0 w-[35%] md:w-[30%] z-10"
          rotate={-10}
          aspect="portrait"
          tapeColor="#fcd34d"
          tapeClass="-top-4 -left-2 -rotate-[35deg]"
        />

        {/* 2. TOP RIGHT */}
        <Polaroid
          src={images[1]}
          index={1}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="right-[5%] top-[5%] w-[35%] md:w-[30%] z-10"
          rotate={6}
          aspect="portrait"
          tapeColor="#a78bfa"
          tapeClass="-top-4 -right-2 rotate-[35deg]"
        />

        {/* 3. CENTER */}
        <Polaroid
          src={images[2]}
          index={2}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="left-[32%] top-[35%] w-[36%] md:w-[32%] z-20"
          rotate={-3}
          aspect="square"
          tapeColor="#d6d3d1"
          tapeClass="-top-4 left-1/2 -translate-x-1/2 rotate-2"
        />

        {/* 4. BOTTOM LEFT */}
        <Polaroid
          src={images[3]}
          index={3}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="left-[5%] bottom-0 w-[38%] md:w-[32%] z-30"
          rotate={2}
          aspect="square"
          tapeColor="#60a5fa"
          tapeClass="-top-4 left-1/3 -rotate-[15deg]"
        />

        {/* 5. BOTTOM RIGHT */}
        <Polaroid
          src={images[4]}
          index={4}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="right-[2%] bottom-[5%] w-[48%] md:w-[40%] z-30"
          rotate={8}
          aspect="landscape"
          tapeColor="#86efac"
          tapeClass="-top-3 right-2 rotate-[25deg]"
        />

        {/* 6. LEFT FLANK (Hidden on Mobile) */}
        <Polaroid
          src={images[5]}
          index={5}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="hidden md:block left-[-2%] md:left-[-6%] top-[38%] w-[35%] md:w-[28%] z-15"
          rotate={-12}
          aspect="portrait"
          tapeColor="#f472b6"
          tapeClass="-top-4 right-2 rotate-[15deg]"
        />

        {/* 7. RIGHT FLANK (Hidden on Mobile) */}
        <Polaroid
          src={images[6]}
          index={6}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="hidden md:block right-[-2%] md:right-[-6%] top-[35%] w-[35%] md:w-[28%] z-15"
          rotate={10}
          aspect="square"
          tapeColor="#fb923c"
          tapeClass="-top-4 left-2 -rotate-[10deg]"
        />

      </div>

      {/* --- SCATTERED CONTAINER (second section) --- */}
      {/* Added mt-32 to create clear separation between the two clusters */}
    <div className="relative w-full max-w-[90vw] md:max-w-[900px] h-[350px] md:h-[800px] mx-auto mt-32 md:mt-16">


        {/* 1. TOP LEFT */}
        <Polaroid
          src={images[7]}
          index={7}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="left-[5%] top-0 w-[35%] md:w-[30%] z-10"
          rotate={-10}
          aspect="portrait"
          tapeColor="#fcd34d"
          tapeClass="-top-4 -left-2 -rotate-[35deg]"
        />

        {/* 2. TOP RIGHT */}
        <Polaroid
          src={images[8]}
          index={8}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="right-[5%] top-[5%] w-[35%] md:w-[30%] z-10"
          rotate={6}
          aspect="portrait"
          tapeColor="#a78bfa"
          tapeClass="-top-4 -right-2 rotate-[35deg]"
        />

        {/* 3. CENTER */}
        <Polaroid
          src={images[9]}
          index={9}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="left-[32%] top-[35%] w-[36%] md:w-[32%] z-20"
          rotate={-3}
          aspect="square"
          tapeColor="#d6d3d1"
          tapeClass="-top-4 left-1/2 -translate-x-1/2 rotate-2"
        />

        {/* 4. BOTTOM LEFT */}
        <Polaroid
          src={images[10]}
          index={10}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="left-[5%] bottom-0 w-[38%] md:w-[32%] z-30"
          rotate={2}
          aspect="square"
          tapeColor="#60a5fa"
          tapeClass="-top-4 left-1/3 -rotate-[15deg]"
        />

        {/* 5. BOTTOM RIGHT */}
        <Polaroid
          src={images[11]}
          index={11}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="right-[2%] bottom-[5%] w-[48%] md:w-[40%] z-30"
          rotate={8}
          aspect="landscape"
          tapeColor="#86efac"
          tapeClass="-top-3 right-2 rotate-[25deg]"
        />

        {/* 6. LEFT FLANK (Hidden on Mobile) */}
        <Polaroid
          src={images[12]}
          index={12}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="hidden md:block left-[-2%] md:left-[-6%] top-[38%] w-[35%] md:w-[28%] z-15"
          rotate={-12}
          aspect="portrait"
          tapeColor="#f472b6"
          tapeClass="-top-4 right-2 rotate-[15deg]"
        />

        {/* 7. RIGHT FLANK (Hidden on Mobile) */}
        <Polaroid
          src={images[13]}
          index={13}
          onOpen={(i) => { setCurrent(i); setOpen(true); }}
          className="hidden md:block right-[-2%] md:right-[-6%] top-[35%] w-[35%] md:w-[28%] z-15"
          rotate={10}
          aspect="square"
          tapeColor="#fb923c"
          tapeClass="-top-4 left-2 -rotate-[10deg]"
        />

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setOpen(false)}
          >

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >

              {/* TOOLBAR */}
              <div className="absolute -top-12 right-0 flex gap-4 text-white">
                <button onClick={() => setFullScreen(!fullScreen)}>
                  <MaximizeIcon />
                </button>
                <button onClick={() => setZoomed(!zoomed)}>
                  {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
                </button>
                <button onClick={() => setOpen(false)}>
                  <CloseIcon />
                </button>
              </div>

              {/* IMAGE */}
              <div className="relative flex items-center justify-center w-full">

                <button
                  onClick={prev}
                  className="absolute left-2 md:-left-12 p-2 bg-white/10 rounded-full text-white z-50"
                >
                  <ChevronLeftIcon />
                </button>

                <motion.div
                  animate={{ scale: zoomed ? 1.5 : 1 }}
                  className={`relative overflow-hidden rounded-lg shadow-2xl transition-all duration-300 ${
                    fullScreen
                      ? 'w-screen h-screen fixed inset-0 z-40 bg-black flex items-center justify-center'
                      : 'w-full max-h-[80vh]'
                  }`}
                >
                  <img
                    src={images[current]}
                    alt="Travel"
                    className={`${fullScreen
                      ? 'max-w-full max-h-full object-contain'
                      : 'w-full max-h-[80vh] object-contain'
                    } rounded-md`}
                  />
                </motion.div>

                <button
                  onClick={next}
                  className="absolute right-2 md:-right-12 p-2 bg-white/10 rounded-full text-white z-50"
                >
                  <ChevronRightIcon />
                </button>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

/* ---------------- ICONS ---------------- */

const MaximizeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
);

const ZoomInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
);

const ZoomOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
);