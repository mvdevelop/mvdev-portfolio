
"use client";
import React from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { SiJavascript, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';

export default function ProjectSlider() {

    const projects = [
        {
            id: '01', title: 'Blushify', description: 'Cosmetics E-Commerce Store', tech: ['JS','React', 'Tailwindcss'], img: '/images/blushify.gif', href: 'https://ecommerce-beauty-ashy.vercel.app/', repo: 'https://github.com/mvdevelop/ecommerce-beauty' 
        },
        {
            id: '02', title: 'Skyfare', description: 'Traveling Website', tech: ['JS', 'React', 'Tailwindcss'], img: '/images/skyfare.gif', href: 'https://skyfare-19sl.vercel.app/', repo: 'https://github.com/mvdevelop/skyfare-19sl' 
        },
        {
            id: '03', title: 'Netflex', description: 'Movies Library', tech: ['React', 'Tailwindcss', 'Node.js'], img: '/images/movies.gif', href: 'https://movie-app-yt.vercel.app/', repo: 'https://github.com/mvdevelop/movies-library' 
        },
        {
            id: '04', title: 'Snake´s', description: 'Snake Mini-Game', tech: ['JS', 'React', 'Tailwindcss'], img: '/images/snake-game.gif', href: 'https://snake-game-inky-pi.vercel.app/', repo: 'https://github.com/mvdevelop/snake-game' 
        },
    ]

    return (
        <>
            <section className='px-[8%] lg:px-[16%] py-20 text-white'>
                <Swiper modules={[Navigation]} loop={true} navigation={{
                    prevEl: '.custom-prev', nextEl: '.custom-next'
                }} spaceBetween={40} slidesPerView={1}>
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className='grid md:grid-cols-2 gap-10 items-center'>
                                {/* Left Side */}
                                <div className='work-content'>
                                    <h2 className='text-7xl font-bold stroke-text'>{project.id}</h2>
                                    <h3 className='text-5xl font-semibold font-unbounded mt-4'>{project.title}</h3>
                                    <p className='text-gray-400 mt-3 text-lg leading-relaxed'>{project.description}</p>



                                    {/* Tech Icons */}
                                    <div className='flex gap-4 mt-4'>
                                        {project.tech.map((tech, index) => {
                                            let IconComponent;
                                            switch (tech.toLocaleLowerCase()) {
                                                case 'react': 
                                                    IconComponent = SiReact;
                                                    break;
                                                case 'tailwindcss':
                                                    IconComponent = SiTailwindcss;
                                                    break;
                                                case 'js':
                                                    IconComponent = SiJavascript;
                                                    break;
                                                case 'node.js': 
                                                    IconComponent = SiNodedotjs;
                                                    break;
                                                default: 
                                                    IconComponent = null;
                                            }
                                            return IconComponent ? (
                                                <div key={index} className='work-icons text-3xl text-[color:var(--primary-color)] cursor-pointer hover:text-white transition-all duration-300' title={tech}>
                                                    <IconComponent />
                                                </div>
                                            ) : null;
                                        })}
                                    </div>

                                    {/* Icons */}
                                    <div className='work-share flex gap-4 mt-6 border-t border-gray-500 pt-5'>
                                        <Link href={project.href} target='_blank' className='w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500'>
                                            <i className='bi bi-arrow-up-right text-3xl'></i>
                                        </Link>
                                        <Link href={project.repo} target='_blank' className='w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500'>
                                            <i className='bi bi-github text-3xl'></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className='relative work-image'>
                                    <Image src={project.img} alt={project.title} width={650} height={300} className='project-img rounded-lg shadow-lg'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Custom Navigation Button */}
                    <div className='flex gap-3 justify-end mt-6'>
                        <button className='custom-prev w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)] text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500'>
                            <i className='bi bi-arrow-left text-2xl'></i>
                        </button>
                        <button className='custom-next w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)] text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500'>
                            <i className='bi bi-arrow-right text-2xl'></i>
                        </button>
                    </div>
                </Swiper>
            </section>
        </>
    )
}
