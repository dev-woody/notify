import { notFound } from "next/navigation";
import { campaigns } from "../data";
import CampaignDetail from "./campaignDetail";
import { Separator } from "@/components/ui/separator";
import CampaignSidebar from "./campaignSlider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CampaignReview from "./campaignReview";

interface CampaignDetailPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return campaigns.map((campaign) => ({
    id: campaign.id.toString(),
  }));
}

export default function CampaignDetailPage({
  params,
}: CampaignDetailPageProps) {
  const campaign = campaigns.find((c) => c.id.toString() === params.id);

  if (!campaign) return notFound();

  return (
    <div className="flex md:flex-row flex-col md:space-x-8 space-y-4 py-10">
      <div className="flex flex-col mx-auto md:pl-10 px-4 flex-1">
        {/* 타이틀 */}
        <h1 className="text-2xl font-bold">{campaign.title}</h1>
        <p className="text-gray-600">{campaign.subtitle}</p>
        <div className="mt-2 flex items-center space-x-2">
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            {campaign.review}
          </span>
          <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">
            {campaign.type}
          </span>
        </div>
        <Tabs defaultValue="info" className="mt-4">
          <TabsList className="grid md:w-[400px] grid-cols-2">
            <TabsTrigger value="info">캠페인 정보</TabsTrigger>
            <TabsTrigger value="review">신청자 목록</TabsTrigger>
          </TabsList>
          <Separator className="md:block hidden" />
          <TabsContent value="info">
            <CampaignDetail campaign={campaign} />
          </TabsContent>
          <TabsContent value="review">
            <CampaignReview />
          </TabsContent>
        </Tabs>
      </div>
      <Separator orientation="vertical" />
      <CampaignSidebar campaign={campaign} />
    </div>
  );
}
