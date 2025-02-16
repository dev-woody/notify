export const campaigns = Array.from({ length: 20 }, (_, i) => {
  const remainingDays = 7 - (i % 7);
  
  // 🔹 상태 값 결정 로직 (신청 가능, 마감, 진행 중)
  let status: "신청 가능" | "마감" | "진행 중";
  if (remainingDays > 3) {
    status = "신청 가능";
  } else if (remainingDays > 0) {
    status = "진행 중";
  } else {
    status = "마감";
  }

  return {
    id: i + 1,
    title: `[지역명] 캠페인 ${i + 1}`,
    subtitle: `이 캠페인은 ${i + 1}번째 캠페인으로 다양한 혜택이 있습니다.`,
    review: "blog",
    type: "방문형",
    status, // ✅ "신청 가능", "진행 중", "마감" 중 하나 설정
    remainingDays: remainingDays > 0 ? `${remainingDays}일 남음` : "마감됨", // ✅ string 타입 유지
    reviewPeriod: "02.12 ~ 02.18",
    applicationPeriod: "02.03 ~ 03.12",
    announcementDate: "03.13",
    mainImage: `https://dummyimage.com/600x400/00aaff/ffffff&text=캠페인+${i + 1}`,
    images: [
      "https://dummyimage.com/600x400",
      "https://dummyimage.com/600x400/000/fff",
      "https://dummyimage.com/600x400/555/ddd",
    ],
    placeUrl: "https://naver.com",
    location: "서울특별시 강남구 테헤란로 427",
    applicants: Math.floor(Math.random() * 500),
    maxApplicants: 500,
    benefits: [
      "무료 체험 제공",
      "SNS 홍보 지원",
      "리뷰 작성 시 추가 혜택 제공",
    ],
    requirements: [
      "리뷰 작성 필수",
      "체험 후 사진 5장 이상 포함",
      "SNS 게시물 업로드 필수",
    ],
    isActive: remainingDays > 0, // ✅ 신청 가능 여부
    reviewGuide: [
      "체험 후 3일 이내 리뷰 작성 필수",
      "리뷰에 캠페인 관련 태그 3개 이상 포함",
      "최소 5장 이상의 고품질 사진 포함",
      "방문형 캠페인은 매장 분위기와 서비스에 대한 피드백 포함",
      "광고성이 강한 표현 대신 자연스러운 리뷰 작성",
    ],
    caution: [
      "리뷰 미작성 시 패널티 적용",
      "리뷰 작성 후 3개월간 유지 필수",
      "허위 리뷰 작성 시 향후 캠페인 참여 제한",
    ],
    recommendedCampaigns: [
      {
        id: (i + 2) % 20 + 1, // ✅ ID가 1~20 범위를 유지하도록 설정
        title: `[추천] 캠페인 ${(i + 2) % 20 + 1}`,
        image: "https://dummyimage.com/300x200",
      },
      {
        id: (i + 3) % 20 + 1,
        title: `[추천] 캠페인 ${(i + 3) % 20 + 1}`,
        image: "https://dummyimage.com/300x200/ff5733/ffffff",
      },
      {
        id: (i + 4) % 20 + 1,
        title: `[추천] 캠페인 ${(i + 4) % 20 + 1}`,
        image: "https://dummyimage.com/300x200/33ff57/ffffff",
      },
    ],
  };
});
