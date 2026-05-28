import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import Footer from "./Footer";

export default function Restaurant() {
  const [restData, setrestData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/api/restaurants");
      const data = await response.json();

      const titleCard = data?.data?.cards?.find(
        (c) => c?.card?.card?.id === "popular_restaurants_title"
      );

      const restaurantCard = data?.data?.cards?.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      setTitle(titleCard?.card?.card?.title || "Restaurants near you");

      setrestData(
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
          []
      );
    }

    fetchData();
  }, []);

  if (restData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="max-w-[80%] mx-auto mt-20">
        <p className="text-2xl font-bold mb-6 text-center">{title}</p>

        <div className="flex flex-wrap justify-center gap-6">
          {restData.map((swiggydata) => (
            <RestCard key={swiggydata?.info?.id} swiggydata={swiggydata} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}