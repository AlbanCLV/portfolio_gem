import React, { forwardRef, useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import { SKILLS } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-light">
    <span className="text-accent">&lt;</span>{children}<span className="text-accent">/&gt;</span>
  </h2>
);

const SkillsSphere: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        
        // Extract image sources from SKILLS to create HTML strings
        const texts = SKILLS.map(skill => {
            let iconHtml = skill.name;
            if (React.isValidElement(skill.icon)) {
                // Determine src. 
                // In our constants, icon is <img src={src} ... />
                const props = (skill.icon.props as any);
                const src = props.src;
                if (src) {
                    // Create an HTML string for the image
                    // We add a class for styling if needed, or inline styles
                    iconHtml = `<img src="${src}" alt="${skill.name}" style="width: 48px; height: 48px; min-width: 48px; min-height: 48px;" title="${skill.name}" />`;
                }
            }
            return iconHtml;
        });

        const options = {
            radius: 300,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            direction: 135,
            keep: true,
            useHTML: true
        };

        // TagCloud returns an instance, but we don't need to hold it unless we want to destroy/update
        // However, in strict mode or re-renders, we should clean up previous instance
        // TagCloud appends elements. So we should clear container before initializing if needed
        // container.innerHTML = ''; // This clears the container content
        
        // But TagCloud appends, so cleanup is crucial.
        // Sadly TagCloud instance.destroy() removes the listeners but might not remove the DOM elements fully cleanly or we just wipe the div.
        
        container.innerHTML = '';
        
        // @ts-ignore
        TagCloud(container, texts, options);

        return () => {
            // Cleanup: standard way is to clear the container or destroy the instance if we had access
            container.innerHTML = ''; 
        };
    }, []);

    return (
        <div className="flex justify-center items-center h-full min-h-[400px]">
            <div ref={containerRef} className="text-light relative" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}></div>
        </div>
    );
};

const Skills = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="skills" ref={ref} className="py-20 bg-primary overflow-hidden">
      <SectionTitle>My Tech Stack</SectionTitle>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 w-full flex justify-center">
             <SkillsSphere />
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
