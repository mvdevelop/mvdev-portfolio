
"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { 
    SiJavascript, 
    SiReact, 
    SiTailwindcss, 
    SiDotnet, 
    SiTypescript, 
    SiNextdotjs, 
    SiSupabase, 
    SiVite 
} from 'react-icons/si';
import SectionTitle from './SectionTitle';
import { useAnimateIn } from '@/lib/useScrollReveal';

export default function WorkSection() {
    const { ref, isVisible } = useAnimateIn('up');

    const projects = [
        {
            id: '01', title: 'Macaw English School', description: 'English School Platform',
            tech: ['TS', 'React Vite', '.Net'], img: '/images/macaw-landing.png',
            href: 'https://macaw-english-course.vercel.app/', repo: 'https://github.com/mvdevelop/macaw-english-school'
        },
        {
            id: '02', title: 'Macaw', description: 'Social Media',
            tech: ['TS', 'NextJs', 'Supabase'], img: '/images/macaw-social-media-banner.png',
            href: 'https://macaw-social-media.vercel.app/', repo: 'https://github.com/mvdevelop/macaw-social-media'
        },
        {
            id: '03', title: 'Snake´s', description: 'Snake Mini-Game',
            tech: ['JS', 'React', 'Tailwindcss'], img: '/images/snake-game-banner.png',
            href: 'https://snake-game-inky-pi.vercel.app/', repo: 'https://github.com/mvdevelop/snake-game'
        },
        {
            id: '04', title: 'Blushify', description: 'Cosmetics E-Commerce Store',
            tech: ['JS', 'React', 'Tailwindcss'], img: '/images/blushify.gif',
            href: 'https://ecommerce-beauty-ashy.vercel.app/', repo: 'https://github.com/mvdevelop/ecommerce-beauty'
        },
    ];

    return (
        <section id="work" className="relative py-24 px-[8%] lg:px-[16%] text-white overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-color)]/[0.02] to-transparent pointer-events-none"></div>

            <SectionTitle
                label="My Portfolio"
                title="Featured Work"
                subtitle="A collection of projects that showcase my expertise across different domains."
            />

            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
                    spaceBetween={40}
                    slidesPerView={1}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className='grid md:grid-cols-2 gap-10 items-center'>
                                <div className='work-content'>
                                    <h2 className='text-7xl font-bold stroke-text'>{project.id}</h2>
                                    <h3 className='text-5xl font-semibold font-unbounded mt-4'>{project.title}</h3>
                                    <p className='text-gray-400 mt-3 text-lg leading-relaxed'>{project.description}</p>

                                    <div className='flex gap-4 mt-4 flex-wrap'>
                                        {project.tech.map((tech, index) => {
                                            let IconComponent: React.ElementType | null = null;
                                            
                                            // Normalizando a string para o switch case não falhar por maiúsculas/minúsculas
                                            switch (tech.toLowerCase().trim()) {
                                                case 'js':
                                                case 'javascript':
                                                    IconComponent = SiJavascript;
                                                    break;
                                                case 'ts':
                                                case 'typescript':
                                                    IconComponent = SiTypescript;
                                                    break;
                                                case 'react':
                                                    IconComponent = SiReact;
                                                    break;
                                                case 'react vite':
                                                case 'vite':
                                                    IconComponent = SiVite;
                                                    break;
                                                case 'nextjs':
                                                case 'next.js':
                                                    IconComponent = SiNextdotjs;
                                                    break;
                                                case 'tailwindcss':
                                                    IconComponent = SiTailwindcss;
                                                    break;
                                                case '.net':
                                                case 'dotnet':
                                                    IconComponent = SiDotnet;
                                                    break;
                                                case 'supabase':
                                                    IconComponent = SiSupabase;
                                                    break;
                                            }
                                            
                                            return IconComponent ? (
                                                <div key={index} className='work-icons text-3xl text-[color:var(--primary-color)] cursor-pointer hover:text-white transition-all duration-300' title={tech}>
                                                    <IconComponent />
                                                </div>
                                            ) : null;
                                        })}
                                    </div>

                                    <div className='work-share flex gap-4 mt-6 border-t border-gray-500 pt-5'>
                                        <Link href={project.href} target='_blank' className='w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500 hover:-translate-y-1'>
                                            <i className='bi bi-arrow-up-right text-3xl'></i>
                                        </Link>
                                        <Link href={project.repo} target='_blank' className='w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500 hover:-translate-y-1'>
                                            <i className='bi bi-github text-3xl'></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className='relative work-image'>
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        width={650}
                                        height={300}
                                        className='project-img rounded-lg shadow-lg hover:shadow-[var(--primary-color)]/10 transition-shadow duration-500'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className='flex gap-3 justify-end mt-6'>
                        <button className='custom-prev w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)] text-white rounded-lg shadow hover:bg-white hover:text-black hover:-translate-y-0.5 cursor-pointer transition-all duration-500'>
                            <i className='bi bi-arrow-left text-2xl'></i>
                        </button>
                        <button className='custom-next w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)] text-white rounded-lg shadow hover:bg-white hover:text-black hover:-translate-y-0.5 cursor-pointer transition-all duration-500'>
                            <i className='bi bi-arrow-right text-2xl'></i>
                        </button>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}
