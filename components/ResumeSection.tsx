"use client";
import React, { useState } from 'react';
import { FaCloud, FaJava } from 'react-icons/fa';
import { SiDocker, SiJavascript, SiLinux, SiMongodb, SiNodedotjs, SiPostgresql, SiReact, SiSpringboot, SiTailwindcss, SiTypescript, SiDotnet, SiBlazor } from 'react-icons/si';
import { BsDatabaseFill } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import SectionTitle from './SectionTitle';
import { useAnimateIn } from '@/lib/useScrollReveal';

export default function ResumeSection() {
    const [activeTab, setActiveTab] = useState('Experience');
    const tabs = ['Experience', 'Education', 'Skills', 'About me'];
    const { ref, isVisible } = useAnimateIn('up');

    const experiences = [
        { date: '2025 - Present', role: 'Full Stack Developer', company: '19SL Inc.' },
        { date: '2025 - 2025', role: 'Full Stack Developer', company: 'Brs Inc.' },
        { date: '2024 - 2024', role: 'Frontend Developer', company: 'Brs Inc.' },
        { date: '2023 - 2023', role: 'Frontend Developer', company: '19SL Inc.' },
    ];

    const educations = [
        { year: '2022 - 2026', degree: 'Computer Science', institute: 'Unif' },
        { year: '2024 - 2025', degree: 'DevOps Engineering', institute: 'Fiap' },
        { year: '2021 - 2023', degree: 'English Proficiency C1', institute: 'IBL' },
        { year: '2021 - 2022', degree: 'CS50`s Int. to Computer Sci.', institute: 'HUIT' },
    ];

    const skills = [
        { name: '', icon: <SiTypescript /> },
        { name: '', icon: <SiReact /> },
        { name: '', icon: <SiTailwindcss /> },
        { name: '', icon: <SiNodedotjs /> },
        { name: '', icon: <TbBrandCSharp /> },
        { name: '', icon: <SiDotnet /> },
        { name: '', icon: <SiBlazor /> },
        { name: '', icon: <BsDatabaseFill /> },
        { name: '', icon: <SiMongodb /> },
        { name: '', icon: <SiDocker /> },
        { name: '', icon: <SiLinux /> },
        { name: '', icon: <FaCloud /> },
    ];

    return (
        <section id="resume" className="relative py-24 px-[8%] lg:px-[16%] text-white overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-color)]/[0.02] to-transparent pointer-events-none"></div>

            <SectionTitle
                label="My Background"
                title="Resume"
                subtitle="A journey of continuous learning and building impactful solutions."
            />

            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                {/* Left Sidebar */}
                <div>
                    <h2 className='text-3xl font-unbounded font-bold mb-4'>Why hire me?</h2>
                    <p className='text-gray-400 mt-6 mb-10'>
                        I am a dedicated and skilled developer with a passion for creating innovative solutions.
                    </p>
                    <div className='flex flex-col gap-5'>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 text-left rounded-md font-semibold transition-all duration-300 cursor-pointer ${
                                    activeTab === tab
                                        ? 'bg-[var(--primary-color)] text-white shadow-lg shadow-[var(--primary-color)]/20'
                                        : 'bg-gray-500/5 text-gray-400 hover:bg-gray-500/20 hover:text-white'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className='md:col-span-2'>
                    <h2 className='text-3xl font-unbounded font-bold mb-4 text-[var(--primary-color)]'>
                        {activeTab}
                    </h2>

                    {activeTab === 'Experience' && (
                        <div className='h-[500px] overflow-y-scroll pr-2 custom-scrollbar'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {experiences.map((exp, index) => (
                                    <div
                                        key={index}
                                        className='bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-6 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--primary-color)]/5'
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <h3 className='text-[color:var(--primary-color)] font-semibold my-2'>
                                            {exp.date}
                                        </h3>
                                        <h4 className='text-2xl font-normal font-unbounded mb-1'>
                                            {exp.role}
                                        </h4>
                                        <p className='text-gray-400 flex items-center text-sm mt-2'>
                                            <span className='text-[color:var(--primary-color)] text-2xl pe-2'>
                                                &bull;
                                            </span> {exp.company}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'Education' && (
                        <div className='h-[500px] overflow-y-scroll pr-2 custom-scrollbar'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {educations.map((edu, index) => (
                                    <div
                                        key={index}
                                        className='bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-6 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--primary-color)]/5'
                                    >
                                        <h3 className='text-[color:var(--primary-color)] font-semibold my-2'>
                                            {edu.year}
                                        </h3>
                                        <h4 className='text-2xl font-normal font-unbounded mb-1'>
                                            {edu.degree}
                                        </h4>
                                        <p className='text-gray-400 flex items-center text-sm mt-2'>
                                            <span className='text-[color:var(--primary-color)] text-2xl pe-2'>
                                                &bull;
                                            </span> {edu.institute}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'Skills' && (
                        <ul className='grid grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200 mt-4'>
                            {skills.map((skill, index) => (
                                <li
                                    key={index}
                                    className='relative cursor-pointer bg-gray-500/5 rounded-lg py-9 flex flex-col items-center group border border-transparent hover:border-[var(--primary-color)]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[var(--primary-color)]/5'
                                >
                                    <i className='text-5xl group-hover:text-[color:var(--primary-color)] transition-all duration-500 group-hover:scale-110'>
                                        {skill.icon}
                                    </i>
                                    <span className='absolute bottom-[5px] scale-0 rounded px-2 py-1 font-semibold text-white transition-all duration-300 group-hover:scale-100 group-hover:text-[color:var(--primary-color)]'>
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {activeTab === 'About me' && (
                        <div className='text-gray-400 space-y-4 animate-fade-in'>
                            <p className='text-normal leading-relaxed'>
                                &nbsp;&nbsp;Hello, I&apos;m a <span className='text-[color:var(--primary-color)] font-semibold'>Full Stack Developer</span> with experience in developing modern and scalable web applications, combining an intuitive and responsive frontend with a robust and efficient backend. <br />
                                &nbsp;&nbsp;On the <span className='text-[color:var(--primary-color)] font-semibold'>frontend</span>, I focus on creating high-performance, user-centered interfaces using frameworks like React and Tailwind CSS to deliver exceptional user experiences. <br />
                                &nbsp;&nbsp;On the <span className='text-[color:var(--primary-color)] font-semibold'>backend</span>, I develop and maintain RESTful APIs with Node.js and <span className='text-[color:var(--primary-color)] font-semibold'>.NET Core</span>, emphasizing scalability, security, and clean architecture. <br />
                                &nbsp;&nbsp;In <span className='text-[color:var(--primary-color)] font-semibold'>mobile development</span>, I work with React Native to create cross-platform applications. <br />
                                &nbsp;&nbsp;From a <span className='text-[color:var(--primary-color)] font-semibold'>DevOps</span> perspective, I apply agile methodologies, version control with Git, automated testing, and CI/CD pipelines.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
