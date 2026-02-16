
import React, { forwardRef } from 'react';
import type { Experience } from '../types';
import { EXPERIENCES } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-light">
        <span className="text-accent">&lt;</span>{children}<span className="text-accent">/&gt;</span>
    </h2>
);

const ExperienceItem: React.FC<{ experience: Experience }> = ({ experience }) => {
    return (
        <div className="relative pl-8 sm:pl-12 py-6 group">
             <div className="flex items-center mb-4">
                <div className="absolute w-3 h-3 rounded-full bg-secondary border-2 border-accent -left-1.5 transform group-hover:scale-125 transition-transform duration-300"></div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-light">{experience.role}</h3>
                    <p className="text-accent font-semibold">{experience.company} <span className="text-medium font-normal ml-2">| {experience.period}</span></p>
                </div>
            </div>
            <p className="text-medium mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
                {experience.technologies.map(tech => (
                     <span key={tech} className="bg-secondary text-light text-xs font-medium px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};


const Experience = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="experience" ref={ref} className="py-20">
      <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-secondary/50">
            {EXPERIENCES.map((exp, index) => (
                 <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <ExperienceItem experience={exp} />
                 </div>
            ))}
        </div>
    </section>
  );
});

export default Experience;
