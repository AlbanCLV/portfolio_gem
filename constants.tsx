import React from 'react';
import type { Skill, Project, Experience, Education } from './types';
// FIX: Added imports for icons and data types.
import { 
    AWSIcon, 
    BashIcon,
    CIcon,
    CppIcon,
    Css3Icon,
    DataStructuresIcon,
    DockerIcon,
    GitIcon,
    GitLabIcon,
    GrafanaIcon,
    JavaIcon,
    JavaScriptIcon,
    LinuxIcon,
    MongoDbIcon,
    MySqlIcon,
    NginxIcon,
    NodejsIcon,
    PostmanIcon,
    PythonIcon,
    ReactIcon,
    SystemDesignIcon,
    TypeScriptIcon
} from './components/Icons';

// FIX: Added SKILLS data export.
export const SKILLS: Skill[] = [
    { name: 'C', icon: <CIcon /> },
    { name: 'C++', icon: <CppIcon /> },
    { name: 'Java', icon: <JavaIcon /> },
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'JavaScript', icon: <JavaScriptIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Node.js', icon: <NodejsIcon /> },
    { name: 'CSS3', icon: <Css3Icon /> },
    { name: 'Linux', icon: <LinuxIcon /> },
    { name: 'Bash', icon: <BashIcon /> },
    { name: 'Git', icon: <GitIcon /> },
    { name: 'GitLab', icon: <GitLabIcon /> },
    { name: 'Docker', icon: <DockerIcon /> },
    { name: 'AWS', icon: <AWSIcon /> },
    { name: 'Nginx', icon: <NginxIcon /> },
    { name: 'MySQL', icon: <MySqlIcon /> },
    { name: 'MongoDB', icon: <MongoDbIcon /> },
    { name: 'Postman', icon: <PostmanIcon /> },
    { name: 'Grafana', icon: <GrafanaIcon /> },
    { name: 'System Design', icon: <SystemDesignIcon /> },
    { name: 'Data Structures', icon: <DataStructuresIcon /> },
];

// FIX: Added PROJECTS data export.
export const PROJECTS: Project[] = [
    {
        title: 'Big Data Architecture for Hospitals',
        description: 'Designed and simulated a scalable big data architecture for a hospital system using Hadoop, Spark, and Kafka to process and analyze patient data in real-time.',
        tags: ['Big Data', 'Hadoop', 'Spark', 'Kafka', 'System Design'],
        imageUrl: 'https://picsum.photos/seed/bigdata/400/300',
        repoUrl: 'https://github.com/albanclv/big-data-hospital',
    },
    {
        title: 'EasySave Backup Application',
        description: 'Developed a C++ application for creating differential or complete backups of folders, with real-time monitoring and logging capabilities. Includes a user-friendly GUI.',
        tags: ['C++', 'Software Development', 'System Programming'],
        imageUrl: 'https://picsum.photos/seed/easysave/400/300',
        repoUrl: 'https://github.com/albanclv/easysave',
    },
    {
        title: 'Operational Research Algorithms',
        description: 'Implemented classic operational research algorithms in Python, including the simplex method and graph theory problems like Dijkstra and Ford-Fulkerson.',
        tags: ['Python', 'Algorithms', 'Data Structures', 'Operational Research'],
        imageUrl: 'https://picsum.photos/seed/or/400/300',
        repoUrl: 'https://github.com/albanclv/operational-research',
    },
    {
        title: 'Network Packet Capturer',
        description: 'A network packet capturing tool built in C that analyzes network traffic, filters packets based on protocols (TCP, UDP, ICMP), and displays detailed information.',
        tags: ['C', 'Networking', 'Cybersecurity'],
        imageUrl: 'https://picsum.photos/seed/packet/400/300',
        repoUrl: 'https://github.com/albanclv/packet-capturer',
    },
    {
        title: 'Network Administration Tools',
        description: 'A suite of network administration tools in Bash for automating tasks such as user management, service monitoring, and security audits on Linux systems.',
        tags: ['Bash', 'Linux', 'Networking', 'Automation'],
        imageUrl: 'https://picsum.photos/seed/admintools/400/300',
        repoUrl: 'https://github.com/albanclv/network-admin-tools',
    },
    {
        title: 'Portfolio Website Creation',
        description: 'This very portfolio! A fully responsive website built with React, TypeScript, and Tailwind CSS, featuring an interactive terminal.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Frontend'],
        imageUrl: 'https://picsum.photos/seed/portfolio/400/300',
        liveUrl: '#',
        repoUrl: 'https://github.com/albanclv/portfolio',
    },
     {
        title: 'IoT Plant Health Monitoring System',
        description: 'Developed an IoT system using Raspberry Pi and sensors to monitor plant health (moisture, light, temperature) and send real-time alerts.',
        tags: ['IoT', 'Python', 'Raspberry Pi', 'Hardware'],
        imageUrl: 'https://picsum.photos/seed/iot/400/300',
        repoUrl: 'https://github.com/albanclv/iot-plant-monitor',
    },
];

// FIX: Added EXPERIENCES data export.
export const EXPERIENCES: Experience[] = [
    {
        role: 'Cybersecurity Intern',
        company: 'SecureTech',
        period: 'Summer 2023',
        description: 'Assisted the security team with vulnerability assessments, penetration testing, and monitoring of network traffic using SIEM tools. Contributed to security incident reports and documentation.',
        technologies: ['Nmap', 'Wireshark', 'Metasploit', 'SIEM', 'Linux'],
    },
    {
        role: 'IT Support Assistant',
        company: 'University of Technology',
        period: '2022 - Present',
        description: 'Provided technical support to students and staff, managed user accounts, and assisted with network troubleshooting and maintenance of computer labs.',
        technologies: ['Active Directory', 'Linux', 'Windows Server', 'Networking'],
    },
];

// FIX: Added EDUCATION data export.
export const EDUCATION: Education[] = [
    {
        degree: 'Master in Computer Engineering',
        school: 'EPITA',
        period: '2022 - 2025',
        location: 'Paris, France',
    },
    {
        degree: 'Preparatory Classes for Engineering Schools',
        school: 'Lycée Janson de Sailly',
        period: '2020 - 2022',
        location: 'Paris, France',
    },
];
