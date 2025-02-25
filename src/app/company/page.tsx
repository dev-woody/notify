"use client";

import InfluencerReviews from "./components/review";
import WhyReviewPlace from "./components/whysection";
import CampaignProcess from "./components/campaing-process";
import PartnersSection from "./components/partner";
import InfoSection from "./components/sec1";
import DataNumber from "./components/data-number";
import CampaingList from "./components/campaing-list";
import Promotion from "./components/promotion";
import Contents from "./components/contents";

export default function HomePage() {
  return (
    <main id=" w-screen body-font overflow-screen text-gray-600">
      <InfoSection />
      <DataNumber />
      <CampaingList />
      <Promotion />
      <Contents />
      <InfluencerReviews />
      <WhyReviewPlace />
      <CampaignProcess />
      <PartnersSection />
    </main>
  );
}
