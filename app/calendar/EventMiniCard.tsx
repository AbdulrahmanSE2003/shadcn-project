import { Badge } from "@/components/ui/badge";

import { CalendarEvent } from "./types";

const EventMiniCard = ({ event }: { event: CalendarEvent }) => {
  const colors: Record<CalendarEvent["color"], string> = {
    blue: "border-blue-500",
    purple: "border-purple-500",
    emerald: "border-emerald-500",
    amber: "border-amber-500",
    rose: "border-rose-500",
    zinc: "border-zinc-500",
  };

  return (
    <div
      className={`flex flex-col gap-1 border-l-4 pl-4 py-2 bg-zinc-50 dark:bg-zinc-900/40 rounded-r-md transition-all hover:translate-x-1 ${colors[event.color]}`}
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
  );
};

export default EventMiniCard;
