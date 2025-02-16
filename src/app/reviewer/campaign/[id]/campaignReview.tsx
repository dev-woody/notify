"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

// 신청자 데이터 타입 정의
interface Applicant {
  id: number;
  name: string;
  profileImg: string;
  timestamp: string;
}

const applicants: Applicant[] = [
  {
    id: 1,
    name: "g log",
    profileImg: "https://dummyimage.com/50x50", // 임시 이미지
    timestamp: "2025-02-17 01:53",
  },
  {
    id: 2,
    name: "헬레나응엽",
    profileImg: "https://dummyimage.com/50x50",
    timestamp: "2025-02-17 01:50",
  },
  {
    id: 3,
    name: "기홍으나",
    profileImg: "https://dummyimage.com/50x50",
    timestamp: "2025-02-17 01:48",
  },
  {
    id: 4,
    name: "rudgk3337",
    profileImg: "https://dummyimage.com/50x50",
    timestamp: "2025-02-17 01:29",
  },
  {
    id: 5,
    name: "김주리",
    profileImg: "https://dummyimage.com/50x50",
    timestamp: "2025-02-17 01:22",
  },
  {
    id: 6,
    name: "Toriaezu",
    profileImg: "https://dummyimage.com/50x50",
    timestamp: "2025-02-17 01:22",
  },
  {
    id: 7,
    name: "장지닝",
    profileImg: "https://dummyimage.com/50x50",
    timestamp: "2025-02-17 01:16",
  },
  {
    id: 8,
    name: "소희22",
    profileImg: "https://dummyimage.com/50x50",
    timestamp: "2025-02-17 01:13",
  },
  {
    id: 9,
    name: "herme",
    profileImg: "https://dummyimage.com/50x50",
    timestamp: "2025-02-17 01:10",
  },
  {
    id: 10,
    name: "맛난뷔페",
    profileImg: "https://dummyimage.com/50x50",
    timestamp: "2025-02-17 01:01",
  },
];

export default function CampaignReview() {
  return (
    <div className="w-full bg-white rounded-lg md:p-6">
      <h2 className="text-lg font-semibold mb-4">신청자 목록</h2>
      <Separator className="my-4" />

      <ul className="space-y-10">
        {applicants.map((applicant) => (
          <li key={applicant.id} className="flex flex-col">
            <div className="flex items-center space-x-4">
              {/* 프로필 이미지 */}
              <Image
                src={applicant.profileImg}
                alt={`${applicant.name} 프로필`}
                width={40}
                height={40}
                className="rounded-full border border-gray-300"
              />

              {/* 유저 정보 */}
              <div className="flex-1">
                <p className="font-medium text-gray-900">{applicant.name}</p>
                <p className="text-sm text-gray-500">
                  신청 메시지는 신청자와 광고주만 확인 가능합니다.
                </p>
              </div>

              {/* 시간 */}
              <span className="text-sm text-gray-400">
                {applicant.timestamp}
              </span>
            </div>
            <Separator className="mt-4" />
          </li>
        ))}
      </ul>
    </div>
  );
}
