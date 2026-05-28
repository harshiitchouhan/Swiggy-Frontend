import { dineoutRestaurants } from "../Utils/DineOut";
import { FaStar,FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

export default function DineItems() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <div className="w-[80%] mx-auto mt-15">
      <p className="text-black text-xl font-bold">Discover best restaurants on Dineout</p>

      <div className="relative mt-5 mb-20">
        {/* Left Button */}
        <button onClick={() => scroll("left")}
          className="absolute -left-4 top-[40%] -translate-y-1/2 z-10 bg-[#0c1a30c2] border border-gray-300 shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200">
          <FaChevronLeft className="text-white text-sm" />
        </button>

        {/* Scroll Container */}
        <div ref={scrollRef} className="flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth gap-5">
          {dineoutRestaurants.map((dinedata) => (
            <div key={dinedata?.info?.id} className="max-w-sm shrink-0 border border-gray-100 rounded-xl">
              <div className="relative">
                <a href={dinedata?.cta.link} target="_blank">
                  <img
                    className="rounded-t-xl w-80 h-50 object-cover"
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/" + dinedata?.info?.mediaFiles[0]?.url}
                    alt="dineRestImage"
                  />
                </a>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-2 left-0 right-0 flex justify-between items-center px-3">
                    <p className="text-white font-bold truncate max-w-[70%]">
                      {dinedata?.info?.name}
                    </p>
                    <div className="flex items-center gap-1 bg-green-600 px-2 py-1 rounded-md text-white text-sm">
                      <FaStar className="text-xs" />
                      {dinedata?.info?.rating?.value}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 px-2 space-y-1 mb-5">
                <div className="flex justify-between text-xs text-gray-500">
                  <p className="truncate">{dinedata?.info?.cuisines?.join(" • ")}</p>
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
          ))}
        </div>

        {/* Right Button */}
        <button onClick={() => scroll("right")}
          className="absolute -right-4 top-[40%] -translate-y-1/2 z-10 bg-[#0c1a30c2] border border-gray-300 shadow-lg rounded-full w-10 h-10 flex items-center justify-center  hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200">
          <FaChevronRight className="text-white text-sm" />
        </button>
      </div>
    </div>
  );
}