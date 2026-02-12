import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import EventMiniCard from "./EventMiniCard";

import { CalendarEvent } from "./types";

type CalendarSidebarProps = {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  events: readonly CalendarEvent[];
};

const CalendarSidebar = ({ date, setDate, events }: CalendarSidebarProps) => (
  <aside className="lg:col-span-4 xl:col-span-3 space-y-6 ">
    <div>
      <Card className="bg-primary-foreground shadow-lg border-zinc-200 dark:border-zinc-800">
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
                <EventMiniCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </aside>
);

export default CalendarSidebar;
