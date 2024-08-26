import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='p-24'>
            {
                blogs.map((blog) => (
                    <div key={blog.Slug} className='border-2 p-12'>
                        <h3>{blog.Title}</h3>
                        <h3>{blog.Description}</h3>
                        <button className='bg-red-400 p-3'>
                            <Link href={`/blogs/${blog.Slug}`}>View Details</Link>
                        </button>

                    </div>

                ))
            }

        </div>
    );
};

const blogs = [
    {
        'Slug': 'top-blogging-trends-2024',

        'Title': 'Top 5 Blogging Trends You Need to Watch in 2024',

        'Description': 'Discover the latest blogging trends shaping 2024, from AI-powered content creation to niche blogging and sustainability. Stay ahead of the curve with these must-know strategies to grow your blog and engage your audience.'
    },
    {
        'Slug': 'top-blogging-trends-2025',

        'Title': 'Top 5 Blogging Trends You Need to Watch in 2025',

        'Description': 'Discover the latest blogging trends shaping 2024, from AI-powered content creation to niche blogging and sustainability. Stay ahead of the curve with these must-know strategies to grow your blog and engage your audience.'
    },
    {
        'Slug': 'top-blogging-trends-2026',

        'Title': 'Top 5 Blogging Trends You Need to Watch in 2026',

        'Description': 'Discover the latest blogging trends shaping 2024, from AI-powered content creation to niche blogging and sustainability. Stay ahead of the curve with these must-know strategies to grow your blog and engage your audience.'
    },
]

export default page;