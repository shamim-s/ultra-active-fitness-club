import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SideBar from '../Detail-side-bar/SideBar';
import { addFromLs, addToLocalStorage } from '../utilities/fakeDataBase';

const Body = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    // For side bar conatiner 
    const [cart, setCart] = useState([])

    const buttonHandler = (selectedItems) =>{
        let newDetailCart =[];
        const existsDetail = cart.find(item => item.id === selectedItems.id)
        if(!existsDetail){
            selectedItems.quantity = 1;
            newDetailCart = [...cart, selectedItems];
        }else{
            const restDetails = cart.filter(item => item.id !== selectedItems.id)
            existsDetail.quantity = existsDetail.quantity + 1;
            newDetailCart = [...restDetails, existsDetail];
        }
        setCart(newDetailCart);
        addToLocalStorage(selectedItems.id);
    }

// Loading details from local storage 
    useEffect(()=>{
        const storedDetails = addFromLs();
        let savedDetails = [];
        for(const id in storedDetails){
            const addedDetails = items.find(item => item.id === id);
            if(addedDetails){
                const quantity = storedDetails[id];
                addedDetails.quantity = quantity;
                savedDetails.push(addedDetails);
            }
        }
        setCart(savedDetails);
    },[items])

    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-5'>
            <div className='lg:col-span-4 md:col-span-4 grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-6'>
                {
                    items.map(item => <Card 
                        data={item} 
                        buttonHandler={buttonHandler}
                        key={item.id}></Card>)
                }
            </div>
{ /*--------------- Details side bar /  cart ---------------*/ }
            <div className='p-4 bg-slate-100'>
                <SideBar cart={cart}></SideBar>
            </div>
        </div>
    );
};

export default Body;