import React from 'react';
import logo from '../../image/logo.png'
import './Nav.css'

const Nav = () => {
    return (
        <nav className='navbar bg-slate-900 flex justify-between items-center lg:h-20 lg:pl-12 md:pl-8 md:pr-12 w-100 pl-6 pr-6'>
            <img src={logo} className=" lg:w-60 md:w-44 w-24" alt="" />
            <div className='navlink text-white '>
                <a href="" className='lg:ml-12 md:ml-8 ml-4'>Join Now</a>
                <a href="" className='lg:ml-12 md:ml-8 ml-4'>About</a>
                <a href="" className='lg:ml-12 md:ml-8 ml-4'>Contact</a>
            </div>
        </nav>
    );
};

export default Nav;