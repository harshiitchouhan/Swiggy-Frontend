import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

export default function RestaurantMenu() {
  let { id } = useParams();

  const [menuData, setMenuData] = useState([]);
  const [restInfo, setRestInfo] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:4000/api/menu/${id}`);
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

  if (menuData.length === 0) return <Shimmer />;

  const imgUrl = restInfo?.cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto:best,w_300,h_300,c_fill/${restInfo.cloudinaryImageId}`
    : null;

  return (
    <div>
      <div className="w-[80%] mx-auto mt-20">

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
            <h1 className="text-2xl font-semibold mb-1">{restInfo?.name}</h1>
            <p className="text-sm text-gray-500 mb-3">
              {restInfo?.cuisines?.join(", ")}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
                ★ {restInfo?.avgRatingString}
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">{restInfo?.totalRatingsString}</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">
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
        <div className="mb-8">
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
        </div>
      </div>

      {/* ── Menu ── */}
      <div className="w-[80%] mx-auto">
        {menuData.map((menuItems) => (
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