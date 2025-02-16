export type PaymentType = {
  id: string
  amount: number
  type: string
  name: string
  createdAt: string
}

export const payments: PaymentType[] = [
  {
    id: "728ed52f",
    amount: 100,
    type: "블로그",
    name: "ㅇㅇ업체 리뷰",
    createdAt: "2024-12-10"
  },
  {
    id: "489e1d42",
    amount: 125,
    type: "인스타",
    name: "ㅇㅇ업체 인스타 광고",
    createdAt: "2025-02-15"
  },
  // ...
]
