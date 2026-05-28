import {dineoutRestaurants} from "../Utils/DineOut"
import { FaStar } from "react-icons/fa";

export default function DineItems()
{
    return (
        <div className="w-[80%] mx-auto mt-15 ">
            <p className=" text-black text-xl font-bold">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth mt-5 gap-5 mb-20">
                {
                    dineoutRestaurants.map((dinedata)=>
                        <div key={dinedata?.info?.id} className="max-w-sm shrink-0 border border-gray-100 rounded-xl">
                            <div className="relative">
                                <a href={dinedata?.cta.link} target="_blank">
                                <img className="rounded-t-xl  w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + dinedata?.info?.mediaFiles[0]?.url} alt="dineRestImage" />
                                </a>

                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                                <div className="absolute bottom-2 left-0 right-0 flex justify-between items-center px-3">

                                <p className="text-white font-bold truncate max-w-[70%]">
                                 {dinedata?.info?.name}
                                </p>

                                 <div className="flex items-center gap-1 bg-green-600 px-2 py-1 rounded-md text-white text-sm ">
                                 <FaStar className="text-xs" />
                                    {dinedata?.info?.rating?.value}
                                 </div>
                                 </div>
                            </div>

                        </div>

                        <div className="mt-3 px-2 space-y-1 mb-5  ">

                        <div className="flex justify-between text-xs text-gray-500">
                            
                            <p className="truncate">
                            {dinedata?.info?.cuisines?.join(" • ")}
                            </p>
                            <p>{dinedata?.info?.costForTwo}</p>
                        </div>

                        <div className="flex justify-between text-xs text-gray-500">
                            <p className="truncate">
                            {dinedata?.info?.locality}, {dinedata?.info?.locationInfo?.city?.name}
                            </p>
                            <p>{dinedata?.info?.locationInfo?.distanceString}</p>
                        </div>

                        </div>
                        </div>
                    )
                }
            </div>
        </div>      
    )
}