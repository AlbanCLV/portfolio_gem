
import React, { forwardRef } from 'react';
import type { Education } from '../types';
import { EDUCATION } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-light">
        <span className="text-accent">&lt;</span>{children}<span className="text-accent">/&gt;</span>
    </h2>
);

const EducationItem: React.FC<{ education: Education }> = ({ education }) => {
    return (
        <div className="relative pl-8 sm:pl-12 py-6 group">
             <div className="flex items-center mb-4">
                <div className="absolute w-3 h-3 rounded-full bg-secondary border-2 border-accent -left-1.5 transform group-hover:scale-125 transition-transform duration-300"></div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-light">{education.degree}</h3>
                    <p className="text-accent font-semibold">{education.school} <span className="text-medium font-normal ml-2">| {education.location}</span></p>
                    <p className="text-medium text-sm">{education.period}</p>
                </div>
            </div>
        </div>
    );
};

const Education = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="education" ref={ref} className="py-20">
      <SectionTitle>Education</SectionTitle>
        <div className="relative border-l-2 border-secondary/50 max-w-4xl mx-auto">
            {EDUCATION.map((edu, index) => (
                 <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <EducationItem education={edu} />
                 </div>
            ))}
        </div>
    </section>
  );
});

export default Education;
