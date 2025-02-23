"use client";

import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 라이브러리 스타일 적용

// 배너 이미지 목록
const bannerImages = [
  "https://dummyimage.com/800x300/ff6347/ffffff&text=배너1",
  "https://dummyimage.com/800x300/4682b4/ffffff&text=배너2",
  "https://dummyimage.com/800x300/32cd32/ffffff&text=배너3",
];

const getRandomDate = (offset: number) => {
  const date = new Date();
  date.setDate(date.getDate() + offset); // 오늘 날짜에서 offset 만큼 이동
  return date.toISOString().split("T")[0]; // YYYY-MM-DD 형식
};

const campaigns = Array.from({ length: 20 }, (_, i) => {
  const startOffset = Math.floor(Math.random() * 10) - 5; // -5 ~ +4일 랜덤 시작일
  const startDate = getRandomDate(startOffset);
  const endDate = getRandomDate(startOffset + 7); // 시작일 + 7일

  return {
    id: i + 1,
    review: "Blog",
    type: "방문형",
    startDate, // 시작일 추가
    endDate, // 마감일 추가
    title: `캠페인 제목 ${i + 1}`,
    subtitle: `서브타이틀 ${i + 1}`,
    currentApplicants: Math.floor(Math.random() * 500), // 신청 인원 (랜덤 값)
    maxApplicants: 500, // 모집 최대 인원
    image: "https://dummyimage.com/420x260",
  };
});

export default function CampaignList() {
  return (
    <div className="container mx-auto px-4">
      {/* 🔹 배너 영역 */}
      <div className="mb-6">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
          className="rounded-lg shadow-md"
        >
          {bannerImages.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`배너 ${index + 1}`} className="rounded-lg" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* 🔹 캠페인 리스트 */}
      <div className="flex flex-wrap -m-4">
        {campaigns.map((item) => (
          <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href={`/review/campaign/${item.id}`}>
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={item.title}
                  className="object-cover object-center w-full h-full block"
                  src={item.image}
                />
              </div>

              {/* 🔹 1행: 뱃지 + 남은 기간 */}
              <div className="mt-2 flex items-center space-x-2">
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.review}
                </span>
                <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.type}
                </span>
                {/* <span className="text-gray-500 text-xs">
                  {item.remainingDays}
                </span> */}
              </div>

              <div className="mt-2">
                {/* 🔹 2행: 타이틀 */}
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                {/* 🔹 3행: 서브타이틀 */}
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  모집가긴 : {item.startDate}~{item.endDate}
                </h3>
                {/* 🔹 4행: 신청 인원 / 모집 인원 */}
                <p className="mt-1 text-sm text-gray-700">
                  모집 {item.maxApplicants}명
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
