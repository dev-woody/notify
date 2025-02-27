"use client";

import InfluencerReviews from "./components/review";
import WhyReviewPlace from "./components/whysection";
import CampaignProcess from "./components/campaing-process";
import PartnersSection from "./components/partner";
import InfoSection from "./components/event";
import DataNumber from "./components/data-number";
import CampaingList from "./components/campaing-list";
import Promotion from "./components/promotion";
import Contents from "./components/contents";
import ContactSection from "./components/contect-section";

export default function HomePage() {
  return (
    <main className="w-screen body-font overflow-hidden text-gray-600">
      <InfoSection />
      <DataNumber />
      <CampaingList />
      <Promotion />
      <Contents />
      <InfluencerReviews />
      <WhyReviewPlace />
      <CampaignProcess />
      <PartnersSection />
      <ContactSection /> {/* 문의하기 섹션을 맨 마지막에 추가 */}
    </main>
  );
}
