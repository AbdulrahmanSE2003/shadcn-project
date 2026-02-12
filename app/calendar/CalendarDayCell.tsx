import { Plus } from "lucide-react";
import { CalendarEvent } from "./types";

interface CalendarDayCellProps {
  index: number;
  events: readonly CalendarEvent[];
}

const CalendarDayCell = ({ index, events }: CalendarDayCellProps) => {
  const dayNumber = index - 3;
  const isToday = dayNumber === 12;

  return (
    <div className="border-r border-b p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors relative group last:border-r-0">
      <span
        className={`text-sm font-medium h-7 w-7 flex items-center justify-center rounded-full 
        ${isToday ? "bg-blue-600 text-white" : "text-muted-foreground"}`}
      >
        {dayNumber > 0 && dayNumber <= 28 ? dayNumber : ""}
      </span>

      <div className="mt-2 space-y-1">
        {dayNumber === 12 && events.length > 0 && (
          <div className="text-[10px] bg-blue-500/10 text-blue-600 px-1.5 py-1 rounded truncate border border-blue-500/20">
            {events[0].title}
          </div>
        )}
      </div>

      <button
        aria-label="Add event"
        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 p-1 bg-zinc-200 dark:bg-zinc-800 rounded-md transition-opacity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default CalendarDayCell;
