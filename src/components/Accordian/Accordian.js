import React from 'react';

const Accordian = () => {
    return (
        <div className='lg:mt-10 lg:mb-10 lg:pl-20 lg:pr-20 md:pl-10 md:pr-10 pl-5 pr-5'>
            <h1 className='text-center font-bold text-3xl mb-5'>Interview Questions and Answers</h1>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h3>1. How does react works?</h3>
                </div>
                <div className="collapse-content"> 
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h3>2. Difference between props and state?</h3>
                </div>
                <div className="collapse-content"> 
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h3>3. uses of useeffect</h3>
                </div>
                <div className="collapse-content"> 
                    <p>useEffect after render: We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component</p>
                </div>
            </div>
        </div>
    );
};

export default Accordian;