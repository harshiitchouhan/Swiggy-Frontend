import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import Footer from "./Footer";
import { useNavigate } from "react-router";

export default function Restaurant() {
  const [restData, setrestData] = useState([]);
  const [title, setTitle] = useState("");
  const [nextOffset, setNextOffset] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function fetchRestaurants(offset = null) {
    setLoading(true);
    const url = offset
      ? `https://swiggy-frontend-160f2tjsm-harshit-s-projects2.vercel.app/api/restaurants?offset=${encodeURIComponent(offset)}`
      : "https://swiggy-frontend-160f2tjsm-harshit-s-projects2.vercel.app/api/restaurants";

    const response = await fetch(url);
    const data = await response.json();

    const titleCard = data?.data?.cards?.find(
      (c) => c?.card?.card?.id === "popular_restaurants_title"
    );
    const restaurantCard = data?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const newRests =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    const nextOff = data?.data?.pageOffset?.nextOffset || null;

    setTitle(titleCard?.card?.card?.title || "Restaurants near you");
    setrestData((prev) => (offset ? [...prev, ...newRests] : newRests));
    setNextOffset(nextOff);
    setLoading(false);
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  if (restData.length === 0) return <Shimmer />;

  return (
    <div className="bg-orange-200 min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10">
          
        <div className="max-w-6xl mx-auto ">

          <button
            onClick={() => navigate(-1)}
            className="mb-2 flex items-center gap-2 border p-2 rounded-xl hover:bg-gray-300 text-sm font-medium text-gray-700 hover:text-black transition"
          >
            ← Back to Home
          </button>

          {/* Heading */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
              {title}
            </h1>
            <p className="text-base text-gray-500 ">
              {restData.length} restaurants
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
            {restData.map((swiggydata,index) => (
              <RestCard key={`${swiggydata?.info?.id}-${index}`} swiggydata={swiggydata} />
            ))}
          </div>

          {/* Load More */}
          {nextOffset && (
            <div className="flex justify-center mt-10 mb-8">
              <button
                onClick={() => fetchRestaurants(nextOffset)}
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}

        </div>
      </div>
    <Footer />
    </div>
  );
}