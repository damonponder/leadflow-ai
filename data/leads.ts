export type Lead = {
  id: number;
  name: string;
  phone: string;
  status: string;
};

export const initialLeads: Lead[] = [
  { id: 1, name: "John Smith", phone: "555-111-2222", status: "New" },
  { id: 2, name: "Sarah Jones", phone: "555-333-4444", status: "Contacted" },
  { id: 3, name: "Mike Brown", phone: "555-555-6666", status: "Booked" }
];