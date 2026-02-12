import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { users } from "@/helpers/Constant";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const UsersTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-200 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-primary-foreground overflow-hidden shadow-lg">
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
  );
};

export default UsersTable;
