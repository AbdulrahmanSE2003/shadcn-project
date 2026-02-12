import CalendarDayCell from "./CalendarDayCell";

import { CalendarEvent } from "./types";

interface CalendarGridProps {
  events: readonly CalendarEvent[];
}

const CalendarGrid = ({ events }: CalendarGridProps) => (
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

    <div className="grid grid-cols-7 auto-rows-[120px]">
      {Array.from({ length: 35 }).map((_, i) => (
        <CalendarDayCell key={i} index={i} events={events} />
      ))}
    </div>
  </main>
);

export default CalendarGrid;
