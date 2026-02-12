import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

const Filters = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1 max-w-sm">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={16}
        />
        <Input placeholder="Search users..." className="pl-9" />
      </div>
      <Button variant="outline" className="gap-2">
        <Filter size={16} /> Filter
      </Button>
    </div>
  );
};

export default Filters;
