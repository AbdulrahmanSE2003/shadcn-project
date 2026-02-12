import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Lock, User } from "lucide-react";

const SettingsTab = () => {
  return (
    <TabsList className="bg-primary-foreground border">
      <TabsTrigger value="profile" className="gap-2">
        <User size={16} /> Profile
      </TabsTrigger>
      <TabsTrigger value="security" className="gap-2">
        <Lock size={16} /> Security
      </TabsTrigger>
      <TabsTrigger value="notifications" className="gap-2">
        <Bell size={16} /> Notifications
      </TabsTrigger>
    </TabsList>
  );
};

export default SettingsTab;
