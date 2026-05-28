import { instaItemsGrid } from "../Utils/Instamart"

export default function InstaItems()
{
    return (
        <>
        <h2 className="w-[80%] mx-auto mt-15 pb-6 text-black text-xl font-bold">Shop Groceries On Instamart</h2>
        <div className="max-w-[80%] container mx-auto flex gap-8 overflow-x-auto no-scrollbar scroll-smooth  ">
            {
                instaItemsGrid.map((grocerydata)=>

                    <div key={grocerydata.id} className=" shrink-0 ">
                        
                    
                        <img  className="my-2 w-40 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + grocerydata?.imageId} alt="groceryimage" />
                        
                    
                    <h2 className="text-center font-bold text-gray-700 mt-1 h-10">{grocerydata?.action.text}</h2>

                    </div>

                )
            }
            
            

        </div>
        </>      
    )
}