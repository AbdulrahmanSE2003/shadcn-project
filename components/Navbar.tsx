"use client";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";
import { SidebarTrigger } from "./ui/sidebar";

export const Navbar = () => {
  return (
    <nav className={`flex justify-between items-center px-4 py-1.5 border-b`}>
      {/* Left */}
      <SidebarTrigger />
      {/* right */}
      <div className={`flex items-center gap-4`}>
        <Link href={"/"}>Dashboard</Link>

        {/* Theme Menu */}
        <ThemeToggle rounded />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className={`cursor-pointer`}>
              <AvatarImage src="/user.jpg" className={`object-center`} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>
                <User className={`h-[1.2rem] w-[1.2rem] mr-2`} />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className={`h-[1.2rem] w-[1.2rem] mr-2`} />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut className={`h-[1.2rem] w-[1.2rem] mr-2`} />
                LogOut
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
