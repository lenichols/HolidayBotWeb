import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner"


export const metadata: Metadata = {
  title: "HolidayBot AI",
  description: "Generate a Secret Santa Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          {/* <span className="pt-6">
            <SidebarTrigger  />
          </span> */}
            {children}
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
