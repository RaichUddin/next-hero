import React from 'react';

const page = ({ params }) => {
    const { Title, Description } = blogs.find((blog) => blog.slug == params.slug);
    return (
        <div>
            <h3>{Title}</h3>
            <h3>{Description}</h3>
        </div>
    );
};
const blogs = [
    {
        'slug': 'top-blogging-trends-2024',

        'Title': 'Top 5 Blogging Trends You Need to Watch in 2024',

        'Description': 'Discover the latest blogging trends shaping 2024, from AI-powered content creation to niche blogging and sustainability. Stay ahead of the curve with these must-know strategies to grow your blog and engage your audience.'
    },
    {
        'slug': 'top-blogging-trends-2025',

        'Title': 'Top 5 Blogging Trends You Need to Watch in 2025',

        'Description': 'Discover the latest blogging trends shaping 2024, from AI-powered content creation to niche blogging and sustainability. Stay ahead of the curve with these must-know strategies to grow your blog and engage your audience.'
    },
    {
        'slug': 'top-blogging-trends-2026',

        'Title': 'Top 5 Blogging Trends You Need to Watch in 2026',

        'Description': 'Discover the latest blogging trends shaping 2024, from AI-powered content creation to niche blogging and sustainability. Stay ahead of the curve with these must-know strategies to grow your blog and engage your audience.'
    },
]
export default page;