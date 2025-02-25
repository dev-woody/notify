import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const campaigns = [
  {
    id: 1,
    title: "제주/중문 휴아로마에서 편안한 시간 보내기",
    type: "인스타그램",
    image: "/campaign1.jpg",
    applied: 14,
    total: 5,
  },
  {
    id: 2,
    title: "안양 프리미엄 세차장에서 깨끗하게 세차하기",
    type: "블로그",
    image: "/campaign2.jpg",
    applied: 31,
    total: 5,
  },
  {
    id: 3,
    title: "홍대 겨울에도 빛나는 피부관리 서비스!",
    type: "블로그",
    image: "/campaign3.jpg",
    applied: 39,
    total: 10,
  },
  {
    id: 4,
    title: "홍대 흥미 진진 라이브 방탈출카페",
    type: "블로그",
    image: "/campaign4.jpg",
    applied: 24,
    total: 10,
  },
];

export default function CampaingList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const slideLeft = () => {
    setOffset((prev) => Math.min(prev + 300, 0));
  };

  const slideRight = () => {
    if (containerRef.current) {
      setOffset((prev) =>
        Math.max(
          prev - 300,
          -(containerRef.current?.scrollWidth ?? 0) +
            (containerRef.current?.clientWidth ?? 0)
        )
      );
    }
  };

  return (
    <section className="container mx-auto py-12 relative overflow-hidden">
      <h2 className="text-3xl  w-3/4 mx-auto font-semibold text-left mb-6">
        노티파이에서 <br />
        <span className="text-blue-500 font-bold">다양한 분야</span>의 체험단
        캠페인을 진행했습니다.
      </h2>

      {/* 슬라이드 컨트롤 버튼 */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          className="rounded-full p-2 bg-gray-100 hover:bg-gray-300"
          onClick={slideLeft}
        >
          ←
        </Button>
      </div>

      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          className="rounded-full p-2 bg-gray-100 hover:bg-gray-300"
          onClick={slideRight}
        >
          →
        </Button>
      </div>

      {/* 캠페인 슬라이드 영역 */}
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: offset }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="w-80 shrink-0">
              <CardContent className="p-0">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-md">
                    {campaign.type}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {campaign.applied}명 신청 / {campaign.total}명 모집
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* 더보기 버튼 */}
      <div className="text-center mt-8">
        <Button className="px-6 py-3 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-700 transition">
          더 많은 캠페인 보러가기 →
        </Button>
      </div>
    </section>
  );
}
