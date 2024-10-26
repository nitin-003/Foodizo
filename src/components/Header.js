import React from 'react'
import { LOGO_URL } from '../utils/constants';
import { useState} from 'react';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
      <div className='flex my-auto'>
        <div className="logo-container">
          <img className="w-28" src={LOGO_URL} alt="App Logo"/>
        </div>
        <div className="flex my-10 font-bold text-lg font-serif">
          Foodizo
        </div>
      </div>
      <div className="flex items-center">
        <ul className='flex p-4 m-4'>
          <li className='p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded'>
            <Link to="/">Home</Link>
          </li>
          <li className='p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded'>
            <Link to="/about">About Us</Link>
          </li>
          <li className='p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded'>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className='flex p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded'>
            <Link to="/cart">
              <div className='px-4 flex'>
                <img src="https://static-00.iconduck.com/assets.00/cart-icon-2008x2048-3u2x72lr.png" alt="cart" className='w-5 flex'/>
                ({cartItems.length}) 
              </div>
            </Link>
          </li>
          <li className='flex p-2 text-small m-2 font-serif hover:bg-teal-700 hover:text-white cursor-pointer rounded'>
            <button className="login" 
              onClick={() => {btnNameReact === "Login" 
                ? setBtnNameReact("Logout") 
                : setBtnNameReact("Login")}}
            >
              {btnNameReact}
            </button>
          </li>       
        </ul>
      </div>
    </div>
  );
};

  
export default Header




