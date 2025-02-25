"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    title: "상담신청",
    description:
      "노티파이 상담 신청 시, 담당자가 직접 연락해 마케팅에 대한 전반적인 상담 진행",
    icon: "💬",
  },
  {
    id: 2,
    title: "맞춤 상품 선택",
    description: "우리 매장에 맞는 상품을 제안받고 마케팅 전략 수립",
    icon: "💡",
  },
  {
    id: 3,
    title: "계약 완료",
    description: "첫 광고주 기준, 당일 계약 진행 시 적절한 프로모션 적용",
    icon: "✅",
  },
  {
    id: 4,
    title: "서비스 도입",
    description: "전략에 맞는 마케팅을 진행하며 추가 캠페인 데이터를 취합",
    icon: "📅",
  },
  {
    id: 5,
    title: "리포트 제공",
    description:
      "마케팅 진행 상황과 결과 데이터를 한 눈에 볼 수 있도록 보고서 제공",
    icon: "📊",
  },
];

export default function CampaignProcess() {
  const [visible, setVisible] = useState(false);

  // 스크롤이 내려가면 애니메이션 실행
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("campaign-process");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="campaign-process" className="w-full py-20 bg-white">
      <div className="container flex flex-col mx-auto px-6 text-center">
        {/* 제목 */}
        <h2 className="text-3xl font-extrabold mb-10">
          노티파이 <span className="text-blue-500">체험단 진행 순서</span>
        </h2>

        {/* 카드 리스트 */}
        <div className="mx-20 flex gap-x-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex-1 h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full p-6 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col justify-between min-h-[250px]">
                <CardContent className="flex flex-col items-center text-center h-full">
                  <h3 className="text-xl font-semibold text-blue-500">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2 flex-grow">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
