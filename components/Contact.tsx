
import React, { forwardRef } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-light">
        <span className="text-accent">&lt;</span>{children}<span className="text-accent">/&gt;</span>
    </h2>
);

const Contact = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section id="contact" ref={ref} className="py-20 text-center">
            <SectionTitle>Get In Touch</SectionTitle>
            <p className="max-w-2xl mx-auto text-lg text-medium mb-8">
                I'm currently looking for an international internship and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:albancalvo@gmail.com" className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 mb-12">
                Say Hello
            </a>
            <div className="flex justify-center space-x-6">
                <a href="https://github.com/albanclv" target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-300">
                    <GithubIcon className="w-8 h-8" />
                </a>
                <a href="https://linkedin.com/in/alban-calvo" target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-300">
                    <LinkedinIcon className="w-8 h-8" />
                </a>
                <a href="mailto:albancalvo@gmail.com" className="text-medium hover:text-accent transition-colors duration-300">
                    <MailIcon className="w-8 h-8" />
                </a>
            </div>
        </section>
    );
});

export default Contact;
