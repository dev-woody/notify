import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CampaignDetailProps {
  campaign: {
    id: number;
    title: string;
    subtitle: string;
    review: string;
    type: string;
    status: "신청 가능" | "마감" | "진행 중"; // ✅ "진행 중" 추가
    remainingDays: string; // ✅ 문자열 유지
    reviewPeriod: string;
    applicationPeriod: string;
    announcementDate: string;
    mainImage: string;
    images: string[];
    placeUrl: string;
    location: string;
    applicants: number;
    maxApplicants: number;
    benefits: string[];
    requirements: string[];
    isActive: boolean;
    reviewGuide: string[];
    caution: string[];
    recommendedCampaigns: {
      id: number;
      title: string;
      image: string;
    }[];
  };
}

export default function CampaignDetail({ campaign }: CampaignDetailProps) {
  return (
    <div>
      {/* 이미지 슬라이드 */}
      <div className="flex flex-col space-y-4 md:p-6">
        <div className="flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4">
          <Image
            src={campaign.images[0]}
            alt={campaign.title}
            width={0}
            height={400}
            className="rounded-md"
          />
          <Image
            src={campaign.images[1]}
            alt={campaign.title}
            width={0}
            height={400}
            className="rounded-md"
          />
        </div>
        <Image
          src={campaign.images[2]}
          alt={campaign.title}
          width={600}
          height={0}
          className="rounded-md w-full"
        />
      </div>

      {/* 신청 정보 */}
      <div className="mt-4 p-4 border rounded-md bg-gray-100">
        <h2 className="text-xl font-semibold">캠페인 정보</h2>
        <p>신청기간: {campaign.applicationPeriod}</p>
        <p>리뷰기간: {campaign.reviewPeriod}</p>
        <p>발표일: {campaign.announcementDate}</p>
      </div>

      {/* 가이드라인 */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">방문 및 예약</h2>
        <p className="text-gray-700">{campaign.location}</p>
        <a
          href={campaign.placeUrl}
          target="_blank"
          className="text-blue-500 underline"
        >
          네이버 플레이스 이동
        </a>
      </div>

      {/* 방문 및 예약 안내 */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>🚗 방문 및 예약 안내</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <p>
            📍 <strong>방문 위치:</strong> {campaign.location}
          </p>
          <a
            // href={campaign.mapUrl}
            target="_blank"
            className="text-blue-500 underline"
          >
            네이버 지도에서 위치 확인하기
          </a>
        </CardContent>
      </Card>

      {/* 리뷰 작성 가이드 */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>🖋 리뷰 작성 가이드</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1">
            {campaign.reviewGuide.map((guide, index) => (
              <li key={index}>{guide}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 유의사항 */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>⚠ 유의사항</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1 text-red-500">
            {campaign.caution.map((caution, index) => (
              <li key={index}>{caution}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 추천 캠페인 */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>🔥 추천 캠페인</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {campaign.recommendedCampaigns.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
              />
              <p className="p-2">{item.title}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
