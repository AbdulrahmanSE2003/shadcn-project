import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { handleToggle } from "@/helpers/Switcher";
import { useState } from "react";

type NotificationProps = {
  title: string;
  desc: string;
  defaultState: boolean;
};

export const NotificationItem = ({
  title,
  desc,
  defaultState,
}: NotificationProps) => {
  const [enabled, setEnabled] = useState(defaultState);

  return (
    <div className="flex items-center justify-between py-2">
      <div className="space-y-0.5">
        <Label className="text-sm font-medium">{title}</Label>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
      <Switch
        checked={enabled}
        onCheckedChange={() => handleToggle(title, setEnabled, enabled)}
      />
    </div>
  );
};
