import { useState } from "react";
import { addItems,incrementItems,decrementItems } from "../Stores/CartSlice";
import {useDispatch, useSelector} from "react-redux"

function FinalMenuCard({item}){

        const items = useSelector(state=>state.cartSlicer.items);
        const element = items.find(data=> data.id === item.id);
        const count = element?element.quantity:0;

        const dispatch = useDispatch();

    function HandleAddItems(){
        
        dispatch(addItems(item));

    }

    function handleIncrementItems(){
        
        dispatch(incrementItems(item));

    }

    function handleDecrementItems(){
        
        dispatch(decrementItems(item));

    }

    return(
        <>
<div className="flex flex-col sm:flex-row justify-between w-full mb-4 pb-4 gap-6">

  {/* LEFT SIDE */}
  <div className="w-full sm:w-[70%]">
    <p className="text-lg font-bold text-[#0e0e0fd5]">
      {item?.name}
    </p>

    <div>
      <span className="font-semibold">
        ₹ {Math.floor((item?.price || item?.defaultPrice) / 100)}
      </span>
      <span className="pl-1 text-sm font-semibold">🏷️</span>
      <span className="pl-1 text-sm font-semibold text-gray-700">
        {item?.offerTags?.[0]?.title} {item?.offerTags?.[0]?.subTitle}
      </span>
    </div>

    {/* Rating */}
    <div>
      <span className="text-sm font-bold text-green-600">★</span>
      <span className="text-sm font-bold text-green-600">
        {item?.ratings?.aggregatedRating?.rating || ""}
      </span>
      <span className="text-sm font-bold text-gray-500">
        {item?.ratings?.aggregatedRating?.ratingCountV2
          ? `(${item?.ratings?.aggregatedRating?.ratingCountV2})`
          : ""}
      </span>
    </div>

    <p className="text-[#02060C99] font-medium mt-2 line-clamp-3">
      {item?.description}
    </p>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full sm:w-[25%] relative flex justify-center sm:justify-end">
    <img
      className="w-full sm:w-40 h-40 object-cover rounded-xl"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item?.imageId}
      alt=""
    />

    {
      count === 0 ? (
        <button
          className="absolute w-24 shadow-xl text-green-500 font-bold -bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 px-2 py-2 rounded-lg bg-white hover:bg-gray-200 transition"
          onClick={HandleAddItems}
        >
          ADD
        </button>
      ) : (
        <div className="absolute flex items-center justify-evenly w-24 px-3 py-2 shadow-xl text-green-600 font-bold -bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 rounded-lg bg-white text-xl">
          <button onClick={handleDecrementItems}>-</button>
          <span>{count}</span>
          <button onClick={handleIncrementItems}>+</button>
        </div>
      )
    }
  </div>
</div>

        <hr className="mb-5 mt-5 text-gray-300" />

    </>
    )


}
export default FinalMenuCard;