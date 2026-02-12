import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

import Filters from "./Filters";
import UsersTable from "./UsersTable";

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
      <Filters />

      {/* Table Section */}
      <UsersTable />
    </div>
  );
}
