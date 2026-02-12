import type { Metadata } from "next";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { Toaster } from "@/components/ui/sonner";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Shadcn | Dashboard',
  description: "Manage your team events, deadlines, and schedules efficiently.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />

            <main className="relative flex min-h-screen flex-1 flex-col">
              <Navbar />

              <div className="flex-1 px-4 py-6">{children}</div>
            </main>
            <Toaster position="top-left" />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
