import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        toast.success("Item added to cart!")
    }

  return (
    <div>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        {
            items.map((item) => (
                <div key={item.card.info.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                    <div className='w-10/12'>
                        <div className='py-2'>
                            <span>{item.card.info.name}</span>
                            <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
                        </div>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    <div className='w-2/12 p-4'>
                        <div className='absolute'>
                            <button 
                                className='p-2 mx-16 rounded-lg bg-black text-xs text-white shadow-lg hover:bg-red-400' 
                                onClick={() => handleAddItem(item)}
                            >
                                Add
                            </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} alt="images" className='w-full'/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ItemList






