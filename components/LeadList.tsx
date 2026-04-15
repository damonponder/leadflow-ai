"use client";

import { initialLeads, Lead } from "../data/leads";
import LeadTable from "./LeadTable";
import { useState } from "react";


export default function LeadList() {
        const [leads, setLeads] = useState<Lead[]>(initialLeads);

function handleContact(id: number) {
    // Logic to contact the lead goes here
    setLeads(
        leads.map((lead) => 
        lead.id === id 
        ? { ...lead, status: "Contacted" } 
        : lead
    )
)
}
    
  return <LeadTable leads={leads} onContact={handleContact} />;
}