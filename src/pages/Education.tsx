// TypeScript configuration for the application
// Enables strict type checking and includes Vitest types for testing
import { useState } from 'react';

type EducationCardProps = {
  title: string;
  school: string;
  status: string;
  grade: string;
};

function EducationCard({ title, school, status, grade }: EducationCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`educationCard ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
      <h3>{title}</h3>
      {expanded && (
        <div className="educationDetails">
          <p><strong>School:</strong> {school}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Grade:</strong> {grade}</p>
        </div>
      )}
    </div>
  );
}

function Education() {
  return (
    <section className="educationSection">
      <h1>My Academic Background</h1>
      <div className="educationGrid">
        <EducationCard title="Class X" school="De Paul Public School, Thodupuzha" status="Completed" grade="98%" />
        <EducationCard title="Class XII" school="Vimala Public School, Thodupuzha" status="Completed" grade="78%" />
        <EducationCard title="B.Tech in Computer Science" school="Viswajyothi College of Engineering and Technology, Muvattupuzha" status="Completed" grade="86%" />
      </div>
    </section>
  );
}

export default Education;