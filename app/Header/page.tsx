
"use client";
import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

    const statsData = [
        { value: 3, label: 'Years of\nExperience' },
        { value: 25, label: 'Completed\nProjects' },
        { value: 12, label: 'Technologies\nMastered' },
        { value: 365, label: 'Code\nCommits' }
    ];
    
    const countRefs = useRef([]);

    useEffect(() => {
        countRefs.current.forEach((el, index) => {
            if (el) {
                const countUP = new CountUp(el, statsData[index].value, {
                    duration: 2,
                });
            }
        })
    });

    return (
        <>
            <header className='h-screen text-white py-12 relative'>
                {/* Bg Elements */}
                <div className='absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-linear-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10'></div>
                <div className='absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-linear-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10'></div>
                <div className='absolute bottom-0 left-[20%] w-[500px] h-[500px] rounded-full bg-linear-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10'></div>

                <div className='flex pt-10 flex-col lg:flex-row items-center justify-between px-[8%] lg:px-[16%]'>
                    {/* Left Content */}
                    <div className='lg:w-1/2 text-start md:text-left'>
                        <p className='text-lg mb-2 text-gray-400'>Full Stack Developer</p>
                        <h1 className='text-5xl text-start lg:text-6xl font-unbounded font-normal mb-2'>Hello I&apos;m <span className='text-[color:var(--primary-color)]'>Vinicius Dilly</span></h1>
                        <p className='text-gray-400 text-md lg:text-xl font-normal font-sora my-8'>
                            Developing <span className='text-[color:var(--primary-color)]'>solutions</span> for each type of problem for <span className='text-[color:var(--primary-color)]'>all people</span>.
                        </p>

                        {/* Buttons */}
                        <div className='flex flex-wrap gap-8 items-center'>
                            <Link href='#' className='border border-[var(--primary-color)] font-bold text-[var(--primary-color)] px-6 py-3 rounded hover:bg-[var(--primary-color)] hover:text-white transition-all duration-500'>
                                <i className="bi bi-download me-2"></i> Download CV
                            </Link>

                            <div className='flex hero-social gap-2 text-3xl'>
                                <Link href='https://github.com/mvdevelop' target='_blank'><i className="bi bi-github cursor-pointer"></i></Link>
                                <Link href='https://www.linkedin.com/in/mvdevelop/' target='_blank'><i className="bi bi-linkedin cursor-pointer"></i></Link>
                                <Link href='#' target='_blank'><i className="bi bi-facebook cursor-pointer"></i></Link>
                                <Link href='#' target='_blank'><i className="bi bi-instagram cursor-pointer"></i></Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center relative'>
                        <div className='relative rounded-full flex items-center justify-center'>
                            <div className='relative hero-image w-full h-full rounded-full overflow-hidden bg-linear-to-r from-[var(--hero-image-from)] to-[var(--hero-image-to)]'>
                                <Image src='/images/mvdev-photo-00.jpeg' alt='Portfolio Picture' width={320} height={320} className='w-80 h-80 object-cover rounded' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className='stats px-[8%] lg:px-[16%] mt-30 hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    
                </div>
            </header>
        </>
    );
}
