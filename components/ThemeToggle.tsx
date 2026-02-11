"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type toggleProps = {
  rounded?: boolean;
  size?: string;
};
/**
 * ThemeToggle Component
 * Provides a segmented control to switch between light, dark, and system themes.
 */
const ThemeToggle = ({ rounded }: toggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // Prevent hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <Tabs
      value={theme}
      onValueChange={(value: string) => setTheme(value)}
      className={`w-fit`}
    >
      <TabsList
        className={cn(
          "grid grid-cols-3 h-5 w-24 p-0.5 bg-muted/50",
          rounded && "rounded-[40px]",
        )}
      >
        <TabsTrigger
          value="light"
          className={cn(
            "h-7 px-0 transition-all duration-300",
            rounded && "rounded-full",
          )}
        >
          <Sun className="h-1 w-1 " />
          <span className="sr-only">Light</span>
        </TabsTrigger>

        <TabsTrigger
          value="dark"
          className={cn(
            "h-7 px-0 transition-all duration-300",
            rounded && "rounded-full",
          )}
        >
          <Moon className="h-1 w-1 " />
          <span className="sr-only">Dark</span>
        </TabsTrigger>

        <TabsTrigger
          value="system"
          className={cn(
            "h-7 px-0 transition-all duration-300",
            rounded && "rounded-full",
          )}
        >
          <Monitor className="h-1 w-1 " />
          <span className="sr-only">System</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeToggle;
