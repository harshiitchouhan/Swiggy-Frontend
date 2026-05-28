import { useState, useEffect } from "react";
import { useParams } from "react-router";
import FinalMenuCard from "./FinalMenuCard";

export default function SearchFood() {
  const { id } = useParams();

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // API call after debounce
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://swiggy-swart-zeta.vercel.app/api/menu/${id}/search?q=${debouncedSearch}`
        );

        const data = await response.json();

        setAllItems(data.items || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [debouncedSearch, id]);

  return (
    <div className="w-[80%] mx-auto mt-10">
      <input
        className="w-full py-3 bg-gray-300 rounded-md pl-5 border-2 border-blue-700 outline-none"
        type="text"
        placeholder="Search For Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mt-8">
        {loading && (
          <p className="text-center text-gray-500">Searching...</p>
        )}

        {!loading &&
          allItems.length > 0 &&
          allItems.map((item) => (
            <FinalMenuCard
              key={item?.card?.info?.id}
              item={item?.card?.info}
            />
          ))}

        {!loading && debouncedSearch && allItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No dishes found
          </p>
        )}
      </div>
    </div>
  );
}