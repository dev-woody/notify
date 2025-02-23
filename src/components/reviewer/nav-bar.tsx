"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Utensils,
  ShoppingBag,
  Sparkles,
  MoreHorizontal,
  LogIn,
} from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
  { id: "region", label: "지역", icon: Home },
  { id: "food", label: "맛집", icon: Utensils },
  { id: "products", label: "제품", icon: ShoppingBag },
  { id: "beauty", label: "뷰티", icon: Sparkles },
  { id: "more", label: "기타", icon: MoreHorizontal },
];

export default function NavbarReviewer() {
  const [active, setActive] = useState("region");

  return (
    <header className=" w-full bg-white shadow-md">
      <div className="container mx-auto py-5">
        {/* 1행 - 로고 */}
        <div className="flex justify-start py-3">
          <Link
            href={"/review/campaign"}
            className="text-lg font-semibold text-gray-800"
          >
            Notify 로고 영역
          </Link>
        </div>
        {/* 2행 - 네비게이션 & 로그인 버튼 */}
        <div className="flex justify-between items-center px-4 py-2">
          {/* 네비게이션 */}
          <nav className="flex space-x-4">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={cn(
                  "text-sm font-medium transition-all",
                  active === id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                )}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* 로그인 버튼 */}
          <Button variant="outline" size="sm">
            <LogIn className="w-4 h-4 mr-1" />
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
}
