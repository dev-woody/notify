"use client";

import { useEffect, useState } from "react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 페이지의 바닥으로 가면 슬라이드 다운 애니메이션으로 사라짐
      if (scrollTop + windowHeight >= documentHeight - 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-4xl mx-auto p-6 py-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">문의하기</h2>
      <form className="grid grid-cols-2 gap-4">
        {/* 1행 */}
        <input
          type="text"
          name="company"
          placeholder="업체명"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          className="border p-2 rounded w-full"
        />

        {/* 2행 */}
        <input
          type="text"
          name="contact"
          placeholder="연락처"
          className="border p-2 rounded w-full"
        />
        <select name="source" className="border p-2 rounded w-full">
          <option value="">유입경로 선택</option>
          <option value="검색">검색</option>
          <option value="SNS">SNS</option>
          <option value="광고">광고</option>
          <option value="추천">추천</option>
        </select>

        {/* 3행 */}
        <select name="interest" className="border p-2 rounded w-full">
          <option value="">마케팅 관심분야</option>
          <option value="SNS">SNS 마케팅</option>
          <option value="바이럴">바이럴 마케팅</option>
          <option value="광고">광고 캠페인</option>
        </select>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          개인정보 수집 및 이용에 동의합니다.
        </label>

        {/* 4행 (문의사항) */}
        <textarea
          name="inquiry"
          placeholder="문의사항"
          className="border p-2 rounded col-span-2 h-24 resize-none"
        />

        {/* 문의하기 버튼 */}
        <button
          type="submit"
          className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          문의하기
        </button>
      </form>

      {/* 슬라이드 다운 효과를 위한 추가 UI */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white shadow-md p-6 transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <form className="grid grid-cols-3 gap-4">
            <input
              type="text"
              name="company"
              placeholder="업체명"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="name"
              placeholder="이름"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="contact"
              placeholder="연락처"
              className="border p-2 rounded w-full"
            />
            <select name="source" className="border p-2 rounded w-full">
              <option value="">유입경로 선택</option>
              <option value="검색">검색</option>
              <option value="SNS">SNS</option>
              <option value="광고">광고</option>
              <option value="추천">추천</option>
            </select>
            <select name="interest" className="border p-2 rounded w-full">
              <option value="">마케팅 관심분야</option>
              <option value="SNS">SNS 마케팅</option>
              <option value="바이럴">바이럴 마케팅</option>
              <option value="광고">광고 캠페인</option>
            </select>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              개인정보 수집 및 이용에 동의합니다.
            </label>
            <textarea
              name="inquiry"
              placeholder="문의사항"
              className="border p-2 rounded col-span-3 h-24 resize-none"
            />

            {/* 문의하기 버튼 */}
            <button
              type="submit"
              className="col-span-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              문의하기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
