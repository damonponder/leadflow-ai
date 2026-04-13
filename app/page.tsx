import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>LeadFlow AI</h1>
      <p>Welcome to LeadFlow AI</p>

      <div style={{ marginTop: "16px" }}>
        <Link href="/leads">Go to Leads Page</Link>
      </div>
    </main>
  );
}