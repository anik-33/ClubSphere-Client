import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { img: "https://i.pinimg.com/736x/8d/37/99/8d3799e24be55bdfddb7a4fd8e4100d0.jpg", label: "Technology Clubs" },
  { img: "https://www.thecameraclub.co.uk/Studio%20Pods/PHOTO-2024-07-30-10-23-36.jpg", label: "Photography Clubs" },
  { img: "https://i.pinimg.com/1200x/39/4a/85/394a8514c21be4c0fc80e3d2a9879019.jpg", label: "Sports Clubs" },
];

export default function HeroSection() {
  return (
    <section className="h-[75vh] md:h-[80vh] relative overflow-hidden bg-gradient-to-r from-blue-600/30 to-purple-500/30">
      {/* Ambient glow */}
      {/* <div className="absolute -top-32 -left-32 w-[450px] h-96 bg-blue-600/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-2xl"></div> */}

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center h-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm bg-white/10 backdrop-blur rounded-full">
            ⚡ Clubs • Events • Community
          </span>

          <h1 className="text-3xl md:text-5xl text-gray-700 font-extrabold leading-tight">
            Build Connections Through
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Clubs & Experiences
            </span>
          </h1>

          <p className="text-gray-400 max-w-md text-lg">
            ClubSphere brings technology, photography, and sports clubs together
            in one premium platform designed for modern communities.
          </p>

          <div className="flex gap-4 pt-2">
            <button className="px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition rounded-full font-medium shadow-lg shadow-blue-600/30">
              Explore Clubs
            </button>
            <button className="px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition rounded-full font-medium">
              View Events
            </button>
          </div>
        </motion.div>

        {/* RIGHT SLIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-30 rounded-3xl"></div>

          <div className="relative h-[300px] md:h-[380px] rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2800, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              className="w-full h-full"
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full">
                    <img
                      src={slide.img}
                      alt={slide.label}
                      className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
                    />
                    <div className="absolute bottom-4 left-4 px-4 py-1 text-sm bg-black/50 backdrop-blur rounded-full text-white">
                      {slide.label}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
