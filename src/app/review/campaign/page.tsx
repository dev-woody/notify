import Link from "next/link";

const campaigns = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  review: "Blog",
  type: "방문형",
  remainingDays: `${7 - (i % 7)}일 남음`,
  title: `캠페인 제목 ${i + 1}`,
  subtitle: `서브타이틀 ${i + 1}`,
  currentApplicants: Math.floor(Math.random() * 500), // 신청 인원 (랜덤 값)
  maxApplicants: 500, // 모집 최대 인원
  image: "https://dummyimage.com/420x260",
}));

export default function CampaignList() {
  return (
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
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                {item.review}
              </span>
              <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">
                {item.type}
              </span>
              <span className="text-gray-500 text-xs">
                {item.remainingDays}
              </span>
            </div>

            <div className="mt-2">
              {/* 🔹 2행: 타이틀 */}
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {item.title}
              </h2>
              {/* 🔹 3행: 서브타이틀 */}
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {item.subtitle}
              </h3>
              {/* 🔹 4행: 신청 인원 / 모집 인원 */}
              <p className="mt-1 text-sm text-gray-700">
                신청 {item.currentApplicants}명 / 모집 {item.maxApplicants}명
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
