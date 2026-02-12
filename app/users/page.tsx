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
import { MoreHorizontal, UserPlus, Search, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    joined: "2024-01-12",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  {
    id: "2",
    name: "Sarah Smith",
    email: "sarah.s@tech.com",
    role: "Editor",
    status: "Active",
    joined: "2024-02-05",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "m.chen@dev.io",
    role: "Moderator",
    status: "Pending",
    joined: "2024-02-15",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    id: "4",
    name: "Aisha Hassan",
    email: "aisha.h@design.net",
    role: "User",
    status: "Active",
    joined: "2024-03-01",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
  },
  {
    id: "5",
    name: "Omar Khaled",
    email: "omar.k@startup.com",
    role: "User",
    status: "Inactive",
    joined: "2023-11-20",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
  },
  {
    id: "6",
    name: "Elena Rodriguez",
    email: "elena.ro@global.org",
    role: "Moderator",
    status: "Active",
    joined: "2024-01-30",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Header with Search and Add Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground text-sm">
            Manage your community members and their roles.
          </p>
        </div>
        <Button className="gap-2">
          <UserPlus size={18} /> Add New User
        </Button>
      </div>

      {/* Filters Bar */}
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

      {/* Table Section */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-200 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-primary-foreground overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-zinc-50 dark:bg-zinc-900/50">
              <TableRow>
                <TableHead className="w-75">User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Joined Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50"
                >
                  <TableCell className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{user.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {user.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`
      ${user.status === "Active" ? "bg-emerald-500/10 text-emerald-500" : ""}
      ${user.status === "Pending" ? "bg-amber-500/10 text-amber-500" : ""}
      ${user.status === "Inactive" ? "bg-red-500/10 text-red-500" : ""}
      border-none font-medium
    `}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="font-normal uppercase text-[10px] tracking-wider"
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.joined}
                  </TableCell>
                  <TableCell className="text-right">
                    {/* /\ */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>
                            <Link
                              href={`/users/${user.name.toLowerCase().replace(/\s+/g, ".")}`}
                            >
                              View Account
                            </Link>
                          </DropdownMenuLabel>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
