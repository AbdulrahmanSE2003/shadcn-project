"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { NotificationItem } from "./NotificationItem";

const Notification = () => {
  return (
    <TabsContent value="notifications">
      <Card className="bg-primary-foreground shadow-lg border-zinc-200 dark:border-zinc-800">
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Manage how you receive alerts.</CardDescription>
        </CardHeader>
        <CardContent className="divide-y divide-zinc-100 dark:divide-zinc-800">
          <NotificationItem
            title="Email Notifications"
            desc="Receive emails about account activity."
            defaultState={false}
          />
          <NotificationItem
            title="System Alerts"
            desc="Get notified about critical updates."
            defaultState={true}
          />
          <NotificationItem
            title="Marketing"
            desc="Tips and new feature announcements."
            defaultState={false}
          />
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Notification;
