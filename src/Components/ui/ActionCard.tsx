import type { LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconColor: string;
  onClick: () => void;
}

export default function ActionCard({
  title,
  desc,
  icon: Icon,
  iconColor,
  onClick,
}: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      className="text-left rounded-xl border border-gray-200 px-4 py-4 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <Icon className={`h-5 w-5 ${iconColor}`} />
      <div className="mt-2 text-sm font-medium text-gray-900">{title}</div>
      <div className="text-xs text-gray-500">{desc}</div>
    </button>
  );
}
