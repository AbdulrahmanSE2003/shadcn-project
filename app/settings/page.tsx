import { Tabs } from "@/components/ui/tabs";
import SettingsTabs from "./SettingsTabs";
import Profile from "./Profile";
import Security from "./Security";
import Notification from "./Notification";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground text-sm">
          Manage your account settings and preferences.
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <SettingsTabs />

        {/* Profile Settings */}
        <Profile />

        {/* Security Settings */}
        <Security />

        {/* Notifications */}
        <Notification />
      </Tabs>
    </div>
  );
}
