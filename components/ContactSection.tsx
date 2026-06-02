"use client";
import React from 'react';
import { BiPhone, BiEnvelope, BiMap, BiTime, BiMessageDetail, BiGlobe } from 'react-icons/bi';
import SectionTitle from './SectionTitle';
import { useAnimateIn } from '@/lib/useScrollReveal';

export default function ContactSection() {
    const { ref, isVisible } = useAnimateIn('up');

    const contactInfo = [
        { icon: <BiPhone size={20} />, label: 'Phone', value: '(+55) 21 99050-6596' },
        { icon: <BiEnvelope size={20} />, label: 'E-mail', value: 'marcosvmdilly@gmail.com' },
        { icon: <BiMap size={20} />, label: 'Address', value: 'Rio de Janeiro, RJ - Brazil' },
        { icon: <BiTime size={20} />, label: 'Working Hours', value: 'Mon - Fri: 08:00 - 18:00 / Sat - Sun: 08:00 - 14:00' },
        { icon: <BiMessageDetail size={20} />, label: 'WhatsApp', value: '(+55) 21 99050-6596' },
        { icon: <BiGlobe size={20} />, label: 'Website', value: 'www.mvdevelop.com.br' },
    ];

    return (
        <section id="contact" className="relative py-24 px-[8%] lg:px-[16%] text-white overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-color)]/[0.02] to-transparent pointer-events-none"></div>

            <SectionTitle
                label="Get in Touch"
                title="Contact Me"
                subtitle="Have a project in mind? Let's work together to bring your ideas to life."
            />

            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`grid lg:grid-cols-2 gap-12 w-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                {/* Contact Form */}
                <div className='bg-gray-500/5 p-8 rounded-xl shadow-lg border border-gray-800/50 hover:border-[var(--primary-color)]/20 transition-all duration-500'>
                    <h2 className='text-2xl font-unbounded font-normal text-[color:var(--primary-color)] mb-6'>
                        Let&apos;s Work Together
                    </h2>

                    <form className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input
                                type="text"
                                placeholder='First Name'
                                className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500'
                            />
                            <input
                                type="text"
                                placeholder='Last Name'
                                className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500'
                            />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input
                                type="email"
                                placeholder='E-mail Address'
                                className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500'
                            />
                            <input
                                type="tel"
                                placeholder='Phone Number'
                                className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500'
                            />
                        </div>
                        <select className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500 appearance-none'>
                            <option>Select a service</option>
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>Mobile</option>
                            <option>DevOps</option>
                        </select>

                        <textarea
                            rows={4}
                            placeholder='Send a Message'
                            className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500 resize-none'
                        ></textarea>

                        <button
                            type='submit'
                            className='bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--primary-color)]/20'
                        >
                            Send Message
                            <i className="bi bi-send ms-2"></i>
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className='flex flex-col justify-center gap-2'>
                    {contactInfo.map((item, index) => (
                        <div
                            key={index}
                            className='contact-col flex items-center space-x-4 border-b border-gray-800 pb-5 hover:border-[var(--primary-color)]/30 transition-all duration-500 group'
                        >
                            <span className='bg-[#1a1b1f] p-4 border border-gray-700 group-hover:border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[var(--primary-color)]/10'>
                                {item.icon}
                            </span>
                            <div>
                                <p className='text-sm text-gray-400'>{item.label}</p>
                                <p className='font-medium text-white'>{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
