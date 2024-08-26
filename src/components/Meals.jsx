
"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search.php?f=${search}`)
            const data = await res.json();
            setMeals(data.meals);
            setError("");
        } catch (error) {
            setError("No Data Found");
        }
    }

    useEffect(() => {
        loadData();

    }, [search]);

    const handler = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    return (
        <div className='mt-12'>
            <input onChange={handler} className='outline-none p-4 border-transparent text-slate-800' type="text" placeholder='Search meals....' />
            <button className='bg-red-400 p-2 rounded-s'>Search</button>
            <div className='mt-12 grid grid-cols-3 gap-11 '>
                {
                    meals?.length > 0 && !error && meals?.map((meal) => (
                        <div key={meal?.idMeal} className='border-2 p-4'>
                            <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={500} />
                            <h6 className='text-xl text-red-400 font-bold'>{meal.strMeal}</h6>
                            <p> Instruction: {meal.strInstructions.slice(0, 150)}</p>
                        </div>
                    ))
                }
                {
                    error && <h6>No data found....</h6>
                }
            </div>
        </div>

    );
};

export default Meals;