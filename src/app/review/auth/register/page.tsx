import AuthLayout from "../auth-layout";
import { SignUpForm } from "@/components/reviewer/signUp";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function SignUp() {
  return (
    <AuthLayout>
      <Card className="p-6">
        <div className="mb-2 flex flex-col space-y-2 text-left">
          <h1 className="text-lg font-semibold tracking-tight">회원가입 </h1>
          <p className="text-sm text-muted-foreground">
            모든 정보는 필수로 기입해주세요. <br />
            이미 계정이 있으신가요?{" "}
            <Link
              href="/review/auth"
              className="underline underline-offset-4 hover:text-primary"
            >
              회원 인증
            </Link>
            을 해주세요.
          </p>
        </div>
        <SignUpForm />
      </Card>
    </AuthLayout>
  );
}
