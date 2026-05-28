import { Link } from "react-router";

export default function RestCard({swiggydata}){
return(

     <Link to={"/city/delhi/" + swiggydata?.info?.id}>
     <div className="w-full transform transition duration-250 hover:scale-90">     <div className="relative">
     <img className="w-full h-32 sm:h-40 md:h-45 object-cover rounded-2xl" 
     src={"https://media-assets.swiggy.com/swiggy/image/upload/" + swiggydata?.info?.cloudinaryImageId} alt="RestImage" />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent rounded-2xl">
          <p className="absolute bottom-2 left-4 text-white font-bold">
               {swiggydata?.info?.aggregatedDiscountInfoV3?.header} {swiggydata?.info?.aggregatedDiscountInfoV3?.subHeader}
               
          </p>
          </div>
     
     </div>
     <div >
     <p className="text-black font-bold text-sm sm:text-base pl-1 pt-2 truncate">{swiggydata?.info?.name}</p>
          <p className="text-black font-semibold text-sm sm:text-base pl-1 flex items-center gap-1 whitespace-nowrap overflow-hidden">
               <span className="text-green-700 text-base">★</span>
               {swiggydata?.info?.avgRatingString} • {swiggydata?.info?.sla?.slaString}
          </p>
          <p className="text-gray-600 text-xs sm:text-base pl-1 truncate">
               {swiggydata?.info?.cuisines?.join(", ")}
     </p>   
          <p className="text-gray-600 text-xs sm:text-base pl-1 truncate">{swiggydata?.info?.areaName}</p>
     </div>
     
          
     </div>
     </Link>

)
}