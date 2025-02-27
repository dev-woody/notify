"use client";

import { useState } from "react";

export default function FooterForm() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    contact: "",
    source: "",
    interest: "",
    inquiry: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("문의 내용:", formData);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md p-6 transition-opacity duration-500">
      <form
        className="max-w-4xl mx-auto grid grid-cols-3 gap-4"
        onSubmit={handleSubmit}
      >
        {/* 1행 */}
        <input
          type="text"
          name="company"
          placeholder="업체명"
          className="border p-2 rounded w-full"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          className="border p-2 rounded w-full"
          value={formData.name}
          onChange={handleChange}
        />

        {/* 2행 */}
        <input
          type="text"
          name="contact"
          placeholder="연락처"
          className="border p-2 rounded w-full"
          value={formData.contact}
          onChange={handleChange}
        />
        <select
          name="source"
          className="border p-2 rounded w-full"
          value={formData.source}
          onChange={handleChange}
        >
          <option value="">유입경로 선택</option>
          <option value="검색">검색</option>
          <option value="SNS">SNS</option>
          <option value="광고">광고</option>
          <option value="추천">추천</option>
        </select>

        {/* 3행 */}
        <select
          name="interest"
          className="border p-2 rounded w-full"
          value={formData.interest}
          onChange={handleChange}
        >
          <option value="">마케팅 관심분야</option>
          <option value="SNS">SNS 마케팅</option>
          <option value="바이럴">바이럴 마케팅</option>
          <option value="광고">광고 캠페인</option>
        </select>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          개인정보 수집 및 이용에 동의합니다.
        </label>

        {/* 4행 (문의사항) */}
        <textarea
          name="inquiry"
          placeholder="문의사항"
          className="border p-2 rounded col-span-3 h-24 resize-none"
          value={formData.inquiry}
          onChange={handleChange}
        />

        {/* 문의하기 버튼 */}
        <button
          type="submit"
          className="col-span-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          문의하기
        </button>
      </form>
    </footer>
  );
}
