"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Team Sync — Project Alpha",
    time: "10:00 AM",
    category: "Meeting",
    color: "blue", // Blue for meetings
  },
  {
    id: 2,
    title: "Design Review — UI/UX Kit",
    time: "11:30 AM",
    category: "Review",
    color: "purple", // Purple for reviews
  },
  {
    id: 3,
    title: "Lunch with Stakeholders",
    time: "01:00 PM",
    category: "Personal",
    color: "emerald", // Emerald for personal/social
  },
  {
    id: 4,
    title: "Product Launch Briefing",
    time: "03:00 PM",
    category: "Launch",
    color: "amber", // Amber for critical/launch events
  },
  {
    id: 5,
    title: "Weekly Code Cleanup",
    time: "04:30 PM",
    category: "Maintenance",
    color: "rose", // Rose for technical tasks
  },
  {
    id: 6,
    title: "Backend Deployment",
    time: "06:00 PM",
    category: "System",
    color: "zinc", // Zinc for system ops
  },
];

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
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
        <aside className="lg:col-span-4 xl:col-span-3 space-y-6">
          <Card className="border-none bg-primary-foreground shadow-sm">
            <CardContent className="p-4 space-y-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-none bg-background mx-auto"
              />

              <div className="space-y-4">
                <h3 className="font-semibold text-sm">Upcoming Events</h3>
                <div className="space-y-4 max-h-100 overflow-y-auto pr-2 custom-scrollbar">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className={`flex flex-col gap-1 border-l-4 pl-4 py-2 bg-zinc-50 dark:bg-zinc-900/40 rounded-r-md transition-all hover:translate-x-1 
                        ${event.color === "blue" ? "border-blue-500" : ""}
                        ${event.color === "purple" ? "border-purple-500" : ""}
                        ${event.color === "emerald" ? "border-emerald-500" : ""}
                        ${event.color === "amber" ? "border-amber-500" : ""}
                        ${event.color === "rose" ? "border-rose-500" : ""}
                        ${event.color === "zinc" ? "border-zinc-500" : ""}
                      `}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                          {event.time}
                        </span>
                        <Badge
                          variant="outline"
                          className="text-[9px] px-1.5 h-4 uppercase border-none bg-background/50"
                        >
                          {event.category}
                        </Badge>
                      </div>
                      <p className="text-sm font-semibold truncate leading-none">
                        {event.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        <main className="lg:col-span-8 xl:col-span-9 bg-primary-foreground rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden h-full">
          <div className="grid grid-cols-7 border-b bg-zinc-50/50 dark:bg-zinc-900/50">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground border-r last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 auto-rows-[120px] ">
            {Array.from({ length: 35 }).map((_, i) => {
              const dayNumber = i - 3;
              const isToday = dayNumber === 12;

              return (
                <div
                  key={i}
                  className="border-r border-b p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors relative group last:border-r-0"
                >
                  <span
                    className={`text-sm font-medium h-7 w-7 flex items-center justify-center rounded-full 
                    ${isToday ? "bg-blue-600 text-white" : "text-muted-foreground"}`}
                  >
                    {dayNumber > 0 && dayNumber <= 28 ? dayNumber : ""}
                  </span>

                  <div className="mt-2 space-y-1">
                    {dayNumber === 12 && (
                      <div className="text-[10px] bg-blue-500/10 text-blue-600 px-1.5 py-1 rounded truncate border border-blue-500/20">
                        {events[0].title}
                      </div>
                    )}
                  </div>

                  <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 p-1 bg-zinc-200 dark:bg-zinc-800 rounded-md transition-opacity">
                    <Plus size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
