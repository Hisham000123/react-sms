import { GraduationCap, Users, TrendingUp, UserX, BookOpen } from "lucide-react";
import Card from "../Components/ui/Card";
import StatCard from "../Components/ui/StatCard";
import ActionCard from "../Components/ui/ActionCard";
import { COURSES } from "../Data/initialData";
import type { Student, TabId } from "../Types";

interface DashboardProps {
  students: Student[];
  setTab: (tab: TabId) => void;
}

export default function Dashboard({ students, setTab }: DashboardProps) {
  const total = students.length;
  const active = students.filter((s) => s.active).length;
  const inactive = total - active;
  const pct = total ? Math.round((active / total) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-6 text-white">
        <div className="flex items-center gap-4">
          <GraduationCap className="h-7 w-7" />
          <div>
            <h2 className="text-xl font-semibold">Student Management System</h2>
            <p className="text-sm text-blue-100">Welcome back! Here's your dashboard overview.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Students" value={total} note="Registered students" icon={Users} iconColor="text-blue-600" iconBg="bg-blue-50" />
        <StatCard label="Active Students" value={active} note={`${pct}% of total`} icon={TrendingUp} iconColor="text-green-600" iconBg="bg-green-50" />
        <StatCard label="Inactive Students" value={inactive} note="Need attention" icon={UserX} iconColor="text-red-500" iconBg="bg-red-50" />
        <StatCard label="Total Courses" value={COURSES.length} note="Available courses" icon={BookOpen} iconColor="text-purple-600" iconBg="bg-purple-50" />
      </div>

      <Card className="p-6">
        <h3 className="text-sm font-semibold text-gray-900">Quick Actions</h3>
        <p className="mb-4 text-xs text-gray-500">Common tasks you might want to perform</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ActionCard title="View All Students" desc="Browse and manage student records" icon={Users} iconColor="text-blue-600" onClick={() => setTab("students")} />
          <ActionCard title="Add New Student" desc="Register a new student" icon={GraduationCap} iconColor="text-green-600" onClick={() => setTab("add")} />
          <ActionCard title="Manage Courses" desc="View and edit course information" icon={BookOpen} iconColor="text-purple-600" onClick={() => setTab("students")} />
        </div>
      </Card>
    </div>
  );
}
