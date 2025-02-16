import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/company/nav-bar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 h-screen">
        <Navbar />
        <div className="container min-w-full h-full mx-auto p-5 body-font w-full text-gray-600">
          {children}
        </div>
        <Toaster />
      </main>
    </SidebarProvider>
  );
}
