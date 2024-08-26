'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const links = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'blogs',
            path: '/blogs'
        },

        {
            title: 'Dashboard',
            path: '/dashboard'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
    ]
    return (
        <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
            <h6 className='text-3xl'>Next <span className='text-green-700'>Hero</span></h6>
            <ul className='flex justify-between items-center space-x-4'>
                {
                    links?.map((link) => <Link className={`${pathName === link.path && 'text-green-700'} `} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;