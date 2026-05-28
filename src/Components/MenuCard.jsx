import { useState } from "react";
import FinalMenuCard from "./FinalMenuCard";


function MenuCard({menuItems ,foodVN}){

    const[isOpen,setIsOpen] = useState(true);

    if(foodVN==='veg'){
        return(
            <div className="w-full">

                <div className="flex justify-between  items-center w-full">
                    <p className="font-bold text-black text-xl  py-4 truncate ">{menuItems?.title}</p>
                    <button className="text-2xl mr-8  " onClick={()=>setIsOpen(!isOpen)}>{isOpen? '▲':'▼'}</button>
                </div>

        {isOpen && (

            <div>
                {
                    menuItems?.itemCards?.filter((food) => food?.card?.info?.itemAttribute?.vegClassifier === "VEG" ).map((item)=><FinalMenuCard key={item?.card?.info?.id} item={item?.card?.info}></FinalMenuCard>)
                }
            
            </div>

            )}
        

            <div className="bg-gray-200 h-5 mb-2 "></div>
            
    </div>
        )
    }


    if(foodVN==='nonveg'){
        return(
            <div className="w-full">

                <div className="flex justify-between  items-center w-full">
                    <p className="font-bold text-black text-xl  py-4 truncate ">{menuItems?.title}</p>
                    <button className="text-2xl mr-8  " onClick={()=>setIsOpen(!isOpen)}>{isOpen? '▲':'▼'}</button>
                </div>

        {isOpen && (

            <div>
                {
                    menuItems?.itemCards?.filter((food) => food?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ).map((item)=><FinalMenuCard key={item?.card?.info?.id} item={item?.card?.info}></FinalMenuCard>)
                }
            
            </div>

        )}
        

            <div className="bg-gray-200 h-5 mb-2 "></div>
            
    </div>
        )
    }
//     console.log(
//     menuItems?.itemCards?.map(
//     (item) => item?.card?.info?.itemAttribute?.vegClassifier
//   )
// );
  



    return(


        <div className="w-full">

        <div className="flex justify-between  items-center w-full">
            <p className="font-bold text-black text-xl  py-4 truncate ">{menuItems?.title}</p>
            <button className="text-2xl mr-8  " onClick={()=>setIsOpen(!isOpen)}>{isOpen? '▲':'▼'}</button>
        </div>

        {isOpen && (

            <div>
                {
                    menuItems?.itemCards?.map((item)=><FinalMenuCard key={item?.card?.info?.id} item={item?.card?.info}></FinalMenuCard>)
                }
            
            </div>

            )}
        

            <div className="bg-gray-200 h-5 mb-2 "></div>
            
    </div>
    
    );

    
    
           
    

}
export default MenuCard;