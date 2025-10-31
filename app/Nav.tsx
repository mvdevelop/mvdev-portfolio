
"use client";
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {

    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/Services' },
        { name: 'Resume', href: '/Resume' },
        { name: 'Work', href: '/Work' },
        { name: 'Contact', href: '/Contact' },
    ];

    return (
        <>
            <nav className='w-full z-[99999] transition-all duration-300'>
                <div className='flex justify-between items-center px-[8%] lg:*:px-[16%] py-6'>
                    <Link href='/' className='text-5xl font-bold font-unbounded text-white logo'>
                        Mv
                        <span className='text-[var(--primary-color)] font-unbounded'>Dev</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className='flex items-center gap-3'>
                        <div className='hidden lg:flex nav-menu items-center space-x-5'>
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} className={`text-base font-bold transition-all text-white relative px-2 py-2 rounded hover:text-[--primary-color] ${pathname === link.href ? 'active-links text-[--primary-color]' : ''}`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Link href={}></Link>
                    </div>
                </div>

            </nav>
        </>
    )
}
