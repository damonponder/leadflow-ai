"use client";

import { Lead } from "@/data/leads";

type LeadTableProps = {
  leads: Lead[];
  onContact: (id:number) => void;
};  

export default function LeadTable({ leads, onContact }: LeadTableProps) {

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
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t">
              <td className="px-4 py-3 text-sm text-gray-900">{lead.name}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{lead.status}</td>
              <td className="px-4 py-3 text-sm text-gray-600">
                <button 
                  onClick={() => onContact(lead.status === "Contacted" ? lead.status : lead.id)}>
                  Contact
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}