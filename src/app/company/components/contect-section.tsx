"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { MultiSelect } from "@/components/multi-select";

const campaignSources = [
  { label: "네이버 플레이스", value: "PLACE" },
  { label: "네이버 블로그", value: "BLOG" },
  { label: "SNS 마케팅", value: "SNS" },
  { label: "광고 캠페인", value: "ADVERTISE" },
];

const contactSchema = z.object({
  title: z.string().min(1, "업체명을 입력해주세요."),
  contactName: z.string().min(1, "이름을 입력해주세요."),
  contactPhone: z.string().min(10, "올바른 연락처를 입력해주세요."),
  contactEmail: z.string().email("올바른 이메일을 입력해주세요."),
  source: z.string().min(1, "유입경로를 선택해주세요."),
  marketingTypes: z.array(z.string()).min(1, "마케팅 관심분야를 선택해주세요."),
  description: z.string().min(1, "문의사항을 입력해주세요."),
  agree: z
    .boolean()
    .refine((val) => val, "개인정보 수집 및 이용에 동의해야 합니다."),
});

export default function ContactSection() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      title: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      marketingTypes: [],
      source: "",
      description: "",
      agree: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/campaign/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("문의 접수에 실패했습니다.");

      toast({
        title: "요청완료",
        description:
          "요청을 성공적으로 제출했습니다. 담당자가 빠른 시일 내에 연락드리겠습니다.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "오류 발생",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <section className="max-w-4xl mx-auto p-6 py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">문의하기</h2>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          {/* 업체명 */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>업체명</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="업체명을 입력하세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 이름 */}
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="이름을 입력하세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 연락처 */}
          <FormField
            control={form.control}
            name="contactPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>연락처</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="연락처를 입력하세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 이메일 */}
          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input
                    type="contactEmail"
                    placeholder="이메일을 입력하세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 유입경로 */}
          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>유입경로</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="유입경로 선택" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="SEARCH">검색</SelectItem>
                    <SelectItem value="SNS">SNS</SelectItem>
                    <SelectItem value="ADVERTISE">광고</SelectItem>
                    <SelectItem value="RECOMMEND">추천</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 마케팅 관심분야 */}
          <FormField
            control={form.control}
            name="marketingTypes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>마케팅 관심분야</FormLabel>
                <FormControl>
                  <MultiSelect
                    options={campaignSources}
                    labelKey="label"
                    valueKey="value"
                    defaultValue={field?.value}
                    onValueChange={field?.onChange}
                    placeholder="단위를 선택하세요"
                  />
                </FormControl>
                {/* <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="마케팅 관심분야 선택" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="PLACE">네이버 플레이스</SelectItem>
                    <SelectItem value="BLOG">네이버 블로그</SelectItem>
                    <SelectItem value="SNS">SNS 마케팅</SelectItem>
                    <SelectItem value="ADVERTISE">광고 캠페인</SelectItem>
                  </SelectContent>
                </Select> */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 개인정보 수집 동의 */}
          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
              <FormItem className="col-span-2 flex items-center space-x-2 space-y-0">
                <FormControl>
                  <Checkbox
                    id="agree"
                    checked={field.value}
                    onCheckedChange={(checked) =>
                      field.onChange(checked === true)
                    }
                  />
                </FormControl>
                <FormLabel htmlFor="agree" className="text-sm m-0">
                  개인정보 수집 및 이용에 동의합니다.
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 문의사항 */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>문의사항</FormLabel>
                <FormControl>
                  <Textarea placeholder="문의사항을 입력하세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 제출 버튼 */}
          <Button
            type="submit"
            className="col-span-2"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "전송 중..." : "문의하기"}
          </Button>
        </form>
      </section>
    </FormProvider>
  );
}
