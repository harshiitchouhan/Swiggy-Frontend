import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer"
import { Link ,useNavigate} from "react-router";

export default function RestaurantMenu() {
  let { id } = useParams();

  const [menuData, setMenuData] = useState([]);
  const [restInfo, setRestInfo] = useState(null);
  const [selected, setSelected] = useState(null);
  const [sortBy, setSortBy] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://swiggy-swart-zeta.vercel.app/api/menu/${id}`);
      const data = await response.json();

      const info = data?.data?.cards?.[2]?.card?.card?.info;
      setRestInfo(info);

      const tempData =
        data?.data?.cards?.find((c) => c?.groupedCard)?.groupedCard
          ?.cardGroupMap?.REGULAR?.cards || [];

      const allCategories = tempData.filter(
        (items) =>
          items?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setMenuData(allCategories);
    }
    fetchData();
  }, [id]);

  if (menuData.length === 0) return <RestaurantMenuShimmer/> ;

  // sorting 
  const getSortedMenuData = () => {
  return menuData.map((category) => {
    const card = category?.card?.card;

    const sortedItems = [...(card?.itemCards || [])].sort((a, b) => {
      const priceA =
        (a?.card?.info?.price || a?.card?.info?.defaultPrice || 0) / 100;

      const priceB =
        (b?.card?.info?.price || b?.card?.info?.defaultPrice || 0) / 100;

      const ratingA = a?.card?.info?.ratings?.aggregatedRating?.rating || 0;
      const ratingB = b?.card?.info?.ratings?.aggregatedRating?.rating || 0;

      if (sortBy === "priceLowToHigh") return priceA - priceB;
      if (sortBy === "priceHighToLow") return priceB - priceA;
      if (sortBy === "rating") return ratingB - ratingA;

      return 0;
    });

    return {
      ...category,
      card: {
        ...category.card,
        card: {
          ...card,
          itemCards: sortedItems,
        },
      },
    };
  });
};

  const imgUrl = restInfo?.cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto:best,w_300,h_300,c_fill/${restInfo.cloudinaryImageId}`
    : null;

  return (
    <div>
      <div className="w-[80%] mx-auto mt-16">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 border p-2 rounded-xl hover:bg-gray-300 text-sm font-medium text-gray-700 hover:text-black transition"
          >
            ← Back to Restaurant
          </button>
        {/* ── Logo + Info ── */}
        <div className="flex gap-5 items-center mb-6">
          
          {imgUrl && (
            <img
              src={imgUrl}
              alt={restInfo?.name}
              className="w-28 h-28 rounded-2xl object-cover shrink-0 border border-gray-100"
            />
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold ">{restInfo?.name}</h1>
            <p className="text-sm text-gray-600 mb-2">
              {restInfo?.cuisines?.join(", ")}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
                ★ {restInfo?.avgRatingString}
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-600">{restInfo?.totalRatingsString}</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-600">
                ₹{restInfo?.costForTwoMessage || restInfo?.costForTwo}
              </span>
            </div>
          </div>
        </div>

        {/* ── Stats Box ── */}
        <div className="flex border border-gray-200 rounded-2xl mb-6 divide-x divide-gray-200">
          <div className="flex-1 text-center py-3">
            <p className="text-lg font-medium">{restInfo?.sla?.deliveryTime} mins</p>
            <p className="text-xs text-gray-400 mt-1">Delivery time</p>
          </div>
          <div className="flex-1 text-center py-3">
            <p className="text-lg font-medium">
              {restInfo?.sla?.lastMileTravelString || `${restInfo?.sla?.serviceability} km`}
            </p>
            <p className="text-xs text-gray-400 mt-1">Distance</p>
          </div>
          <div className="flex-1 text-center py-3">
            <p className="text-lg font-medium">₹40</p>
            <p className="text-xs text-gray-400 mt-1">Delivery fee</p>
          </div>
        </div>

        {/* ── Search ── */}
        <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center py-2 rounded-2xl bg-gray-300 text-xl mb-6">
            Search For Dishes
          </p>
        </Link>

        {/* ── Veg / Non-Veg ── */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            className={`text-lg w-30 text-green-800 border font-bold border-gray-400 rounded-lg py-1 mr-4 ${selected === "veg" ? "bg-green-600 text-white" : "bg-white"}`}
            onClick={() => setSelected(selected === "veg" ? null : "veg")}>
            Veg
          </button>

          <button
            className={`text-lg w-30 text-[#c53131] border font-bold border-gray-400 rounded-lg py-1 ${selected === "nonveg" ? "bg-red-500 text-white" : "bg-white"}`}
            onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}>
            Non Veg
          </button>

          {/* Sort */}
                    
          <button
              className={`text-sm sm:text-base px-5 py-2 border font-bold rounded-xl transition-all duration-200
              ${
                sortBy === "priceLowToHigh"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-orange-600 border-gray-300"
              }`}
              onClick={() =>
                setSortBy(sortBy === "priceLowToHigh" ? null : "priceLowToHigh")
              }
            >
            Cost: Low to High
            </button>

            <button
              className={`text-sm sm:text-base px-5 py-2 border font-bold rounded-xl transition-all duration-200
              ${
                sortBy === "priceHighToLow"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-orange-600 border-gray-300"
              }`}
              onClick={() =>
                setSortBy(sortBy === "priceHighToLow" ? null : "priceHighToLow")
              }
            >
            Cost: High to Low
            </button>

            <button
              className={`text-sm sm:text-base px-5 py-2 border font-bold rounded-xl transition-all duration-200
              ${
                sortBy === "rating"
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "bg-white text-yellow-600 border-gray-300"
              }`}
              onClick={() =>
                setSortBy(sortBy === "rating" ? null : "rating")
              }
            >
              Top Rated
            </button>

            {(sortBy || selected) && (
              <button
                className="text-sm sm:text-base px-5 py-2 border font-bold rounded-xl bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 transition-all duration-200"
                onClick={() => {
                  setSortBy(null);
                  setSelected(null);
                }}
              >
                Clear
              </button>
            )}
        </div>
    </div>
      

      {/*  Menu  */}
    <div className="w-[80%] mx-auto">
      {getSortedMenuData().map((menuItems) => (
        <MenuCard
          key={menuItems?.card?.card?.title}
          menuItems={menuItems?.card?.card}
          foodVN={selected}
        />
      ))}
    </div>

      <hr className="border-t-2 border-gray-200 my-6" />
    </div>
  );
}