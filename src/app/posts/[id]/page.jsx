import React from 'react';

const getDetails = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

const page = async ({ params }) => {
    const { title, body } = await getDetails(params.id);
    return (
        <div className='bg-orange-300 border-2 p-3'>
            <h5>Title: {title}</h5>
            <h5>Description: {body}</h5>
        </div>
    );
};

export default page;