
"use client";
import React from 'react';

import Link from 'next/link';

export default function Header() {
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
                    <h1 className='text-6xl text-start lg:text-7xl font-unbounded font-normal mb-2'>Hello I&apos;m <span className='text-[color:var(--primary-color)]'>Vinicius Dilly</span></h1>
                    <p className='text-gray-400 text-md lg:text-xl font-normal font-sora my-8'>
                        Developing <span className='text-[color:var(--primary-color)]'>solutions</span> for each type of problem for <span className='text-[color:var(--primary-color)]'>all people</span>.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-wrap gap-8 items-center'>
                        <Link href='#' className='border border-[var(--primary-color)] font-bold text-[var(--primary-color)] px-6 py-3 rounded hover:bg-[var(--primary-color)] hover:text-white transition-all duration-500'>
                            <i className="bi bi-download"></i>
                        </Link>
                    </div>
                </div>

                {/* Right Content */}
                <div className=''>

                </div>
            </div>
        </header>
    </>
  )
}
