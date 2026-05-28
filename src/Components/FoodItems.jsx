import { imageCardGrids } from "../Utils/FoodName";
import { Link } from "react-router";

export default function FoodItems()
{
    return (
        <>
        <h2 className="w-[80%] mx-auto mt-15  text-black text-xl font-bold">Order our best food options</h2>
        <div className="max-w-[80%] container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 ">
            
            {
                imageCardGrids.map((foodData)=>

                    <div key={foodData?.id}>

                    <Link to="/collections">
                        <img className="w-full " src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId } alt="foodImage" />
                    </Link>
                    </div>
                )
            }

        </div>
        
        </>      
    )
}