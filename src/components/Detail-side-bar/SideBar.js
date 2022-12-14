import { faLocation, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Open toast after Activity completed button clicked
const notify = () => toast("Congratulations!");

const SideBar = ({cart}) => {

    let requiredTime = 0;
    for(const item of cart){
        requiredTime = requiredTime + parseInt(item.required * item.quantity);
    }

    const restTimeButton = (id) =>{
        document.getElementById('restTime').innerText = document.getElementById(id).innerText;

        // addeding rest time to local storage 
        const newNum = document.getElementById('restTime').innerText;
        localStorage.setItem('number', newNum);
    }

    return (
        <div className='relative'>
    {/* ------------------Profile container ---------------------*/}
            <div className='flex mt-5 mb-3'>
                <h1 className='text-5xl mr-2'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></h1>
                <div>
                    <h1 className='text-lg font-bold'>Shamim Sarkar</h1>
                    <h2><span className='text-slate-300'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span> Dinajpur, Bangladesh.</h2>
                </div>
            </div>

        {/* ------------------Hight weight and length container ---------------------*/}
            <div className='flex justify-around items-center bg-slate-900 h-20 rounded-lg'>
                <div className='text-white'>
                    <h1 className='text-2xl'>65<span className='text-base'>kg</span></h1>
                    <p>Weight</p>
                </div>
                <div className='text-white'>
                    <h1 className='text-2xl'>5.6</h1>
                    <p>Height</p>
                </div>
                <div className='text-white'>
                    <h1 className='text-2xl'>22<span className='text-base'>yrs</span></h1>
                    <p>Age</p>
                </div>
            </div>

            <h1 className='text-2xl text-slate-900 font-bold mt-5'>Add A Break</h1>

        {/* ------------------Group button container ---------------------*/}
            <div className='flex justify-around items-center mt-5 bg-slate-200 h-20 rounded-lg'>
                <div  onClick={()=>restTimeButton('one')} className='bg-slate-400 hover:bg-slate-900 hover:text-white font-bold rounded-full p-2 cursor-pointer'>
                    <h1><span id='one'>10</span>s</h1>
                </div>
                <div  onClick={()=>restTimeButton('two')} className='bg-slate-400 hover:bg-slate-900 hover:text-white font-bold rounded-full p-2 cursor-pointer'>
                    <h1><span id='two'>20</span>s</h1>
                </div>
                <div onClick={()=>restTimeButton('three')} className='bg-slate-400 hover:bg-slate-900 hover:text-white font-bold rounded-full p-2 cursor-pointer'>
                    <h1><span id='three'>30</span>s</h1>
                </div>
                <div onClick={()=>restTimeButton('four')} className='bg-slate-400 hover:bg-slate-900 hover:text-white font-bold rounded-full p-2 cursor-pointer'>
                    <h1><span id='four'>40</span>s</h1>
                </div>
            </div>

            <h1 className='text-2xl text-slate-900 font-bold mt-5'>Exercise Details</h1>
    {/* ------------------Exercise details container ---------------------*/}
            <div className='mt-5'>
                <div className='flex p-2 bg-white rounded-lg mb-4'>
                    <h3 className=' bg-white font-bold'>Exercise time <span className='ml-4 text-slate-900'>{requiredTime} <span className='text-slate-300'>second</span></span></h3>
                </div>
                <div className='flex p-2 bg-white rounded-lg'>
                    <h3 className=' bg-white font-bold'>Rest time <span className='ml-12 text-slate-300'><span id='restTime' className='text-slate-900'>{localStorage.getItem('number')}</span> second</span></h3>
                </div>
            </div>
            <button className='lg:w-60 md:w-36 pt-2 pb-2 m-auto bg-slate-900 text-white font-bold rounded-lg mt-4 ' onClick={notify}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default SideBar;