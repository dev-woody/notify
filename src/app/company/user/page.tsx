export default function User() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              실시간 플레이스 순위 확인{" "}
            </h2>
            <p className="leading-relaxed text-base">
              순위를 조금 올리고 싶다면 (트레픽 광고 사용 칸 = 네이버 플레이스
              광고 처럼)
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              블로그 체험단 실제 리뷰{" "}
            </h2>
            <p className="leading-relaxed text-base">- 직원 친절은 어땠나요?</p>
            <p className="leading-relaxed text-base">- 맛은 괜찮았나요?</p>
            <p className="leading-relaxed text-base">
              - 향후 재방문 의사는 있나요 ?
            </p>
            <p className="leading-relaxed text-base">- 분위기는 어떤가요 ?</p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              고객 후기{" "}
            </h2>
            <p className="leading-relaxed text-base">고객 후기 내용</p>
          </div>
        </div>
      </div>
    </section>
  );
}
