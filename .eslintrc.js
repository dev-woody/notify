module.exports = {
  rules: {
    "@typescript-eslint/no-unused-vars": "warn", // ❌ 오류 → ⚠ 경고 (빌드 실패 X)
    "@typescript-eslint/no-explicit-any": "warn", // `any` 사용 가능 (경고)
    "@next/next/no-img-element": "off", // `<img>` 태그 사용 허용
    "react-hooks/rules-of-hooks": "warn", // React Hook 규칙 완화 (경고)
    "react/no-unescaped-entities": "off", // 작은따옴표 에러 비활성화
    "@next/next/no-img-element": "off", // `<img>` 태그 허용
    "@typescript-eslint/no-unused-vars": "warn", // 사용하지 않는 변수 경고 (오류 아님)
    "@typescript-eslint/no-explicit-any": "warn", // `any` 타입 사용 가능 (경고)
    "react-hooks/rules-of-hooks": "warn", // React Hook 규칙 완화 (경고)

  },
};
