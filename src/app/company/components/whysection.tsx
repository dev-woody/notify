export default function WhyReviewPlace() {
  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="container w-3/4 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 좌측: 이미지 */}
        <div className="relative flex justify-center">
          <img
            src="	https://dummyimage.com/600x500"
            alt="키워드 분석 표"
            className="w-2/3 shadow-lg rounded-lg "
          />
        </div>

        {/* 우측: 텍스트 */}
        <div className="text-left">
          <h2 className="text-4xl font-bold leading-snug">
            왜 <span className="text-blue-500">노티파이</span>를 쓰고
            <br />
            모두 <span className="text-blue-500">만족</span>할까요?
          </h2>

          {/* 등급제도 버튼 */}
          <div className="mt-4">
            <button className="px-5 py-2 border border-gray-300 rounded-full text-white text-sm hover:bg-gray-700">
              리뷰어 내부 등급제도
            </button>
          </div>

          <h3 className="text-2xl font-semibold mt-8">수준 있는 체험단</h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            “결국 사람이 합니다” 얼마나 꼼꼼하게 리뷰했는지, 얼마나 성실하게
            리뷰했는지 하나의 리뷰도 빠짐없이 꼼꼼하게 평가하고 관리합니다.
          </p>

          {/* 슬라이드 인디케이터 */}
          <div className="flex gap-2 mt-6">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
