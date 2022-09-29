import React from 'react';

const Card = (props) => {
    const {name,age, picture, detail, required} = props.data;
    return (
        <div className='w-72 h-96 p-3 border-solid border-2 border-slate-900 rounded-lg relative'>
            <div className=''>
                <img src={picture} className="w-64 h-28 rounded-lg mb-2" alt="" />
                <div className=''>
                    <h2 className='mb-2 text-lg font-bold'>{name}</h2>
                    <p className='mb-2'>{detail}</p>
                    <h3 className='mb-2 font-medium'>For Age: {age}</h3>
                    <h3 className='mb-2 font-medium'>Required: {required}</h3>
                </div>
            </div>
            <button className='bg-zinc-900 text-white pr-8 pl-8 pt-2 pb-2 rounded-lg font-bold absolute bottom-2 left-2'>Add to list</button>
        </div>
    );
};

export default Card;