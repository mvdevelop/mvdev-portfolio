
"use client";
import React from 'react';



const servicesData = [
    {
        id: '01', title: 'Frontend', description: 'Creating responsive and visually appealing user interfaces using modern frameworks like React and Next.js'
    }, {
        id: '02', title: 'Backend', description: 'Building robust server-side applications and APIs with Node.js and Springboot, Express, and databases like MongoDB and PostgreSQL'
    }, {
        id: '03', title: 'Mobile', description: 'Designing user-centric mobile and web interfaces using tools like React Native.'
    }, {
        id: '04', title: 'Devops', description: 'Implementing CI/CD pipelines, containerization with Docker, and cloud deployment on platforms like AWS and Google Cloud.'
    },
];

export default function Services() {
  return (
    <>
        <section className='px-[8%] lg:px-[16%] py-15 text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {servicesData.map((service, index) => (
                    <div key={index} className='service-card group py-15 px-10 border border-gray-800 rounded-xl transition-all duration-500 cursor-pointer hover:border-[--primary-color]'>
                        <div className='flex justify-between items-center mb-4'>
                            <h3 className='text-5xl stroke-text font-bold text-gray-400 transition-colors duration-300 group-hover:text-[--primary-color]'>  {service.id}
                            </h3>
                            <div className='w-20 h-20 flex items-center justify-center rounded-full bg-white text-black transition group-hover:bg-[var(--primary-color)] group-hover:text-white duration-300'>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}
