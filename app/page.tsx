// Operation First Deploy — Next.js Midterm Assignment 2
// Developer: Christian G. Babatuan | BSIT-3, Section 2
//
// This is a Server Component (no "use client"), so Next.js renders it to
// HTML on the server. That is why the text below is already in the page source.

const developer = "Christian G. Babatuan";

const missionBriefing = [
  { label: "OPERATION", value: "FIRST DEPLOY" },
  { label: "FRAMEWORK", value: "NEXT.JS (APP ROUTER)" },
  { label: "LANGUAGE", value: "TYPESCRIPT" },
  { label: "CLASSIFICATION", value: "MIDTERM // ASSIGNMENT 2" },
  { label: "UNIT", value: "BSIT-3 // SECTION 2" },
];

const objectives = [
  { id: "OBJ-01", text: "Install Next.js and establish a base camp", done: true },
  { id: "OBJ-02", text: "Render the first page on the server", done: true },
  { id: "OBJ-03", text: "Verify the name inside View Page Source", done: true },
  { id: "OBJ-04", text: "Push to GitHub with a clear commit", done: true },
  { id: "OBJ-05", text: "Report findings to the commander (LMS)", done: false },
];

export default function Home() {
  return (
    <main className="field">
      <header className="banner">
        <div className="insignia" aria-hidden="true">
          ★
        </div>
        <p className="tag">TOP SECRET // FOR INSTRUCTOR EYES ONLY</p>
        <h1>Operation First Deploy</h1>
        <p className="sub">Next.js Field Report</p>
      </header>

      <section className="card operator">
        <h2>Operator Identification</h2>
        <p className="rank">DEVELOPER</p>
        <p className="name">{developer}</p>
        <p className="unit">BSIT-3 · Section 2</p>
      </section>

      <section className="card">
        <h2>Mission Briefing</h2>
        <dl className="grid">
          {missionBriefing.map((item) => (
            <div key={item.label} className="row">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="card">
        <h2>Mission Objectives</h2>
        <ul className="objectives">
          {objectives.map((o) => (
            <li key={o.id} className={o.done ? "done" : "pending"}>
              <span className="code">{o.id}</span>
              <span className="text">{o.text}</span>
              <span className="status">{o.done ? "COMPLETE" : "IN PROGRESS"}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card intel">
        <h2>Intel: Why Server Rendering Matters</h2>
        <p>
          This briefing is already inside the HTML sent by the server. Soldiers
          on the ground (search engines and slow phones) can read it without
          waiting for JavaScript to deploy.
        </p>
      </section>

      <footer className="foot">
        <p>
          Filed by {developer} · BSIT-3 Section 2 · Mission status: ACTIVE
        </p>
      </footer>
    </main>
  );
}
