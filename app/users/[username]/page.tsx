"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CardHeading from "@/components/CardHeading";
import EditUser from "@/components/EditUser";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  BadgeCheck,
  Crown,
  LogOut,
  Settings,
  Share2,
  ShieldCheck,
  User,
  Zap,
} from "lucide-react";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

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

      <div className={`grid lg:grid-cols-3 gap-4 mt-4`}>
        {/* Badges */}
        <div
          className={`col-span-1 bg-primary-foreground flex flex-col p-4 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-lg`}
        >
          <CardHeading>User Badges</CardHeading>
          <div className={`flex items-center gap-3 `}>
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
        <div className="bg-primary-foreground border border-zinc-200 dark:border-zinc-800 shadow-md rounded-xl overflow-hidden lg:col-span-2 relative">
          <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 h-full">
            {/* Avatar */}
            <div className="h-20 w-20 rounded-2xl border-4 border-primary-foreground bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative overflow-hidden shadow-lg">
              <Image
                src="/user.jpg"
                alt="User Avatar"
                fill
                className="object-center"
                quality={100}
              />
            </div>

            {/* Basic Info */}
            <div className="flex-1 space-y-1 pb-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  Abdulrahman Saad
                </h2>
                <Badge
                  variant="secondary"
                  className="bg-blue-500/10 text-blue-500 border-none"
                >
                  Active Now
                </Badge>
              </div>
              <p className="text-muted-foreground flex items-center gap-1.5 text-sm">
                @Mnmlst • CTO at Texon
              </p>
            </div>

            {/* Actions & Status */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pb-1">
              <div className="flex items-center gap-2">
                {/* More Settings Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 border-zinc-200 dark:border-zinc-800"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>Account Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" /> View as Visitor
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-blue-500">
                      <Share2 className="mr-2 h-4 w-4" /> Share Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer text-destructive">
                      <LogOut className="mr-2 h-4 w-4" /> Logout from Device
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div
          className={`bg-primary-foreground flex flex-col p-4 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2`}
        >
          <CardHeading>User Activity</CardHeading>
          <Card className="w-full lg:w-4/5 mx-auto">
            <CardContent>
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Line
                    dataKey="desktop"
                    type="monotone"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="mobile"
                    type="monotone"
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        {/* User Info */}
        <div
          className={`col-span-1 bg-primary-foreground flex flex-col p-4 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-lg`}
        >
          <div className={`flex justify-between items-center`}>
            <CardHeading className={`mb-0`}>User Information</CardHeading>
            <EditUser />
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
                <span>abdulrahman.saad</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>abdulrahman.saad2303</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+20 111 678 912</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>Alexandria, EG</span>
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
