"use client";
import { useState, useEffect } from "react";
import { Info, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="relative overflow-hidden rounded-xl border border-amber-200 bg-white/80 dark:bg-zinc-950/90 p-4 shadow-2xl backdrop-blur-md dark:border-amber-900/40">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={16} />
        </button>

        <div className="flex gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
            <Info className="h-5 w-5 text-amber-600 dark:text-amber-500" />
          </div>

          <div className="space-y-1 pr-4">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-amber-900 dark:text-amber-100">
                Static UI Preview
              </h3>
              <Badge className="bg-amber-100 text-[9px] text-amber-700 dark:bg-amber-900/50 dark:text-amber-400 border-none h-4">
                DEMO
              </Badge>
            </div>
            <p className="text-[11px] text-amber-800/70 dark:text-amber-500/80 leading-snug">
              This dashboard is a **static design prototype** built to showcase
              UI components and layout logic.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisclaimer;
