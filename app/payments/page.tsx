import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { payments } from "@/helpers/Constant";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Payments & Billing
        </h1>
        <p className="text-muted-foreground text-sm">
          Monitor your revenue, manage subscriptions, and view transaction
          history.
        </p>
      </div>

      <Table className={`mt-8`}>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">User</TableHead>
            <TableHead className="w-2/4">Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.name} className="font-semibold">
              <TableCell className="font-medium">{payment.name}</TableCell>
              <TableCell>{payment.email}</TableCell>
              <TableCell>
                <Badge
                  className={`font-medium text-background ${
                    payment.status === "Pending"
                      ? "bg-amber-500/20 text-amber-500"
                      : payment.status === "Failed"
                        ? "bg-red-500/20 text-red-500"
                        : "bg-emerald-500/20 text-emerald-500"
                  }`}
                >
                  {payment.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right ">${payment.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
