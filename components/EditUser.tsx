"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "sonner";

const values = {
  id: 1,
  userName: "john doe",
  email: "john.doe@gmail.com",
  phone: "+1 234 5678",
  location: "New York, NY",
};

const userData = Object.entries(values);

const EditUser = () => {
  function handleSuccess() {
    toast.success("Data changed successfully.");
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={`cursor-pointer`}>Edit User</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          {...userData.map((value) => (
            <div className="grid gap-3" key={value[0]}>
              <Label htmlFor="sheet-demo-name">{value[0]}</Label>
              <Input id="sheet-demo-name" defaultValue={value[1]} />
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={handleSuccess} type="submit">
              Save changes
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EditUser;
