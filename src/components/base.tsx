"use client";
import { usePathname } from "next/navigation";
import { IconSidebar } from "./icon-sidebar";
import { NavToolbar } from "./nav-toolbar";
import { SidebarProvider } from "./ui/sidebar";
import { Footer } from "./footer";

export const Base = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const withoutLayout = ["/auth", "/auth/login", "/login", "/register"];

  if (withoutLayout.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <div className="w-full flex md:flex-row flex-col min-h-svh">
        <IconSidebar />
        <div className="bg-background shadow-lg rounded-md border flex-1 md:my-2.5 mb-2.5 md:mr-2.5 background-texture">
          <NavToolbar />
          <div className="pt-2.5 mb-5 px-4">{children}</div>
          <Footer />
          {/* <NoiseBackground density={0.9} opacity={0.075} /> */}
        </div>
      </div>
    </SidebarProvider>
  );
};
