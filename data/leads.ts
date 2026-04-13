export type Lead = {
  id: number;
  name: string;
  status: string;
};

export const initialLeads: Lead[] = [
  { id: 1, name: "John Smith", status: "New" },
  { id: 2, name: "Sarah Johnson", status: "Contacted" },
  { id: 3, name: "Mike Davis", status: "Booked" },
];