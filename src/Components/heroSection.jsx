import { useState, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Chatbot } from "./Chatbot";

export default function RotaractClubLayout() {
  const images = [
    { title: "Jashn-E- 3141", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757943827/Copy_of_IMG_4190_ayzbil_lplixh_rd534g.webp" },
    { title: "Visual Velocity 2.0", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757943830/IMG_7581_xlm8wx_lnj4jq_ufiz7c.webp" },
    { title: "Aara night 25-26", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757943837/IMG_2044_h3kady_vbe8iv_s4bl9w.webp" },
    { title: "Rotaract's Day Out", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757943940/Copy_of_IMG_0420_wdpng4_gpbtct.jpg" },
    { title: "Monsoon Match Day 2.0", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757943826/Copy_of_IMG_1446_1_zwesqm_g41sxi.jpg" },
    { title: "Kalakriti 2.0", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757943987/Copy_of_IMG20250825165248_kvd3wk_w6imtn.jpg" },
    { title: "Panache", src: "https://res.cloudinary.com/dtc2xaeaf/image/upload/v1757943825/PXL_20250718_060353784_i7fthn_jxd25r.jpg" },
  ];

  const [bgIndex, setBgIndex] = useState(0);

  return (
    <div className="relative h-screen max-h-screen rounded-b-3xl w-full overflow-hidden">

      {/* ✅ FIXED: opacity MUST be 0–1 */}
      <motion.div
        key={bgIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-cover bg-center z-0 will-change-transform"
        style={{ backgroundImage: `url(${images[bgIndex].src})` }}
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 flex flex-col  lg:flex-row h-full w-full items-center justify-center px-6 gap-8">

        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center">
          <img
            src="https://res.cloudinary.com/dtc2xaeaf/image/upload/v1756746594/logo_pdqctw.svg"
            alt="club logo"
            className="h-24 w-24 sm:h-32 sm:w-32 mb-4"
          />
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Rotaract Club Of TCET
          </h1>
        </div>

        <div className="w-full lg:w-2/3 relative z-30">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSlideChange={(s) => setBgIndex(s.realIndex)}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <MemoCard img={img} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="prev-btn absolute -left-5 top-1/2 -translate-y-1/2 z-40">
            <IconButton><ChevronLeft className="h-6 w-6 text-white" /></IconButton>
          </button>

          <button className="next-btn absolute -right-5 top-1/2 -translate-y-1/2 z-40">
            <IconButton><ChevronRight className="h-6 w-6 text-white" /></IconButton>
          </button>
        </div>
      </div>

      {/* ✅ Chatbot rendered at ROOT (correct) */}
      <Chatbot />
    </div>
  );
}

/* ================= COMPONENTS ================= */

const MemoCard = memo(function MemoCard({ img }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/90 shadow-xl overflow-hidden">
      <img src={img.src} className="h-32 sm:h-40 w-full object-cover" />
      <div className="p-3 font-semibold">{img.title}</div>
    </div>
  );
});

function IconButton({ children }) {
  return (
    <button className="h-12 w-12 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center">
      {children}
    </button>
  );
}