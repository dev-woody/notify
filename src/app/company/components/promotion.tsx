import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "lucide-react";

export default function Promotion() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto px-6 text-center">
        {/* 제목 */}
        <h2 className="text-3xl font-extrabold mb-4">
          첫 광고주 대상 <span className="text-gray-300">SPECIAL</span> 프로모션
        </h2>
        <p className="text-lg text-gray-300">
          체험단 마케팅, <span className="text-blue-500 font-bold">경험</span>
          하고 계약하세요!
        </p>

        {/* 카드 영역 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 카드 1 */}
          <Card className="bg-gray-700 border-none shadow-lg p-6 flex flex-col justify-between">
            <CardContent>
              <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">
                선택 01
              </Badge>
              <h3 className="text-2xl font-semibold mt-4">
                플레이스 성과형 서비스
              </h3>
              <p className="text-gray-400 mt-2">
                블로그 체험단 50명 이상 계약 시
              </p>
            </CardContent>
            <div className="text-gray-500 text-5xl mt-6 flex justify-end">
              📍
            </div>
          </Card>

          {/* 카드 2 */}
          <Card className="bg-gray-700 border-none shadow-lg p-6 flex flex-col justify-between">
            <CardContent>
              <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">
                선택 02
              </Badge>
              <h3 className="text-2xl font-semibold mt-4">
                방문 체험형 당일 계약 혜택
              </h3>
              <p className="text-gray-400 mt-2">
                상담 후, 당일 계약 시 할인 적용
              </p>
            </CardContent>
            <div className="text-gray-500 text-5xl mt-6 flex justify-end">
              %
            </div>
          </Card>
        </div>

        {/* 하단 설명 */}
        <p className="text-sm text-gray-400 mt-8">
          ※ 선택 01, 02 중 하나만 적용 가능하며, 방문자리뷰 상품은 플레이스 가입
          필수입니다.
        </p>
      </div>
    </section>
  );
}
