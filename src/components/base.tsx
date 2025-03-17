"use client";
import { usePathname } from "next/navigation";
import { IconSidebar } from "./icon-sidebar";
import { NavToolbar } from "./nav-toolbar";
import { SidebarProvider } from "./ui/sidebar";

export const Base = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const withoutLayout = ["/auth", "/auth/login", "/login"];

  if (withoutLayout.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <div className="w-full flex flex-row min-h-svh">
        <IconSidebar />
        <div className="relative bg-background shadow-lg rounded-md border flex-1 my-2.5 mr-2.5 background-texture">
          <NavToolbar />
          <div className="pt-2.5 mb-5 px-4">{children}</div>
          {/* <NoiseBackground density={0.9} opacity={0.075} /> */}
        </div>
      </div>
    </SidebarProvider>
  );
};
