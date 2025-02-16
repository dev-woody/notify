import { SidebarTrigger } from "../ui/sidebar";

export default function Navbar() {
  return (
    <header className="container min-w-full mx-auto flex p-5 flex-col md:flex-row items-center body-font w-full text-gray-600 gap-2">
      <SidebarTrigger />
      <div className="w-full text-center">Notify</div>
    </header>
  );
}
