import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
        toast.success("All carts are cleared!")
    }

  return (
    <div className='text-center m-4 p-4'>
      <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 bg-black text-white rounded-lg hover:bg-red-600' onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1 className =" text-center my-40 text-lg font-serif">Your cart is empty. Please add items to the cart!</h1>}
        <ItemList items={cartItems}/>
      </div>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </div>
  )
}

export default Cart




