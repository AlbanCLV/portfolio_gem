
import React, { forwardRef, useState, useRef, useEffect, useMemo } from 'react';
import type { SectionId } from '../App';
import { SKILLS, PROJECTS, EXPERIENCES, EDUCATION } from '../constants';

type FileSystem = {
    [key: string]: {
        type: 'dir' | 'file';
        content?: React.ReactNode;
        children?: { [key: string]: string };
    };
};

const projectFileNames: { [key: string]: string } = {
  'Big Data Architecture for Hospitals': 'big_data',
  'EasySave Backup Application': 'easysave',
  'Operational Research Algorithms': 'operational_research',
  'Network Packet Capturer': 'packet_capture',
  'Network Administration Tools': 'admin_tools',
  'Portfolio Website Creation': 'portfolio',
  'IoT Plant Health Monitoring System': 'iot',
};

const InteractiveTerminal: React.FC = () => {
    const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; content: React.ReactNode; cwd: string }>>([
        { type: 'output', content: 'Welcome to my interactive portfolio terminal.', cwd: '~' },
        { type: 'output', content: <span>Type <code className="text-accent">help</code> to see the list of available commands.</span>, cwd: '~' },
    ]);
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [commandHistoryIndex, setCommandHistoryIndex] = useState(-1);
    const [cwd, setCwd] = useState('~');
    
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalBodyRef = useRef<HTMLDivElement>(null);

    const fileSystem: FileSystem = useMemo(() => ({
        '~': {
            type: 'dir',
            children: {
                'about': 'file',
                'skills': 'dir',
                'projects': 'dir',
                'experience': 'dir',
                'education': 'dir',
                'contact': 'file',
            },
        },
        '~/skills': {
            type: 'dir',
            children: SKILLS.reduce((acc, skill) => ({ ...acc, [skill.name]: 'file' }), {}),
        },
        '~/projects': {
            type: 'dir',
            children: PROJECTS.reduce((acc, project) => ({ ...acc, [projectFileNames[project.title]]: 'file' }), {}),
        },
        '~/experience': {
            type: 'dir',
            children: EXPERIENCES.reduce((acc, exp) => ({ ...acc, [`${exp.role.replace(/\s+/g, '_')}_at_${exp.company}`]: 'file' }), {}),
        },
        '~/education': {
            type: 'dir',
            children: EDUCATION.reduce((acc, edu) => ({ ...acc, [edu.school]: 'file' }), {}),
        },
    }), []);

    const contentMapping: { [key: string]: (name: string) => React.ReactNode } = {
        'about': () => (
             <p className="text-medium max-w-2xl">
                I'm a computer engineering student with a deep passion for cybersecurity, networking, and software development. I thrive on understanding complex systems and am actively seeking an international internship to apply my skills in a real-world setting.
            </p>
        ),
        'contact': () => (
            <div>
                <p>You can reach me at:</p>
                <p>Email: <a href="mailto:albancalvo@gmail.com" className="text-accent underline">albancalvo@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/alban-calvo" target="_blank" rel="noopener noreferrer" className="text-accent underline">linkedin.com/in/alban-calvo</a></p>
                <p>GitHub: <a href="https://github.com/albanclv" target="_blank" rel="noopener noreferrer" className="text-accent underline">github.com/albanclv</a></p>
            </div>
        ),
        'skills': (name) => {
            const skill = SKILLS.find(s => s.name === name);
            return skill ? <p>Skill: {skill.name}</p> : <p>Skill not found.</p>;
        },
        'projects': (name) => {
            const projectTitle = Object.keys(projectFileNames).find(key => projectFileNames[key] === name);
            const project = PROJECTS.find(p => p.title === projectTitle);
            return project ? (
                <div className="space-y-1">
                    <p><span className="text-accent font-bold">{project.title}</span></p>
                    <p className="text-sm text-medium pl-2">{project.description}</p>
                    <p className="text-xs pl-2">Tags: {project.tags.join(', ')}</p>
                    <p className="text-xs pl-2">Repo: <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-accent underline">{project.repoUrl}</a></p>
                </div>
            ) : <p>Project not found.</p>;
        },
         'experience': (name) => {
            const exp = EXPERIENCES.find(e => `${e.role.replace(/\s+/g, '_')}_at_${e.company}` === name);
            return exp ? (
                 <div className="space-y-1">
                    <p><span className="text-accent font-bold">{exp.role}</span> at {exp.company} ({exp.period})</p>
                    <p className="text-sm text-medium pl-2">{exp.description}</p>
                </div>
            ) : <p>Experience not found.</p>;
        },
        'education': (name) => {
            const edu = EDUCATION.find(e => e.school === name);
            return edu ? (
                 <div className="space-y-1">
                    <p><span className="text-accent font-bold">{edu.degree}</span></p>
                    <p className="text-medium pl-2">{edu.school} ({edu.period})</p>
                </div>
            ) : <p>Education not found.</p>;
        }
    };


    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [history]);

    const processCommand = (commandStr: string) => {
        const [command, ...args] = commandStr.trim().split(' ').filter(Boolean);
        let output: React.ReactNode = null;

        const newHistory = [...history, { type: 'input' as const, content: commandStr, cwd }];
        
        switch (command) {
            case 'help':
                output = (
                    <div className="space-y-1">
                        <p className="font-bold">Available Commands:</p>
                        <p><span className="text-accent w-24 inline-block">whoami</span> Displays my name.</p>
                        <p><span className="text-accent w-24 inline-block">ls</span> Lists content of the current directory.</p>
                        <p><span className="text-accent w-24 inline-block">cd [dir]</span> Changes directory. Use 'cd ..' to go back.</p>
                        <p><span className="text-accent w-24 inline-block">cat [file]</span> Shows content of a file.</p>
                        <p><span className="text-accent w-24 inline-block">contact</span> Shows my contact information.</p>
                        <p><span className="text-accent w-24 inline-block">clear</span> Clears the terminal history.</p>
                    </div>
                );
                break;
            case 'whoami':
                output = 'alban_calvo';
                break;
            case 'ls':
                const currentDir = fileSystem[cwd];
                if (currentDir && currentDir.type === 'dir' && currentDir.children) {
                    output = (
                        <div>
                            {Object.entries(currentDir.children).map(([name, type]) => (
                                <p key={name} className="flex font-mono">
                                    <span className="w-28 text-medium">{type === 'dir' ? 'drwxr-xr-x' : '-rw-r--r--'}</span>
                                    <span className={type === 'dir' ? 'text-blue-400' : 'text-light'}>{name}</span>
                                </p>
                            ))}
                        </div>
                    );
                }
                break;
            case 'cd':
                const targetDir = args[0];
                if (!targetDir) {
                    // cd with no args does nothing here
                } else if (targetDir === '..') {
                    if (cwd !== '~') {
                        const newCwd = cwd.substring(0, cwd.lastIndexOf('/'));
                        setCwd(newCwd || '~');
                    }
                } else if (targetDir) {
                    const newPath = `${cwd}/${targetDir}`.replace('//', '/');
                    if (fileSystem[newPath] && fileSystem[newPath].type === 'dir') {
                        setCwd(newPath);
                    } else {
                        output = `cd: no such file or directory: ${targetDir}`;
                    }
                }
                break;
            case 'cat':
                const fileName = args.join(' ');
                const parentDirKey = cwd.split('/')[1] || '';
                const fileInCwd = fileSystem[cwd]?.children?.[fileName] === 'file';

                if (fileSystem[cwd]?.children?.[fileName] === 'dir') {
                    output = `cat: ${fileName}: Is a directory`;
                } else if (fileInCwd) {
                    output = contentMapping[parentDirKey]?.(fileName);
                } else if (parentDirKey === '' && (fileName === 'about' || fileName === 'contact')) { // root files
                    output = contentMapping[fileName]?.(fileName);
                }
                 else {
                    output = `cat: ${fileName}: No such file or directory`;
                }
                break;
            case 'contact':
                output = contentMapping['contact']('contact');
                break;
            case 'clear':
                setHistory([]);
                return; // Exit early
            default:
                if (command) {
                    output = `Command not found: ${command}. Type 'help' for a list of commands.`;
                }
        }

        if (output) {
            newHistory.push({ type: 'output', content: output, cwd });
        }
        setHistory(newHistory);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const parts = input.split(' ');
            const currentPart = parts[parts.length - 1];

            // Command completion
            if (parts.length === 1) {
                const commands = ['help', 'whoami', 'ls', 'cd', 'cat', 'contact', 'clear'];
                const matches = commands.filter(cmd => cmd.startsWith(currentPart));
                
                if (matches.length === 1) {
                    setInput(matches[0] + ' ');
                } else if (matches.length > 1) {
                    const newHistory = [...history, { type: 'input' as const, content: input, cwd }];
                    newHistory.push({ type: 'output', content: matches.join('  '), cwd });
                    setHistory(newHistory);
                }
            } 
            // Argument completion
            else if (parts.length > 1) {
                const command = parts[0];
                const children = fileSystem[cwd]?.children || {};
                
                let candidates: string[] = [];
                if (command === 'cd') {
                    candidates = Object.entries(children)
                        .filter(([, type]) => type === 'dir')
                        .map(([name]) => name);
                } else if (command === 'cat') {
                    candidates = Object.entries(children)
                        .filter(([, type]) => type === 'file')
                        .map(([name]) => name);
                }
                
                const matches = candidates.filter(c => c.startsWith(currentPart));
                
                if (matches.length === 1) {
                    parts[parts.length - 1] = matches[0];
                    setInput(parts.join(' ') + ' ');
                } else if (matches.length > 1) {
                    const newHistory = [...history, { type: 'input' as const, content: input, cwd }];
                    newHistory.push({ type: 'output', content: matches.join('  '), cwd });
                    setHistory(newHistory);
                }
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const command = input.trim();
            if(command) {
                setCommandHistory([command, ...commandHistory]);
            }
            setCommandHistoryIndex(-1);
            processCommand(command);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistoryIndex < commandHistory.length - 1) {
                const newIndex = commandHistoryIndex + 1;
                setCommandHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
             e.preventDefault();
            if (commandHistoryIndex > 0) {
                const newIndex = commandHistoryIndex - 1;
                setCommandHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            } else if (commandHistoryIndex === 0) {
                 setCommandHistoryIndex(-1);
                 setInput("");
            }
        }
    };
    
    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div 
            className="bg-secondary rounded-lg shadow-2xl w-full h-[450px] font-mono text-sm flex flex-col animate-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
            onClick={handleTerminalClick}
        >
            <div className="bg-gray-700 rounded-t-lg p-2 flex items-center select-none">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-grow text-center text-xs text-gray-300">bash - alban_calvo</div>
            </div>
            <div ref={terminalBodyRef} className="p-4 flex-grow overflow-y-auto cursor-text">
                {history.map((line, index) => (
                    <div key={index} className="mb-2 whitespace-pre-wrap break-words">
                        {line.type === 'input' ? (
                            <div className="flex items-center">
                                <span className="text-blue-400">{line.cwd}</span>
                                <span className="text-accent mx-2">$</span>
                                <span>{line.content}</span>
                            </div>
                        ) : (
                            <div>{line.content}</div>
                        )}
                    </div>
                ))}
                <div className="flex items-center">
                    <span className="text-blue-400">{cwd}</span>
                    <span className="text-accent mx-2">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none text-light w-full focus:outline-none"
                        autoComplete="off"
                        autoCapitalize="off"
                        autoCorrect="off"
                    />
                     <span className="border-r-2 border-accent animate-blink-cursor h-4"></span>
                </div>
            </div>
        </div>
    );
};


interface HeroProps {
    onNavigate: (section: SectionId) => void;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ onNavigate }, ref) => {
  return (
    <section id="hero" ref={ref} className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 text-center lg:text-left py-20 px-4">
      <div className="lg:w-2/5 animate-fade-in-up">
          <img src="https://picsum.photos/seed/alban/200/200" alt="Alban Calvo" className="w-40 h-40 rounded-full mx-auto lg:mx-0 mb-6 border-4 border-accent shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-black text-light mb-2">
            Hi, I'm Alban Calvo
          </h1>
          <p className="text-xl md:text-2xl text-accent font-bold mb-6">
            Computer Engineering Student
          </p>
          <p className="max-w-xl mx-auto lg:mx-0 text-medium mb-8">
            Motivated and curious, with a strong interest in cybersecurity, networking, and software development. Passionate about learning and eager to gain hands-on experience.
          </p>
          <button onClick={() => onNavigate('contact')} className="bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
      </div>
      <div className="w-full lg:w-3/5 flex justify-center">
        <InteractiveTerminal />
      </div>
    </section>
  );
});

export default Hero;
