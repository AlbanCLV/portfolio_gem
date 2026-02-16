
import React, { forwardRef } from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-light">
    <span className="text-accent">&lt;</span>{children}<span className="text-accent">/&gt;</span>
  </h2>
);

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="about" ref={ref} className="py-20">
      <SectionTitle>About Me</SectionTitle>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <img src="https://picsum.photos/seed/about_alban/600/400" alt="About Alban Calvo" className="rounded-lg shadow-2xl w-full" />
        </div>
        <div className="md:w-1/2 text-lg text-medium space-y-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <p>
            Hello! I'm Alban, a second-year computer engineering student with a deep-seated passion for cybersecurity, networking, and software development. I'm driven by a curiosity to understand how systems work and how to protect them.
          </p>
          <p>
            I am passionate about learning and eager to gain more hands-on experience. I am currently looking for an international internship to broaden my horizons and contribute to an innovative team where I can apply my skills in a real-world setting.
          </p>
          <p>
            Outside of technology, I enjoy the discipline and focus of Judo and the quiet introspection of reading books. I believe in continuous self-improvement, both professionally and personally.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
