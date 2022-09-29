import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Body = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-5'>
            <div className='lg:col-span-4 md:col-span-4 grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-6'>
                {
                    items.map(item => <Card data={item}></Card>)
                }
            </div>
            <div className='p-4 bg-slate-100'>
                
            </div>
        </div>
    );
};

export default Body;