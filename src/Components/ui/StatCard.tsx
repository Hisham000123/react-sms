import type { LucideIcon } from "lucide-react";
import Card from "./Card";


interface StatCardProps {
  label: string;
  value: number | string;
  note: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

export default function StatCard({
  label,
  value,
  note,
  icon: Icon,
  iconColor,
  iconBg,
}: StatCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600">{label}</span>
        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${iconBg}`}>
          <Icon className={`h-4 w-4 ${iconColor}`} />
        </span>
      </div>
      <div className="mt-4 text-2xl font-semibold text-gray-900">{value}</div>
      <div className="mt-1 text-[11px] text-gray-500">{note}</div>
    </Card>
  );
}
