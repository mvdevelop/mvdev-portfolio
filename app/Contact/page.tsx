
//"use client";
import React from 'react';

import { BiPhone, BiEnvelope, BiMap, BiTime, BiMessageDetail, BiGlobe } from 'react-icons/bi';



export default function Contact() {
  return (
    <>
        <section className='px-[8%] lg:px-[16%] py-8 text-white'>
            <div className='grid lg:grid-cols-2 gap-12 w-full'>

                {/* Contact Form */}
                <div className='bg-gray-500/5 p-7 rounded-xl shadow-lg'>
                    <h2 className='text-3xl font-unbounded font-normal text-[color:var(--primary-color)] mb-2'>Let`s Work Together</h2>
                    <p className='text-sm text-gray-400 my-7'>
                        Collaboration is where the best ideas come to life!
                    </p>

                    <form className='space-y-5'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input type="text" placeholder='First Name' className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500' />
                            <input type="text" placeholder='Last Name' className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500' />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input type="email" placeholder='E-mail Address' className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500' />
                            <input type="tel" placeholder='Phone Number' className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500' />
                        </div>
                        <select className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500 appearance-none'>
                            <option>Select a service</option>
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>Mobile</option>
                        </select>

                        <textarea rows={3} placeholder='Send a Message' className='w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500'></textarea>

                        <button type='submit' className='bg-[var(--primary-color)] hover:bg-white text-gray-700 px-6 py-3 mt-5 rounded-lg font-semibold transition-all duration-500 cursor-pointer'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}
