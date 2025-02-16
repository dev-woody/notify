"use client";

import { UserAuthForm } from "@/components/reviewer/signIn";
import AuthLayout from "./auth-layout";
import { Card } from "@/components/ui/card";

export default function SignIn() {
  return (
    <AuthLayout>
      <Card className="p-6">
        <div className="flex flex-col space-y-2 text-left">
          <h1 className="text-2xl font-semibold tracking-tight">회원 인증</h1>
          <p className="text-sm text-muted-foreground">
            노티파이는 인증된 회원들에게 최고의 업체를 제공합니다. <br />
            다양한 업체들을 만나보세요.
          </p>
        </div>
        <UserAuthForm />
      </Card>
    </AuthLayout>
  );
}
