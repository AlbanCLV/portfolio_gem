import React from 'react';
import type { Skill, Project, Experience, Education } from './types';

// Skill Icons
import awsIcon from './assets/skills/aws-svgrepo-com.svg';
import azureIcon from './assets/skills/azure-active-directory-aad-svgrepo-com.svg';
import bashIcon from './assets/skills/bash-svgrepo-com.svg';
import burpsuiteIcon from './assets/skills/burpsuite-security-software-svgrepo-com.svg';
import cppIcon from './assets/skills/cpp-svgrepo-com.svg';
import cssIcon from './assets/skills/css-3-svgrepo-com.svg';
import dockerIcon from './assets/skills/docker-svgrepo-com.svg';
import gitIcon from './assets/skills/git-svgrepo-com.svg';
import gitlabIcon from './assets/skills/gitlab-svgrepo-com.svg';
import grafanaIcon from './assets/skills/grafana-svgrepo-com.svg';
import htmlIcon from './assets/skills/html-5-svgrepo-com.svg';
import influxdbIcon from './assets/skills/influxdb-svgrepo-com.svg';
import javaIcon from './assets/skills/java-svgrepo-com.svg';
import jsIcon from './assets/skills/js-svgrepo-com.svg';
import linuxIcon from './assets/skills/linux-svgrepo-com.svg';
import mongoIcon from './assets/skills/mongodb-logo-svgrepo-com.svg';
import mysqlIcon from './assets/skills/mysql-logo-svgrepo-com.svg';
import nginxIcon from './assets/skills/nginx-logo-svgrepo-com.svg';
import nodeIcon from './assets/skills/nodejs-icon-svgrepo-com.svg';
import opensslIcon from './assets/skills/openssl-svgrepo-com.svg';
import postgresqlIcon from './assets/skills/postgresql-svgrepo-com.svg';
import postmanIcon from './assets/skills/postman-icon-svgrepo-com.svg';
import powershellIcon from './assets/skills/powershell-svgrepo-com.svg';
import pythonIcon from './assets/skills/python-svgrepo-com.svg';
import reactIcon from './assets/skills/react-svgrepo-com.svg';
import restApiIcon from './assets/skills/rest-api-svgrepo-com.svg';
import sqlAzureIcon from './assets/skills/sql-database-sql-azure-svgrepo-com.svg';
import swaggerIcon from './assets/skills/swagger-svgrepo-com.svg';
import ubuntuIcon from './assets/skills/ubuntu-svgrepo-com.svg';
import vscodeIcon from './assets/skills/vs-code-svgrepo-com.svg';
import windowsIcon from './assets/skills/windows-applications-svgrepo-com.svg';

export const SKILLS: Skill[] = [
    { name: 'C++', icon: <img src={cppIcon} alt="C++" /> },
    { name: 'Java', icon: <img src={javaIcon} alt="Java" /> },
    { name: 'Python', icon: <img src={pythonIcon} alt="Python" /> },
    { name: 'JavaScript', icon: <img src={jsIcon} alt="JavaScript" /> },
    { name: 'React', icon: <img src={reactIcon} alt="React" /> },
    { name: 'Node.js', icon: <img src={nodeIcon} alt="Node.js" /> },
    { name: 'HTML5', icon: <img src={htmlIcon} alt="HTML5" /> },
    { name: 'CSS3', icon: <img src={cssIcon} alt="CSS3" /> },
    { name: 'Linux', icon: <img src={linuxIcon} alt="Linux" /> },
    { name: 'Ubuntu', icon: <img src={ubuntuIcon} alt="Ubuntu" /> },
    { name: 'Bash', icon: <img src={bashIcon} alt="Bash" /> },
    { name: 'PowerShell', icon: <img src={powershellIcon} alt="PowerShell" /> },
    { name: 'Windows', icon: <img src={windowsIcon} alt="Windows" /> },
    { name: 'Git', icon: <img src={gitIcon} alt="Git" /> },
    { name: 'GitLab', icon: <img src={gitlabIcon} alt="GitLab" /> },
    { name: 'Docker', icon: <img src={dockerIcon} alt="Docker" /> },
    { name: 'AWS', icon: <img src={awsIcon} alt="AWS" /> },
    { name: 'Azure', icon: <img src={azureIcon} alt="Azure" /> },
    { name: 'Nginx', icon: <img src={nginxIcon} alt="Nginx" /> },
    { name: 'MySQL', icon: <img src={mysqlIcon} alt="MySQL" /> },
    { name: 'PostgreSQL', icon: <img src={postgresqlIcon} alt="PostgreSQL" /> },
    { name: 'SQL Azure', icon: <img src={sqlAzureIcon} alt="SQL Azure" /> },
    { name: 'MongoDB', icon: <img src={mongoIcon} alt="MongoDB" /> },
    { name: 'InfluxDB', icon: <img src={influxdbIcon} alt="InfluxDB" /> },
    { name: 'Postman', icon: <img src={postmanIcon} alt="Postman" /> },
    { name: 'Swagger', icon: <img src={swaggerIcon} alt="Swagger" /> },
    { name: 'REST API', icon: <img src={restApiIcon} alt="REST API" /> },
    { name: 'Grafana', icon: <img src={grafanaIcon} alt="Grafana" /> },
    { name: 'Burp Suite', icon: <img src={burpsuiteIcon} alt="Burp Suite" /> },
    { name: 'OpenSSL', icon: <img src={opensslIcon} alt="OpenSSL" /> },
    { name: 'VS Code', icon: <img src={vscodeIcon} alt="VS Code" /> },
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
