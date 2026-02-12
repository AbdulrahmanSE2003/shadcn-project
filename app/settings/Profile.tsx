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
import { TabsContent } from "@/components/ui/tabs";

const Profile = () => {
  return (
    <TabsContent value="profile">
      <Card className="border-none bg-primary-foreground shadow-sm">
        <CardHeader>
          <CardTitle>Public Profile</CardTitle>
          <CardDescription>
            How others will see you on the platform.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input placeholder="John" defaultValue="Abdulrahman" />
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input placeholder="Doe" defaultValue="Saad" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email Address</Label>
            <Input placeholder="abdulrahman.saad2303@gmail.com" disabled />
          </div>
          <div className="space-y-2">
            <Label>Bio</Label>
            <textarea
              className="flex min-h-25 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Tell us a little about yourself..."
            />
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default Profile;
