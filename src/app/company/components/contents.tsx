import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

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

export default function Contents() {
  const [selectedTab, setSelectedTab] = useState("instagram");

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="">
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
                {content[selectedTab].icons.map((icon: string, index) => {
                  return (
                    <img
                      key={index}
                      src={icon}
                      alt="icon"
                      className="w-8 h-8"
                    />
                  );
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
  );
}
