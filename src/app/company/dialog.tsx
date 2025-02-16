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
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { inflowPath } from "@/lib/data";

// 🔹 Zod 스키마 정의 (유효성 검사)
const formSchema = z.object({
  name: z.string().min(2, "성함을 2글자 이상 입력해주세요."),
  phone: z
    .string()
    .regex(/^010-\d{4}-\d{4}$/, "올바른 연락처 형식 입력 (예: 010-1234-5678)"),
  comName: z.string().min(2, "업체명을 입력해주세요."),
  inflow: z.string().min(1, "유입경로를 선택해주세요."),
});

export default function DialogComponent() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  // 🔹 React Hook Form 사용
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      comName: "",
      inflow: "",
    },
  });

  // 🔹 폼 제출 핸들러
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("📨 제출된 데이터:", data);

    // 🔹 폼 초기화
    form.reset();

    // 🔹 성공 토스트 알림
    toast({
      title: "문의가 성공적으로 등록되었습니다!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    // 🔹 다이얼로그 닫기
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex mx-auto mt-16 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
        >
          문의하기
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>정보 기입</DialogTitle>
          <DialogDescription>담당자 확인 후 확정됩니다.</DialogDescription>
        </DialogHeader>

        {/* 🔹 ShadCN Form 적용 */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            {/* 🔹 성함 입력 */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>성함</FormLabel>
                  <FormControl>
                    <Input placeholder="성함을 입력해주세요." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 🔹 연락처 입력 */}
            <FormField
              control={form.control}
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

            {/* 🔹 업체명 입력 */}
            <FormField
              control={form.control}
              name="comName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>업체명 (주소)</FormLabel>
                  <FormControl>
                    <Input placeholder="업체명을 입력해주세요." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 🔹 유입경로 선택 */}
            <FormField
              control={form.control}
              name="inflow"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>유입경로</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="유입경로를 선택해주세요." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {inflowPath.map((item, index) => (
                            <SelectItem key={index} value={item.value}>
                              {item.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 🔹 제출 버튼 */}
            <DialogFooter>
              <Button type="submit" className="w-full">
                문의하기
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
