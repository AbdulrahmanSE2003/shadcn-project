import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type headingProps = {
  children: ReactNode;
  className?: string;
};

const CardHeading = ({ children, className }: headingProps) => {
  return (
    <h1 className={cn("text-lg font-medium mb-6", className)}>{children}</h1>
  );
};

export default CardHeading;
