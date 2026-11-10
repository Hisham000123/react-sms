import { Trash2 } from "lucide-react";
import Card from "../Components/ui/Card";
import type { Student } from "../Types";

interface StudentListProps {
  students: Student[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function StudentList({ students, onToggle, onDelete }: StudentListProps) {
  return (
    <Card className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-gray-200 text-xs text-gray-500">
          <tr>
            <th className="px-5 py-3 font-medium">Name</th>
            <th className="px-5 py-3 font-medium">Email</th>
            <th className="px-5 py-3 font-medium">Course</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3" />
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-b border-gray-100 last:border-0">
              <td className="px-5 py-3 font-medium text-gray-900">{s.name}</td>
              <td className="px-5 py-3 text-gray-600">{s.email}</td>
              <td className="px-5 py-3 text-gray-600">{s.course}</td>
              <td className="px-5 py-3">
                <button
                  onClick={() => onToggle(s.id)}
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    s.active ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
                  }`}
                >
                  {s.active ? "Active" : "Inactive"}
                </button>
              </td>
              <td className="px-5 py-3 text-right">
                <button
                  onClick={() => onDelete(s.id)}
                  aria-label={`Delete ${s.name}`}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan={5} className="px-5 py-8 text-center text-gray-500">
                No students yet. Use "Add Student" to register one.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
