import React, { forwardRef } from 'react';
import { SKILLS } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-light">
    <span className="text-accent">&lt;</span>{children}<span className="text-accent">/&gt;</span>
  </h2>
);

const SkillsGrid: React.FC = () => (
    <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
        {SKILLS.map((skill, index) => (
            <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-accent/20 group"
                style={{ animation: `fade-in-up 0.5s ${index * 50}ms ease-out forwards`, opacity: 0 }}
            >
                <div className="w-12 h-12 text-medium group-hover:text-accent transition-colors duration-300">
                    {skill.icon}
                </div>
                <p className="mt-2 text-sm text-center text-medium group-hover:text-light transition-colors duration-300">
                    {skill.name}
                </p>
            </div>
        ))}
    </div>
);


const Skills = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="skills" ref={ref} className="py-20 bg-primary overflow-hidden">
      <SectionTitle>My Tech Stack</SectionTitle>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 w-full">
            <SkillsGrid />
        </div>
        <div className="md:w-1/2 text-lg text-medium space-y-4" style={{ animation: `fade-in-up 0.8s 200ms ease-out forwards`, opacity: 0 }}>
          <p>
            As a computer engineering student with a strong interest in cybersecurity and networking, I'm passionate about building secure and efficient systems.
          </p>
          <p>
            My experience ranges from hands-on network administration with tools like <span className="text-accent">SIEM</span> and <span className="text-accent">Nagios</span> for monitoring, to developing robust applications with <span className="text-accent">Python</span> and <span className="text-accent">C++</span>.
          </p>
          <p>
            I'm adept at using modern technologies for both offense and defense, from conducting vulnerability scans to deploying resilient infrastructure on the cloud.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Skills;
