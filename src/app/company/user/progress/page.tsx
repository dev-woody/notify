import { Separator } from "@/components/ui/separator";

export default function Progress() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-col gap-5 flex-wrap md:flex-nowrap">
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                광고 진행 중
              </h2>
              <p className="leading-relaxed">추가 내용</p>
              <Separator />
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                네이버 플레이스 최적화
              </h2>
              <p className="leading-relaxed">추가 내용</p>
              <Separator />
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                저장하기 찜하기
              </h2>
              <p className="leading-relaxed">추가 내용</p>
              <Separator />
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                리워드
              </h2>
              <p className="leading-relaxed">추가 내용</p>
              <Separator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
