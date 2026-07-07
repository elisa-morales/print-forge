import { PillProps } from "@/app/types";

export default function Pill({ children, className = "" }: PillProps) {
  return <span className={`inline-block bg-transparent border border-border rounded-sm px-3 py-1 text-xs uppercase tracking-wider text-foreground ${className}`}>{children}</span>;
}
