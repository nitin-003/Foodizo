import React from 'react';
import Shimmer from './Shimmer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo == null) return <Shimmer/>;

    const { name, cuisines = [], costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
   // const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || [];

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.["card"]?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className='font-bold my-6 text-2xl'>{name || 'Restaurant Name'}</h1>
            <p className='font-bold text-xl'>{cuisines.join(", ")} - {costForTwoMessage || 'Cost details unavailable'}</p>
            
            {/* categories accordians*/}
            {categories.map((category, index) => (
                <RestaurantCategory 
                    key={category?.card?.card.title} 
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))};

        </div>
    );
};

export default RestaurantMenu;




