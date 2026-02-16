
import React from 'react';
import type { Skill, Project, Experience, Education } from './types';
import { 
  TypescriptIcon, ReactIcon, NodejsIcon, PythonIcon, DockerIcon, AWSIcon, GitIcon, FigmaIcon, TailwindIcon,
  JavaScriptIcon, JavaIcon, CppIcon, SqlIcon, Html5Icon, Css3Icon, VuejsIcon, ReduxIcon, ExpressIcon,
  MongoDbIcon, PostgreSqlIcon, GraphqlIcon, KubernetesIcon, TerraformIcon, GcpIcon, JenkinsIcon, PostmanIcon
} from './components/Icons';

export const SKILLS: Skill[] = [
  { name: 'TypeScript', icon: <TypescriptIcon /> },
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'Java', icon: <JavaIcon /> },
  { name: 'C++', icon: <CppIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Node.js', icon: <NodejsIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'Kubernetes', icon: <KubernetesIcon /> },
  { name: 'AWS', icon: <AWSIcon /> },
  { name: 'GCP', icon: <GcpIcon /> },
  { name: 'Git', icon: <GitIcon /> },
  { name: 'PostgreSQL', icon: <PostgreSqlIcon /> },
  { name: 'Terraform', icon: <TerraformIcon /> },
  { name: 'Jenkins', icon: <JenkinsIcon /> },
  { name: 'Postman', icon: <PostmanIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'HTML5', icon: <Html5Icon /> },
  { name: 'CSS3', icon: <Css3Icon /> },
  { name: 'SQL', icon: <SqlIcon /> },
];

export const PROJECTS: Project[] = [
  {
    title: 'Big Data Architecture for Hospitals',
    description: 'Designed a comprehensive Big Data architecture to efficiently process and analyze hospital data, improving data accessibility and insights for healthcare management.',
    tags: ['Big Data', 'Python', 'Data Architecture', 'System Design'],
    imageUrl: 'https://picsum.photos/seed/bigdata/800/600',
    repoUrl: 'https://github.com/AlbanCLV/BigData',
  },
  {
    title: 'EasySave Backup Application',
    description: 'A robust backup application developed in C# and WPF to securely save and manage files and directories with logging and encryption features.',
    tags: ['C#', 'WPF', '.NET', 'Backup', 'Security'],
    imageUrl: 'https://picsum.photos/seed/easysave/800/600',
    repoUrl: 'https://github.com/AlbanCLV/EasySave',
  },
  {
    title: 'Operational Research Algorithms',
    description: 'Developed and implemented advanced algorithms in C++ to solve complex operational research problems, with a focus on performance optimization and efficiency.',
    tags: ['Algorithms', 'C++', 'Operational Research'],
    imageUrl: 'https://picsum.photos/seed/algorithms/800/600',
    repoUrl: 'https://github.com/AlbanCLV/Recherche-Operationnelle',
  },
  {
    title: 'Network Packet Capturer',
    description: 'A tool developed in C to capture and analyze network packets, providing insights into network traffic for security and monitoring purposes.',
    tags: ['C', 'Networking', 'Security', 'Packet Analysis'],
    imageUrl: 'https://picsum.photos/seed/packet/800/600',
    repoUrl: 'https://github.com/AlbanCLV/packet_capture',
  },
  {
    title: 'Network Administration Tools',
    description: 'A collection of command-line tools developed in Python for network administration, including port scanning and remote server management.',
    tags: ['Python', 'Networking', 'CLI', 'Automation'],
    imageUrl: 'https://picsum.photos/seed/nettools/800/600',
    repoUrl: 'https://github.com/AlbanCLV/net_tools',
  },
  {
    title: 'Portfolio Website Creation',
    description: 'A personal portfolio website built from scratch to showcase skills and projects, focusing on responsive design and modern web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    imageUrl: 'https://picsum.photos/seed/website/800/600',
    repoUrl: 'https://github.com/AlbanCLV/website-creation',
  },
  {
    title: 'IoT Plant Health Monitoring System',
    description: 'A complete IoT solution to monitor plant health using sensors and radio communication protocols. The system securely transmits data to a central dashboard for real-time visualization and analysis.',
    tags: ['IoT', 'Python', 'Dashboards', 'Radio Communication', 'Security', 'Sensors'],
    imageUrl: 'https://picsum.photos/seed/iot/800/600',
    repoUrl: 'https://github.com/InToXy/IOT_project',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'CISO Intern',
    company: 'Visiativ',
    period: '10/2024 - Now',
    description: 'Driving vulnerability scans for web applications and Active Directory. Training developers on OWASP top 10 best practices. Designing and executing phishing campaigns to raise security awareness and monitoring the external attack surface using EASM.',
    technologies: ['Vulnerability Scanning', 'Active Directory', 'OWASP Top 10', 'EASM', 'Security Awareness'],
  },
  {
    role: 'Network and Security Administrator',
    company: 'Vizyon',
    period: '09/2023 - 07/2024',
    description: 'Managed and secured networks for medical offices, increasing data protection with VPNs and firewalls. Developed Python tools for remote firewall management. Reinforced monitoring and logging by implementing a SIEM and Nagios server.',
    technologies: ['Network Management', 'VPN', 'Firewalls', 'Python', 'SIEM', 'Nagios'],
  },
];

export const EDUCATION: Education[] = [
    {
        degree: 'Engineer diploma: Computer Science',
        school: 'CESI',
        period: '09/2024 - 07/2027',
        location: 'Lyon'
    },
    {
        degree: 'Bachelor: Network and Telecommunications',
        school: 'IUT1',
        period: '09/2021 - 07/2024',
        location: 'Grenoble'
    },
    {
        degree: 'Baccalaureate: Computer Networks and Communicating Systems',
        school: 'High-School Saint-Vincent',
        period: '09/2018 - 07/2021',
        location: 'Collonges-sous-Salève'
    }
];
