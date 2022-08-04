
import React, {useState, useEffect} from "react";


import { motion } from "framer-motion";
import {Link } from 'react-router-dom'
import { MdOutlineClear } from "react-icons/md";

import Loader from "../components/Loader";


function Cart() {
  
  const [alertStatus, setAlertStatus] = useState("danger");
  const [showAlert, setShowAlert] =useState(false)
  const [showLoader, setShowLoader] = useState(false)

  const handleCoupon=()=>{
    setShowLoader(true)

    setTimeout(() => {
      setShowLoader(false)
      setShowAlert(true)
    }, 2000);
    setTimeout(() => {
      
      setShowAlert(false)
    }, 5000);
  }



  return (
    <div>
      <body className="bg-gray-100">
        <div className="container mx-auto mt-10">
          <div className="md:grid shadow-md my-10 lg:flex">
            <div className="lg:w-3/4 bg-white px-10 py-10 md:w-full w-full">

              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">3 Items</h2>
              </div>

              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {/* items start here #########################################################################*/}
              
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src=''
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">title</span>
                    <span className=" text-xs">desc</span>
                    <a
                      href="#"
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value="1"
                  />

                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $20
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $400.00
                </span>
              </div>
              
              

              

              <div className="flex justify-between">
                <Link to={'/menu'}>
                <motion.a whileTap={{scale:0.75}}
                href="#"
                className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </motion.a>
                </Link>
              

              <a
                href="#"
                className="flex font-semibold text-indigo-600 text-sm mt-10 items-center"
              >
                <MdOutlineClear className="fill-current mr-2 text-indigo-600 w-4 bold"/>
                Clear Cart
              </a>
              </div>
            </div>
            {/* summary begins here */}
            <div id="summary" className="lg:w-1/4 px-8 py-10 w-full lg:grid  ">
            
              <div>
              <h1 className="font-semibold text-2xl border-b pb-8">
                  Order Summary
                </h1>

                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">Items 3</span>
                  <span className="font-semibold text-sm">590$</span>
                </div>
              </div>
              <div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div>
                <div className={`w-full pt-5 -mb-9 text-center  justify-center items-center ${showLoader ? 'flex': 'hidden'} `}>
                <Loader />
                </div>
              
              <div className="py-10">
                
              <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className={`w-full p-1 text-center ${
                alertStatus === "danger"
                  ? "bg-red-400 text-red-800"
                  : "bg-emerald-400 text-emerald-800"
              } ${showAlert ? '': 'hidden'}`}
            >
              Code not valid
            </motion.p>
                <label
                  for="promo"
                  class="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  class="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" onClick={()=> handleCoupon()}>
                Apply
              </button>
              </div>
              </div>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>$600</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
{/* summary ends here */}




          </div>
          
        </div>
      </body>
    </div>
  );
}

export default Cart;
