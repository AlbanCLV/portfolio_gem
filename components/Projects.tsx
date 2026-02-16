
import React, { useState, useMemo, forwardRef } from 'react';
import type { Project } from '../types';
import { PROJECTS } from '../constants';
import { GithubIcon, ExternalLinkIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-light">
        <span className="text-accent">&lt;</span>{children}<span className="text-accent">/&gt;</span>
    </h2>
);

const ProjectCard: React.FC<{ project: Project; onTagClick: (tag: string) => void }> = ({ project, onTagClick }) => {
    // This function will handle opening links in a new tab, bypassing potential iframe restrictions.
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="bg-secondary rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 transform hover:scale-105">
            <div className="relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
                <p className="text-medium text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            onClick={() => onTagClick(tag)}
                            className="bg-gray-700 text-accent text-xs font-semibold px-2.5 py-1 rounded-full cursor-pointer hover:bg-accent hover:text-primary transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-end space-x-4 mt-4">
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            onClick={(e) => handleLinkClick(e, project.repoUrl)}
                            className="text-medium hover:text-accent transition-colors duration-300"
                            aria-label={`View ${project.title} on GitHub`}
                        >
                           <GithubIcon className="w-6 h-6" />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            onClick={(e) => handleLinkClick(e, project.liveUrl!)}
                            className="text-medium hover:text-accent transition-colors duration-300"
                            aria-label={`View live version of ${project.title}`}
                        >
                           <ExternalLinkIcon className="w-6 h-6" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};


const Projects = forwardRef<HTMLElement>((_, ref) => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        PROJECTS.forEach(p => p.tags.forEach(t => tags.add(t)));
        return ['All', ...Array.from(tags)];
    }, []);

    const filteredProjects = selectedTag && selectedTag !== 'All'
        ? PROJECTS.filter(project => project.tags.includes(selectedTag))
        : PROJECTS;
    
    const handleTagClick = (tag: string) => {
        if (tag === 'All') {
            setSelectedTag(null);
        } else {
            setSelectedTag(tag);
        }
    }

  return (
    <section id="projects" ref={ref} className="py-20">
      <SectionTitle>Projects</SectionTitle>
      
      <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    (selectedTag === tag || (tag === 'All' && !selectedTag))
                        ? 'bg-accent text-primary'
                        : 'bg-secondary text-medium hover:bg-gray-700'
                }`}
              >
                  {tag}
              </button>
          ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
            <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} onTagClick={handleTagClick} />
            </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
