"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { handleToggle } from "@/helpers/Switcher";
import { Separator } from "@/components/ui/separator";

const Security = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  return (
    <TabsContent value="security">
      <Card className="bg-primary-foreground shadow-lg border-zinc-200 dark:border-zinc-800">
        <CardHeader>
          <CardTitle>Security Preferences</CardTitle>
          <CardDescription>Keep your account safe and secure.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <Switch
                checked={isTwoFactorEnabled}
                onCheckedChange={() =>
                  handleToggle(
                    "Two-factor Authentication",
                    setIsTwoFactorEnabled,
                    isTwoFactorEnabled,
                  )
                }
              />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input type="password" />
            </div>
            <div className="space-y-2">
              <Label>New Password</Label>
              <Input type="password" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button variant="outline">Update Password</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default Security;
