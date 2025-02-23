import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";
import TermsDialog from "../components/dialog";

interface CampaignDetailProps {
  campaign: {
    id: number;
    title: string;
    subtitle: string;
    remainingDays: string;
    review: string;
    type: string;
    reviewPeriod: string;
    applicationPeriod: string;
    announcementDate: string;
    images: string[];
    placeUrl: string;
    location: string;
    applicants: number;
    maxApplicants: number;
  };
}

export default function CampaignSidebar({ campaign }: CampaignDetailProps) {
  return (
    <div className="w-full md:w-1/4 p-4">
      <div className="sticky top-20 bg-white md:py-4 rounded-md">
        {/* 캠페인 이미지 */}
        <Image
          src={campaign.images[0]}
          alt="캠페인 이미지"
          width={200}
          height={300}
          className="md:block hidden rounded-md object-cover mx-auto"
        />

        {/* 캠페인 일정 정보 */}
        <div className="md:block hidden mt-4 text-sm text-gray-700">
          <p className="font-bold text-black">
            캠페인 신청기간{" "}
            <span className="ml-2">{campaign.remainingDays}</span>
          </p>
          <p>
            리뷰어 발표 <span className="ml-2">{campaign.reviewPeriod}</span>
          </p>
          <p>
            리뷰 등록기간 <span className="ml-2">{campaign.reviewPeriod}</span>
          </p>
          <p>
            캠페인 결과발표{" "}
            <span className="ml-2">{campaign.announcementDate}</span>
          </p>
        </div>

        {/* 버튼 */}
        <div className="mt-4 flex space-x-2">
          <TermsDialog />
          <Button variant="outline">
            <Clipboard />
          </Button>
        </div>
      </div>
    </div>
  );
}
