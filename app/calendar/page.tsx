"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CalendarGrid from "./CalendarGrid";
import CalendarSidebar from "./CalendarSidebar";
import { useState } from "react";
import { events } from "@/helpers/Constant";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Schedule</h1>
          <p className="text-muted-foreground text-sm">
            Manage your team events and deadlines.
          </p>
        </div>
        <Button className="gap-2">
          <Plus size={18} /> Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <CalendarSidebar date={date} setDate={setDate} events={events} />
        <CalendarGrid events={events} />
      </div>
    </div>
  );
}
