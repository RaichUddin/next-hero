
import Link from 'next/link';
import React from 'react';

const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/posts`);

    const data = await res.json();
    return data;


}

const page = async () => {
    const postData = await getPosts();

    return (
        <div className=''>
            <h6>All posts....</h6>
            <div className='grid grid-cols-4 gap-6 '>
                {
                    postData?.map(({ id, title, body }) => (
                        <div key={id} className='border-4 bg-amber-100 p-6'>

                            <h6> Title: {title}</h6>
                            <h6> BODY:{body}</h6>
                            <button className='bg-red-500 px-3 py-3'><Link href={`/posts/${id}`}>See details</Link></button>

                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default page;