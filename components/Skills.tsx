
import React, { useState, useEffect, useRef, useMemo, forwardRef } from 'react';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-light">
    <span className="text-accent">&lt;</span>{children}<span className="text-accent">/&gt;</span>
  </h2>
);

interface Coords {
  x: number;
  y: number;
  z: number;
}

const computePosition = (
  index: number,
  count: number,
  radius: number
): Coords => {
  const phi = Math.acos(-1 + (2 * index + 1) / count);
  const theta = Math.sqrt(count * Math.PI) * phi;
  
  const x = radius * Math.cos(theta) * Math.sin(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(phi);

  return { x, y, z };
};


const SkillTag: React.FC<{ skill: Skill; initialPosition: Coords; rotationMatrix: number[][]; radius: number }> = ({ skill, initialPosition, rotationMatrix, radius }) => {
  const { x: ix, y: iy, z: iz } = initialPosition;
  const [rx, ry, rz] = [
      ix * rotationMatrix[0][0] + iy * rotationMatrix[0][1] + iz * rotationMatrix[0][2],
      ix * rotationMatrix[1][0] + iy * rotationMatrix[1][1] + iz * rotationMatrix[1][2],
      ix * rotationMatrix[2][0] + iy * rotationMatrix[2][1] + iz * rotationMatrix[2][2],
  ];

  const scale = (rz + 2 * radius) / (3 * radius);
  const transform = `translate3d(${rx}px, ${ry}px, ${rz}px) scale(${scale.toFixed(3)})`;
  const opacity = (rz + radius) / (2 * radius);

  return (
    <div
      className="absolute transition-all duration-100 ease-linear text-accent hover:text-light"
      style={{ transform, opacity, pointerEvents: 'auto' }}
    >
      <div className="w-12 h-12 p-2 bg-secondary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-125">
        {skill.icon}
      </div>
    </div>
  );
};


const SkillsGlobe: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const mousePos = useRef({ x: 0, y: 0 });
    const lastMousePos = useRef({ x: 0, y: 0 });
    const isInteracting = useRef(false);

    const radius = 220;

    const initialPositions = useMemo(() => {
        return SKILLS.map((_, i) => computePosition(i, SKILLS.length, radius));
    }, [SKILLS.length, radius]);

    useEffect(() => {
        let animationFrameId: number;

        const updateRotation = () => {
            if (!isInteracting.current) {
                setRotation(prev => ({
                    x: prev.x + mousePos.current.y * 0.00005,
                    y: prev.y - mousePos.current.x * 0.00005,
                }));
            } else {
                 setRotation(prev => ({
                    x: prev.x + (mousePos.current.y - lastMousePos.current.y) * 0.001,
                    y: prev.y - (mousePos.current.x - lastMousePos.current.x) * 0.001,
                }));
            }
            lastMousePos.current = { ...mousePos.current };
            animationFrameId = requestAnimationFrame(updateRotation);
        };

        animationFrameId = requestAnimationFrame(updateRotation);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const sx = Math.sin(rotation.x);
    const cx = Math.cos(rotation.x);
    const sy = Math.sin(rotation.y);
    const cy = Math.cos(rotation.y);

    const rotationMatrix = [
        [cy, 0, sy],
        [sx * sy, cx, -sx * cy],
        [-cx * sy, sx, cx * cy],
    ];
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const dpr = window.devicePixelRatio || 1;
        canvas.width = container.offsetWidth * dpr;
        canvas.height = container.offsetHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${container.offsetWidth}px`;
        canvas.style.height = `${container.offsetHeight}px`;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const rotatedPositions = initialPositions.map(pos => {
            const { x: ix, y: iy, z: iz } = pos;
            return {
                x: ix * rotationMatrix[0][0] + iy * rotationMatrix[0][1] + iz * rotationMatrix[0][2],
                y: ix * rotationMatrix[1][0] + iy * rotationMatrix[1][1] + iz * rotationMatrix[1][2],
                z: ix * rotationMatrix[2][0] + iy * rotationMatrix[2][1] + iz * rotationMatrix[2][2],
            };
        });

        for (let i = 0; i < rotatedPositions.length; i++) {
            for (let j = i + 1; j < rotatedPositions.length; j++) {
                const p1 = rotatedPositions[i];
                const p2 = rotatedPositions[j];
                const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow(p1.z - p2.z, 2));

                if (distance < radius * 0.8) {
                    const alpha = 1 - (distance / (radius * 0.8));
                    ctx.beginPath();
                    ctx.moveTo(p1.x + container.offsetWidth / 2, p1.y + container.offsetHeight / 2);
                    ctx.lineTo(p2.x + container.offsetWidth / 2, p2.y + container.offsetHeight / 2);
                    ctx.strokeStyle = `rgba(0, 245, 160, ${alpha * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

    }, [rotation, initialPositions, rotationMatrix]);


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePos.current = {
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2,
        };
      }
    };
    
    const handleInteractionStart = () => isInteracting.current = true;
    const handleInteractionEnd = () => isInteracting.current = false;

    return (
        <div
            ref={containerRef}
            className="w-full h-[500px] relative flex items-center justify-center"
            style={{ perspective: '1000px' }}
            onMouseMove={handleMouseMove}
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
        >
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
            <div className="absolute" style={{ transformStyle: 'preserve-3d' }}>
                {SKILLS.map((skill, i) => (
                    <SkillTag key={skill.name} skill={skill} initialPosition={initialPositions[i]} rotationMatrix={rotationMatrix} radius={radius} />
                ))}
            </div>
        </div>
    );
};


const Skills = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="skills" ref={ref} className="py-20 bg-primary overflow-hidden">
      <SectionTitle>My Tech Stack</SectionTitle>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 flex justify-center items-center">
            <SkillsGlobe />
        </div>
        <div className="md:w-1/2 text-lg text-medium space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
