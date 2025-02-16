import NavbarReviewer from "@/components/reviewer/nav-bar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 h-screen overflow-scroll">
      <NavbarReviewer />
      <div className="container min-w-full h-full mx-auto md:px-32 py-10 body-font w-full text-gray-600">
        {children}
      </div>
      <Toaster />
    </main>
  );
}
