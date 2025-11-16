/**
 * Skills component
 * Displays technical skills, tools, and technologies used across projects.
 */

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'CSS Modules'] },
  { category: 'Backend', items: ['Node.js', 'Express'] },
  { category: 'Tools', items: ['ESLint', 'Prettier', 'Git', 'GitHub'] },
  { category: 'Testing', items: ['Vitest', 'React Testing Library'] },
  { category: 'Deployment', items: ['GitHub Pages', 'Vercel'] },
];

function Skills() {
  return (
    <section className="skillsSection">
      <h2>Skills & Tools</h2>
      <div className="skillsGrid">
        {skills.map(skill => (
          <div key={skill.category} className="skillCard">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;