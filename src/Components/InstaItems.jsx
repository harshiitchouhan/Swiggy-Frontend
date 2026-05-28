import { instaItemsGrid } from "../Utils/Instamart";
import { useRef } from "react";

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
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-gray-200 shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-50"
        >
          ‹
        </button>

        {/* Scroll Container */}
        <div ref={scrollRef} className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth">
          {instaItemsGrid.map((grocerydata) => (
            <div key={grocerydata.id} className="shrink-0">
              <img
                className="my-2 w-40 h-45 object-cover"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/" + grocerydata?.imageId}
                alt="groceryimage"
              />
              <h2 className="text-center font-bold text-gray-700 mt-1 h-10">
                {grocerydata?.action.text}
              </h2>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-gray-200 shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-50"
        >
          ›
        </button>
      </div>
    </>
  );
}