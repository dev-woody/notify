import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    title: "탑 룸넘버3 분위기 좋은 와인바",
    description:
      "도 넓직하고 와인병과 조화는 이왕한 인테리어라서 참 멋져서 브라이덜 샤워나 모임으로 인기가 많고...",
    image: "/review1.jpg",
    reviewer: "체험 리뷰",
    rating: 5,
  },
  {
    id: 2,
    title: "정자역네일 | 분당네일샵 네일새로이에서 웨딩네일 받았어요",
    description:
      "디자인 상담하면서 제가 원하는 것을 잘 캐치하셔서 제안도 해주시고 친절한 설명까지 해주셨습니다.",
    image: "/review2.jpg",
    reviewer: "lialia님의 방문 체험 리뷰",
    rating: 5,
  },
  {
    id: 3,
    title: "강남 카페 투어 | 아늑한 분위기 맛집 카페 추천",
    description:
      "분위기도 좋고 조용한 강남 카페를 찾는다면 꼭 한 번 방문해보세요. 디저트도 맛있고 커피도 굿!",
    image: "/review3.jpg",
    reviewer: "minsoo님의 방문 체험 리뷰",
    rating: 4.5,
  },
];

export default function InfluencerReviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const slideLeft = () => {
    setOffset((prev) => Math.min(prev + 350, 0));
  };

  const slideRight = () => {
    if (
      containerRef.current &&
      containerRef.current.scrollWidth &&
      containerRef.current.clientWidth
    ) {
      setOffset((prev) =>
        Math.max(
          prev - 350,
          -(containerRef.current?.scrollWidth ?? 0) +
            (containerRef.current?.clientWidth ?? 0)
        )
      );
    }
  };

  return (
    <section className="container w-3/4 mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* 왼쪽 텍스트 영역 */}
        <div className="text-left lg:col-span-1">
          <h2 className="text-4xl font-bold">
            노티파이 <br />
            <span className="text-blue-500">인플루언서의 진짜 후기</span>
          </h2>
          <p className="text-gray-700 mt-4">
            꼼꼼하고 리얼한 후기로 많은 분들에게 정보를 공유하며 브랜딩을
            만들어냅니다.
          </p>
          {/* 슬라이드 버튼 */}
          <div className="flex gap-4 mt-6">
            <Button
              variant="outline"
              className="rounded-full p-3 border-gray-300 hover:bg-gray-200"
              onClick={slideLeft}
            >
              ◀
            </Button>
            <Button
              variant="outline"
              className="rounded-full p-3 border-gray-300 hover:bg-gray-200"
              onClick={slideRight}
            >
              ▶
            </Button>
          </div>
        </div>

        {/* 오른쪽 슬라이드 영역 */}
        <div className="lg:col-span-2 overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-6"
            animate={{ x: offset }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="w-[350px] shrink-0 border border-gray-200 shadow-lg"
              >
                <CardContent className="p-0">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{review.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {review.description}
                    </p>
                    <div className="text-sm text-gray-500 mt-4">
                      <span className="font-bold">{review.reviewer}</span>
                      <div className="flex items-center mt-1 text-red-500">
                        {"⭐".repeat(Math.floor(review.rating))} {review.rating}
                        /5
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
