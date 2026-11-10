import type { TabId } from "../Types";

interface TabsProps {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

const TABS: { id: TabId; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "students", label: "Students" },
  { id: "add", label: "Add Student" },
];

export default function Tabs({ activeTab, onChange }: TabsProps) {
  return (
    <nav className="mb-6 inline-flex rounded-full bg-gray-100/70 p-1">
      {TABS.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`rounded-full px-6 py-1.5 text-xs transition-colors ${
            activeTab === t.id
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}
