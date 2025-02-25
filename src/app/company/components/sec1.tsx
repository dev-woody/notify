export default function InfoSection() {
  return (
    <section className="container m-auto h-screen flex justify-center items-center">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-4xl text-2xl font-extrabold title-font mb-4 text-gray-900">
          <span className="text-blue-600">핫플레이스</span>로 만드는
          <br /> 우리 가게{" "}
          <span className="text-blue-600">맞춤 체험단 리뷰</span> 마케팅
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed font-bold">
          <span className="text-blue-600">첫 광고주</span> 대상,{" "}
          <span className="text-blue-600">당일 계약</span>
          혜택 받으세요!
        </p>
      </div>
    </section>
  );
}
