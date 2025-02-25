"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    image:
      "https://reviewplace.co.kr/biz/local/_resources/img/web/partner_01.jpg",
    alt: "partner 1",
  },
  {
    id: 2,
    image:
      "https://reviewplace.co.kr/biz/local/_resources/img/web/partner_02.jpg",
    alt: "partner 2",
  },
  {
    id: 3,
    image:
      "https://reviewplace.co.kr/biz/local/_resources/img/web/partner_03.jpg",
    alt: "partner 3",
  },
  {
    id: 4,
    image:
      "https://reviewplace.co.kr/biz/local/_resources/img/web/partner_04.jpg",
    alt: "partner 4",
  },
  {
    id: 5,
    image:
      "https://reviewplace.co.kr/biz/local/_resources/img/web/partner_05.jpg",
    alt: "partner 5",
  },
  {
    id: 6,
    image:
      "https://reviewplace.co.kr/biz/local/_resources/img/web/partner_06.jpg",
    alt: "partner 6",
  },
  {
    id: 7,
    image:
      "https://reviewplace.co.kr/biz/local/_resources/img/web/partner_07.jpg",
    alt: "partner 7",
  },
  {
    id: 8,
    image:
      "https://reviewplace.co.kr/biz/local/_resources/img/web/partner_08.jpg",
    alt: "partner 8",
  },
  {
    id: 9,
    image:
      "https://reviewplace.co.kr/biz/local/_resources/img/web/partner_09.jpg",
    alt: "partner 9",
  },
  {
    id: 10,
    image:
      "https://reviewplace.co.kr/biz/local/_resources/img/web/partner_10.jpg",
    alt: "partner 10",
  },
];

export default function PartnersSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="w-full py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* 제목 */}
        <h2 className="text-3xl font-extrabold mb-8">
          <span className="text-blue-500">노티파이</span>와 함께하는{" "}
          <span className="text-blue-500">파트너사</span> 입니다
        </h2>

        {/* 슬라이드 영역 */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex items-center space-x-12"
            animate={{ x: isPaused ? 0 : ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }} // 속도를 두 배 느리게 (32초)
          >
            {[...partners, ...partners].map((partner, index) => (
              <img
                src={partner.image}
                alt={partner.alt}
                className="w-40 h-20 object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
