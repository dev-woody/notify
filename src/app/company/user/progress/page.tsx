import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Progress() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container md:px-40 px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-col gap-5 flex-wrap md:flex-nowrap">
            <div className="md:flex-grow flex flex-col justify-between">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                광고 진행 중
              </h2>
              <div>1. 진행 광고</div>
              <div>2. 진행 광고</div>
              <div>3. 진행 광고</div>
              <div>4. 진행 광고</div>
            </div>
            <Separator />

            <div className="md:flex-grow flex flex-row justify-between items-center">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                네이버 플레이스 최적화
              </h2>
              <Badge>ON</Badge>
            </div>
            <Separator />

            <div className="md:flex-grow flex flex-row justify-between items-center">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                리워드 트래픽 / 저장하기
              </h2>
              <Badge variant="secondary">OFF</Badge>
            </div>
            <Separator />
          </div>
        </div>
      </div>
    </section>
  );
}
