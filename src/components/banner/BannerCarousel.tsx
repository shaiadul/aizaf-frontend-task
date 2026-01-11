"use client";

import { Banner } from "@/lib/types";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BannerCarousel({ banners }: { banners: Banner[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!banners?.length) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners]);

  return (
    <section className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {banners.map(
          (banner, index) =>
            index === active && (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[480px]"
              >
                
                <Image
                  src={banner?.image ? banner?.image : "/images/placeholder.png"}
                  alt="Banner"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="max-w-lg text-white space-y-3"
                    >
                      <p className="text-sm md:text-base text-gray-200">
                        {banner.subtitle}
                      </p>

                      <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                        {banner.title}
                      </h2>

                      <p className="text-sm md:text-base text-gray-200">
                        {banner.description}
                      </p>

                      {banner.buttonText && banner.link && (
                        <Link
                          href={banner.link}
                          className="inline-block mt-4 bg-white text-black
                                     px-6 py-2 text-sm font-medium rounded
                                     hover:bg-gray-100 transition"
                        >
                          {banner.buttonText}
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-all
              ${
                active === index ? "bg-white w-5" : "bg-white/60 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
