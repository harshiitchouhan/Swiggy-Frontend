import { instaItemsGrid } from "../Utils/Instamart";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function InstaItems() {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <>
      <h2 className="w-[80%] mx-auto mt-15 pb-6 text-black text-xl font-bold">
        Shop Groceries On Instamart
      </h2>

      <div className="max-w-[80%] mx-auto relative">
        {/* Left */}
        <button onClick={() => scroll("left")}
          className="absolute -left-4 top-[45%] -translate-y-1/2 z-10 bg-[#0c1a30c2] border border-gray-300 shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200">
          <FaChevronLeft className="text-white text-sm" />
        </button>

        <div ref={scrollRef} className="flex gap-8 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden">
          {instaItemsGrid.map((grocerydata) => (
            <div key={grocerydata.id} className="shrink-0">
              <img className="my-2 w-40 h-45 object-cover"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/" + grocerydata?.imageId}
                alt="groceryimage" />
              <h2 className="text-center font-bold text-gray-700 mt-1 h-10">
                {grocerydata?.action.text}
              </h2>
            </div>
          ))}
        </div>

        {/* Right */}
        <button onClick={() => scroll("right")}
          className="absolute -right-4 top-[45%] -translate-y-1/2 z-10 bg-[#0c1a30c2] border border-gray-300 shadow-lg rounded-full w-10 h-10 flex items-center justify-center  hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200">
          <FaChevronRight className="text-white text-sm" />
        </button>
      </div>
    </>
  );
}