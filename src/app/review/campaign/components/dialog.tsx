"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// ✅ 약관 동의 유효성 검사 스키마
const termsSchema = z.object({
  agree1: z
    .boolean()
    .refine((val) => val, { message: "필수 약관 동의가 필요합니다." }),
  agree2: z
    .boolean()
    .refine((val) => val, { message: "필수 약관 동의가 필요합니다." }),
});

export default function TermsDialog() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  // ✅ React Hook Form 설정
  const form = useForm({
    resolver: zodResolver(termsSchema),
    defaultValues: {
      agree1: false,
      agree2: false,
    },
  });

  // ✅ 제출 핸들러 (임시로 콘솔 출력)
  function onSubmit() {
    console.log("회원 정보 제출됨:");

    toast({
      title: "약관 동의 완료",
      description: "모든 약관을 동의하셨습니다.",
    });

    // 🔹 다이얼로그 닫기
    setOpen(false);
  }

  // ✅ 모든 체크박스가 체크되었는지 확인
  const allChecked = form.watch("agree1") && form.watch("agree2");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex w-full text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
        >
          신청하기
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>약관 동의</DialogTitle>
        </DialogHeader>

        {/* 🔹 ShadCN Form 적용 */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="terms1">
                <AccordionTrigger>서비스 이용 약관</AccordionTrigger>
                <AccordionContent>
                  본 서비스 이용 약관은 회사가 제공하는 서비스 이용과 관련하여
                  이용자의 권리, 의무 및 책임사항을 규정합니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* 🔹 약관 1 (필수) */}
            <FormField
              control={form.control}
              name="agree1"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-medium">
                    [필수] 서비스 이용 약관 동의
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 🔹 약관 내용 펼치기 (Accordion) */}
            <Accordion type="single" collapsible>
              <AccordionItem value="terms2">
                <AccordionTrigger>개인정보 처리 방침</AccordionTrigger>
                <AccordionContent>
                  이용자의 개인정보는 서비스 제공 목적 외에는 사용되지 않으며,
                  개인정보 보호법에 따라 안전하게 관리됩니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* 🔹 약관 2 (필수) */}
            <FormField
              control={form.control}
              name="agree2"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-medium">
                    [필수] 개인정보 처리 방침 동의
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 🔹 제출 버튼 (체크 완료 시에만 활성화) */}
            <DialogFooter>
              <Button type="submit" className="w-full" disabled={!allChecked}>
                동의하고 계속하기
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
