import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  const [selfExpand,setSelfExpand] = useState(false)

  useEffect(() => {
    if (!showItems) {
      setSelfExpand(false);
      }
  }, [showItems]);
    
  const handleClick = () => {
    if(selfExpand){
      setSelfExpand(false);
      setShowIndex(null); // Close the accordion when clicked again
    } 
    else{
      setShowIndex(); // Handle the first functionality
      setSelfExpand(true);
    }
  };

  return (
    <div>
        {/* Header */}
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                <span>
                  {showItems ? "⬇️" : "⬆️"}
                </span>
            </div>
            {/* Accordian Body */}
            {selfExpand && showItems && <ItemList items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory





