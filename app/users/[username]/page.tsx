import CardHeading from "@/components/CardHeading";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, Crown, ShieldCheck, Zap } from "lucide-react";

const badges = [
  {
    id: "verified",
    title: "Verified User",
    description: "This user has been manually verified by the administration.",
    icon: BadgeCheck,
    color: "bg-blue-500/20 border-blue-500/40",
  },
  {
    id: "premium",
    title: "Premium Member",
    description:
      "Active subscriber with access to exclusive platform features.",
    icon: Crown,
    color: "bg-amber-500/20 border-amber-500/40",
  },
  {
    id: "moderator",
    title: "System Moderator",
    description:
      "Has authority to manage content and maintain community guidelines.",
    icon: ShieldCheck,
    color: "bg-emerald-500/20 border-emerald-500/40 ",
  },
  {
    id: "contributor",
    title: "Top Contributor",
    description:
      "Awarded for significant contributions to the community project.",
    icon: Zap,
    color: "bg-purple-500/20 border-purple-500/40 ",
  },
];

const page = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className={`grid grid-cols-3 gap-4 mt-4`}>
        {/* Badges */}
        <div
          className={`col-span-1 bg-primary-foreground flex flex-col p-4 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-lg`}
        >
          <CardHeading>User Badges</CardHeading>
          <div className={`flex items-center gap-3`}>
            {badges.map((badge) => (
              <HoverCard key={badge.id}>
                <HoverCardTrigger>
                  <badge.icon
                    size={36}
                    strokeWidth={2}
                    className={`${badge.color} rounded-lg p-2 text-zinc-800 dark:text-zinc-300`}
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className={`font-bold mb-2`}>{badge.title}</h1>
                  <p className={`text-sm text-muted-foreground`}>
                    {badge.description}
                  </p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>

        {/* User Card */}
        <div
          className={`bg-primary-foreground flex p-4 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2`}
        >
          User Card
        </div>

        {/* Chart */}
        <div
          className={`bg-primary-foreground flex p-4 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2`}
        >
          Chart
        </div>

        {/* User Info */}
        <div
          className={`col-span-1 bg-primary-foreground flex flex-col p-4 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-lg`}
        >
          <div className={`flex justify-between items-center`}>
            <CardHeading className={`mb-0`}>User Information</CardHeading>
            <Button className={`cursor-pointer`}>Edit User</Button>
          </div>

          <div className={`p-2 pl-0 items-center gap-3 flex flex-col`}>
            <div className="space-y-4 mt-4 w-full">
              <div className="flex flex-col gap-2 mb-4">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <Separator />
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>john.doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>john.doe@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <Separator />

            <p className="text-sm self-start text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
