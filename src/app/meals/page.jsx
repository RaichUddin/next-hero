

import Meals from '@/components/Meals';
import React from 'react';

const page = () => {

    return (
        <div className='p-12'>
            <h1 className='text-3xl font-bold text-red-400'>Choose Your Meals</h1>
            <p>Choose meals of you by Searching....</p>
            <Meals></Meals>
        </div>
    );
};

export default page;