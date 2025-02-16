"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "../ui/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../common/calendar/components/ui/label";

// 🔹 1단계: 약관 동의 스키마
const termsSchema = z.object({
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "이용약관에 동의해야 합니다.",
  }),
  agreePrivacy: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집에 동의해야 합니다.",
  }),
});

// 🔹 2단계: 개인정보 입력 스키마
const personalInfoSchema = z.object({
  name: z.string().min(2, { message: "이름을 입력하세요." }),
  phone: z
    .string()
    .regex(/^010-\d{4}-\d{4}$/, "올바른 연락처 형식 입력 (예: 010-1234-5678)"),
  address: z.string().min(5, { message: "주소를 입력하세요." }),
  blog: z.string().url({ message: "올바른 블로그 URL을 입력하세요." }),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "성별을 선택해주세요." }),
  }),
});

// 🔹 3단계: 아이디 & 비밀번호 설정 스키마
const accountSchema = z
  .object({
    userId: z
      .string()
      .min(4, { message: "아이디는 최소 4글자 이상 입력하세요." }),
    password: z
      .string()
      .min(8, { message: "비밀번호는 최소 8글자 입력해주세요." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export function SignUpForm({ className, ...props }: { className?: string }) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const termsForm = useForm<z.infer<typeof termsSchema>>({
    resolver: zodResolver(termsSchema),
    defaultValues: { agreeTerms: false, agreePrivacy: false },
  });

  const personalInfoForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      blog: "",
      gender: "male",
    },
  });

  const accountForm = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
    defaultValues: { userId: "", password: "", confirmPassword: "" },
  });

  function handleNextStep(form: any) {
    form.handleSubmit(() => {
      setStep((prev) => prev + 1);
    })();
  }

  function handlePrevStep() {
    setStep((prev) => prev - 1);
  }

  function onSubmit(data: z.infer<typeof accountSchema>) {
    setIsLoading(true);
    console.log({
      ...termsForm.getValues(),
      ...personalInfoForm.getValues(),
      ...data,
    });

    setTimeout(() => {
      setIsLoading(false);
      alert("🎉 회원가입이 완료되었습니다!");
    }, 2000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* 🔹 Step 1: 약관 동의 */}
      {step === 1 && (
        <Form {...termsForm}>
          <form className="space-y-4">
            <FormField
              control={termsForm.control}
              name="agreeTerms"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FormLabel htmlFor="agreeTerms">
                    이용약관에 동의합니다.
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={termsForm.control}
              name="agreePrivacy"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <Checkbox
                    id="agreePrivacy"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FormLabel htmlFor="agreePrivacy">
                    개인정보 수집에 동의합니다.
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="button"
              className="w-full"
              onClick={() => handleNextStep(termsForm)}
            >
              다음
            </Button>
          </form>
        </Form>
      )}

      {/* 🔹 Step 2: 개인정보 입력 */}
      {step === 2 && (
        <Form {...personalInfoForm}>
          <form className="space-y-4">
            <FormField
              control={personalInfoForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder="이름 입력" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={personalInfoForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>연락처</FormLabel>
                  <FormControl>
                    <Input placeholder="010-1234-5678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={personalInfoForm.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>주소</FormLabel>
                  <FormControl>
                    <Input placeholder="주소 입력" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={personalInfoForm.control}
              name="blog"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>네이버 블로그 주소</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://blog.naver.com/..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex space-x-2 w-full">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handlePrevStep}
              >
                이전
              </Button>
              <Button
                type="button"
                className="flex-1"
                onClick={() => handleNextStep(personalInfoForm)}
              >
                다음
              </Button>
            </div>
          </form>
        </Form>
      )}

      {/* 🔹 Step 3: 계정 정보 입력 */}
      {step === 3 && (
        <Form {...accountForm}>
          <form
            className="space-y-4"
            onSubmit={accountForm.handleSubmit(onSubmit)}
          >
            <FormField
              control={accountForm.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>아이디</FormLabel>
                  <FormControl>
                    <Input placeholder="아이디 입력" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={accountForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={accountForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit" disabled={isLoading}>
              회원가입 완료
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
