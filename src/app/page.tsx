import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  // ✅ 로고 이미지 설정 (변경 가능)
  const logoSrc = ""; // 로고 이미지 URL (""이면 기본 텍스트 표시)

  return (
    <section className="text-gray-600 body-font h-screen">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-full">
        {/* 🔹 로고 이미지 영역 */}
        <div className="mb-8">
          <Link href="/" className="flex justify-center">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="로고"
                className="h-16 w-40 object-contain"
              />
            ) : (
              <h1 className="text-3xl font-bold text-gray-700">Notify</h1>
            )}
          </Link>
        </div>

        {/* 🔹 버튼 영역 */}
        <div className="text-center lg:w-2/3 w-full">
          <div className="flex justify-center">
            <Link href="/company">
              <Button className="inline-flex text-white md:w-[30vw] bg-gray-500 border-0 py-10 px-6 focus:outline-none hover:bg-gray-600 rounded justify-center text-lg">
                사장님용
              </Button>
            </Link>
            <Link href="/review">
              <Button className="ml-4 inline-flex text-gray-700 md:w-[30vw] bg-gray-100 border-0 py-10 px-6 focus:outline-none hover:bg-gray-200 rounded justify-center text-lg">
                리뷰어용
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
