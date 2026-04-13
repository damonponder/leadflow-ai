"use client";

import { useState } from "react";
import { initialLeads, Lead} from "@/data/leads";


export default function LeadTable() {
    const [leads, setLeads] = useState<Lead[]>(initialLeads);

  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
      <table className="min-w-full border-collapse bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t">
              <td className="px-4 py-3 text-sm text-gray-900">{lead.name}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}