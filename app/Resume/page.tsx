
"use client";
import React, { useState } from 'react';
import { SiDocker, SiJavascript, SiLinux, SiMysql, SiNodedotjs, SiReact, SiSpringboot, SiTypescript } from 'react-icons/si';

export default function Resume() {

    const [ activeTab, setActiveTab ] = useState('Experience');
    
    const tabs = ['Experience', 'Education', 'Skills', 'About me'];

    const experiences = [
        {
            date: '2025 - Present', role: 'Full Stack Developer', company: '19SL Inc.', 
        },
        {
            date: '2024 - 2025', role: 'Full Stack Developer', company: 'Acioli Inc.', 
        },
        {
            date: '2023 - 2024', role: 'Frontend Developer', company: 'Shakers Inc.', 
        },
        {
            date: '2022 - 2023', role: 'Full Stack Developer', company: '19SL Inc.', 
        },
    ];

    const educations = [
        {
            year: '2022 - 2026', degree: 'Computer Science', institute: 'Unif'
        },
        {
            year: '2024 - 2025', degree: 'DevOps Engineering', institute: 'H.'
        },
        {
            year: '2021 - 2023', degree: 'English Proficiency C1', institute: 'IBL'
        },
        {
            year: '2020 - 2022', degree: 'CS50`s Introduction to Computer Science', institute: 'H.'
        },
    ];

    const skills = [
        {
            name: 'Javascript', icon: <SiJavascript />
        }, 
        {
            name: 'Typescript', icon: <SiTypescript />
        }, 
        {
            name: 'React', icon: <SiReact />
        }, 
        {
            name: 'Node.js', icon: <SiNodedotjs />
        },
        {
            name: 'Springboot', icon: <SiSpringboot />
        },
        {
            name: 'SQL', icon: <SiMysql />
        }, 
        {
            name: 'Linux', icon: <SiLinux />
        }, 
        {
            name: 'Docker', icon: <SiDocker />
        },
    ];

    return (
        <>
            <section className='px-[8%] lg:px-[16%] py-12 text-white'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                    {/* Left Sidebar */}
                    <div>
                        <h2 className='text-3xl font-unbounded font-bold mb-4'>Why hire me ?</h2>
                        <p className='text-gray-400 mt-6 mb-10'>
                            I am a dedicated and skilled developer with a passion for creating innovative solutions.
                        </p>
                        <div className='flex flex-col gap-5'>
                            {tabs.map((tab) => (
                                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-4 text-left rounded-md font-semibold transition-all cursor-pointer ${activeTab === tab ? 'bg-[var(--primary-color)] text-white' : 'bg-gray-500/5 text-gray-400 hover:bg-gray-500/20 hover:text-white'}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className='md:col-span-2'>
                        <h2 className='text-3xl font-unbounded font-bold mb-4'>
                            {activeTab}
                        </h2>
                        <p className='text-gray-400 mb-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consectetur?
                        </p>
                        {/* Experience */}
                        {activeTab === 'Experience' && (
                            <div className='h-[500px] overflow-y-scroll pr-2 custom-scrollbar'>
                                
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
