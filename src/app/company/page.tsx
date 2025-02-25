"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import Reviewer from "../review/page";
import InfluencerReviews from "./components/review";
import WhyReviewPlace from "./components/whysection";
import CampaignProcess from "./components/campaing-process";
import PartnersSection from "./components/partner";

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

const tabs = [
  { id: "influencer", label: "N인플루언서" },
  { id: "blog", label: "블로그 체험단" },
  { id: "instagram", label: "인스타그램체험단" },
  { id: "secret", label: "시크릿소퍼 체험단" },
  { id: "performance", label: "성과형 마케팅" },
];

type ContentType = {
  [key: string]: {
    icons: string[];
    title: string;
    description: string;
    image: string;
  };
};

const content: ContentType = {
  influencer: {
    icons: [
      "https://reviewplace.co.kr/biz/local/_resources/img/web/ico_Ninfluencer.svg",
    ],
    title: "N인플루언서 체험단",
    description:
      "N인플루언서 체험단 설명입니다. 여기에는 인플루언서를 활용한 체험단 마케팅 정보가 들어갑니다.",
    image:
      "	https://reviewplace.co.kr/biz/local/_resources/img/web/category_img01.jpg",
  },
  blog: {
    icons: [
      "https://reviewplace.co.kr/biz/local/_resources/img/web/ico_blog.svg",
    ],
    title: "블로그 체험단",
    description:
      "블로그 체험단 설명입니다. 블로그를 활용한 바이럴 마케팅의 중요성을 강조합니다.",
    image:
      "	https://reviewplace.co.kr/biz/local/_resources/img/web/category_img02.jpg",
  },
  instagram: {
    icons: [
      "https://reviewplace.co.kr/biz/local/_resources/img/web/ico_instalogo.svg",
      "https://reviewplace.co.kr/biz/local/_resources/img/web/ico_reels.svg",
    ],
    title: "인스타그램 체험단",
    description:
      "인스타 감성? 인스타 핫플? 인플루언서?! 잘 찍고 잘 아는 사람들은 따로 있습니다. " +
      "인스타그램에서 활동하는 리뷰어가 직접 체험하고 방문해서 남기는 사진과 영상 콘텐츠로 " +
      "우리 매장과 서비스를 어필해보세요. 적절한 해시태그를 통한 콘텐츠 확산은 필수입니다.",
    image:
      "	https://reviewplace.co.kr/biz/local/_resources/img/web/category_img03.jpg",
  },
  secret: {
    icons: [
      "https://reviewplace.co.kr/biz/local/_resources/img/web/ico_place.svg",
    ],
    title: "시크릿소퍼 체험단",
    description:
      "시크릿소퍼 체험단 설명입니다. 특정한 VIP 고객 대상으로 제공되는 특별 체험단입니다.",
    image:
      "	https://reviewplace.co.kr/biz/local/_resources/img/web/category_img04.jpg",
  },
  performance: {
    icons: [
      "	https://reviewplace.co.kr/biz/local/_resources/img/web/ico_place.svg",
    ],
    title: "성과형 마케팅",
    description:
      "성과형 마케팅 설명입니다. 광고 비용을 절감하면서도 효과적인 결과를 기대할 수 있습니다.",
    image:
      "	https://reviewplace.co.kr/biz/local/_resources/img/web/category_img05.jpg",
  },
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState("instagram");
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
    <main id=" w-screen body-font overflow-screen text-gray-600">
      <section className="container m-auto h-screen flex justify-center items-center">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-2xl font-extrabold title-font mb-4 text-gray-900">
            <span className="text-blue-600">핫플레이스</span>로 만드는
            <br /> 우리 가게{" "}
            <span className="text-blue-600">맞춤 체험단 리뷰</span> 마케팅
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-bold">
            <span className="text-blue-600">첫 광고주</span> 대상,{" "}
            <span className="text-blue-600">당일 계약</span>
            혜택 받으세요!
          </p>
        </div>
      </section>
      <section className="container h-screen w-3/4 mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            광고주와 함께 성장하는 플랫폼
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            수치가 말해주는 성장률1등 체험단 노티파이입니다.
          </p>
        </div>
        <div className="flex flex-wrap w-full text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1,082,141
              </h2>
              <p className="leading-relaxed">인플루언서</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                29,803 +
              </h2>
              <p className="leading-relaxed">광고주</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                839,694 +
              </h2>
              <p className="leading-relaxed">캠페인진행</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                7,683,201 +
              </h2>
              <p className="leading-relaxed">리뷰 콘텐츠</p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl py-12 relative overflow-hidden">
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
      <section className="w-full py-20 bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="container w-3/4 mx-auto px-6 text-center">
          {/* 제목 */}
          <h2 className="text-3xl font-extrabold mb-4">
            첫 광고주 대상 <span className="text-gray-300">SPECIAL</span>{" "}
            프로모션
          </h2>
          <p className="text-lg text-gray-300">
            체험단 마케팅, <span className="text-blue-500 font-bold">경험</span>
            하고 계약하세요!
          </p>

          {/* 카드 영역 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 카드 1 */}
            <Card className="bg-gray-700 border-none shadow-lg p-6 flex flex-col justify-between">
              <CardContent>
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">
                  선택 01
                </Badge>
                <h3 className="text-2xl font-semibold mt-4">
                  플레이스 성과형 서비스
                </h3>
                <p className="text-gray-400 mt-2">
                  블로그 체험단 50명 이상 계약 시
                </p>
              </CardContent>
              <div className="text-gray-500 text-5xl mt-6 flex justify-end">
                📍
              </div>
            </Card>

            {/* 카드 2 */}
            <Card className="bg-gray-700 border-none shadow-lg p-6 flex flex-col justify-between">
              <CardContent>
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">
                  선택 02
                </Badge>
                <h3 className="text-2xl font-semibold mt-4">
                  방문 체험형 당일 계약 혜택
                </h3>
                <p className="text-gray-400 mt-2">
                  상담 후, 당일 계약 시 할인 적용
                </p>
              </CardContent>
              <div className="text-gray-500 text-5xl mt-6 flex justify-end">
                %
              </div>
            </Card>
          </div>

          {/* 하단 설명 */}
          <p className="text-sm text-gray-400 mt-8">
            ※ 선택 01, 02 중 하나만 적용 가능하며, 방문자리뷰 상품은 플레이스
            가입 필수입니다.
          </p>
        </div>
      </section>
      <section className="container px-6 py-20">
        <div className="w-3/4 mx-auto">
          {/* 제목 */}
          <h2 className="text-3xl mx-40 font-bold text-center mb-6">
            매장 방문을 유도하는{" "}
            <span className="text-blue-500">노티파이 체험단 상품</span>
          </h2>

          {/* 탭 버튼 */}
          <div className="flex justify-center gap-2 flex-wrap mb-10">
            <ToggleGroup
              type="single"
              value={selectedTab}
              onValueChange={(val) => val && setSelectedTab(val)}
            >
              {tabs.map((tab) => (
                <ToggleGroupItem
                  key={tab.id}
                  value={tab.id}
                  className={`px-4 py-2 rounded-full font-medium ${
                    selectedTab === tab.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tab.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* 콘텐츠 영역 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 좌측: 이미지 */}
            <div className="flex justify-center">
              <img
                src={content[selectedTab].image}
                alt={content[selectedTab].title}
                className="w-full max-w-md rounded-lg"
              />
            </div>

            {/* 우측: 텍스트 */}
            <div className="text-left space-y-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {content[selectedTab].icons.map((icon: string) => {
                    return <img src={icon} alt="icon" className="w-8 h-8" />;
                  })}
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {content[selectedTab].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {content[selectedTab].description}
                </p>
              </div>

              {/* 자세히 보기 버튼 */}
              <Button
                variant="outline"
                className="px-6 py-3 rounded-full text-lg"
              >
                자세히 보기 →
              </Button>
            </div>
          </div>
        </div>
      </section>
      <InfluencerReviews />
      <WhyReviewPlace />
      <CampaignProcess />
      <PartnersSection />
    </main>
  );
}
