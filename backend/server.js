const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());

const LAT = "28.7069867";
const LNG = "77.1483667";

// const COOKIE = "__SW=9i3hGOU7oEzF6TK7zwkZcbA88GjHLp0T; _device_id=d0eeb768-2a58-0db6-fc15-8ca8142013d5; moe_uuid=11fc0f4a-aebb-461c-8929-a263c22950da; _swuid=d0eeb768-2a58-0db6-fc15-8ca8142013d5; userLocation={%22lat%22:%2228.7069867%22%2C%22lng%22:%2277.1483667%22%2C%22address%22:%22Block%20VP%2C%20Poorvi%20Pitampura%2C%20Pitampura%2C%20Delhi%2C%20110034%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; aws-waf-token=b9a6b9e4-f02b-4300-ae2c-ef6aff3c9cdd:BQoAY8ZDGtofAAAA:9k123LUQWKHXyyxyxBkh3a68tP+QcZWF0LkDAYXJiJp3PYe+NV9iju2fpVoyC2j+tMJeMWBLyc5UhOg8kUVkikMxH2A9uIqfRXSvEHFEVr8y62o+YlJUf1bvlRHX1Wjk9O/SvPECGEgpPk9sUBdRI+f38gA53deWp4R7YgTZhE75osLqjxb3m6OGvmLtqotXSWQDon/b8oGjZCYn7k5VAgDh1vDAph6j4WLSVIgB6Lau0aM3upA4; _ga=GA1.2.507953459.1752140049; _guest_tid=eyJLSUQiOiIyIiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3Nzk5NjM5OTIsImlhdCI6MTc3OTk2MDM5Miwic2Vzc2lvbl9kYXRhIjoiL3l3T0xObXR4NVZYWnZmWXV2YXBYZkJuMVQ2YmVDakg1NXpLVDVsTTg1cXBaM3hrS3VmQk9YZnhUejZmc1FKV1hVOUEvTS80dVpQRU80VmcrNVZqMndlTjVwQkVUbGFjK0R2QlVvU2liekhpWUMweTJuUXo4bU9VVWc1UVg2OFhqd05HY2FCM3JMeWpKbXlxQjUyTUJxdFB1U3BiVGs3Wk5MM1dySzUvQzh5VHBpTUQ5eVNuYXA4MWM3dUthekE1NDNUT0FxakZ3cFhPK0JpSkxLYnN0UT09Iiwic2lkIjoicmxxYWQyOWM5NDUtMjU2MS00ZTA4LTk2NzYtYjg4Zjk0MGFlIiwic3ViIjoiMDljNDQyYjQtYzliMC00ZmFlLTliMmMtNTE4MmYxMjdkMTYwIiwidXNlcl9pZCI6IjAifQ.7uK58LJahX3qjVRBNt6VVnbs7oaCvRCHH-wI4FLFWGo; _sid=rlqad29c945-2561-4e08-9676-b88f940ae";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Swiggy Fetcher

async function fetchSwiggy(url, retries = 3) {
  for (let i = 1; i <= retries; i++) {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://www.swiggy.com/",
        "Origin": "https://www.swiggy.com",
        "Content-Type": "application/json",
        //"Cookie": COOKIE,
      },
    });

    const text = await response.text();
    console.log(`Attempt ${i} | Status: ${response.status}`);

    if (response.status === 202 || !text) {
      await sleep(1000);
      continue;
    }

    if (!response.ok) throw new Error(`Swiggy API failed: ${response.status}`);

    return JSON.parse(text);
  }

  throw new Error("Swiggy returned empty response after retries");
}

//Helper: Menu Categories 

function extractCategories(data) {
  const cards = data?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  return cards.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
}

// Routes 

// Restaurant listing
app.get("/api/restaurants", async (req, res) => {
  try {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${LAT}&lng=${LNG}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
    const data = await fetchSwiggy(url, 3);
    res.json(data);
  } catch (err) {
    console.error("Restaurant API Error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Restaurant menu (categories)
app.get("/api/menu/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const url = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${LAT}&lng=${LNG}&restaurantId=${id}&submitAction=ENTER`;

    const data = await fetchSwiggy(url, 5);

    res.status(200).json(data);
  } catch (error) {
    console.log("Menu API Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch menu",
      error: error.message,
    });
  }
});

// Search dishes in a restaurant
app.get("/api/menu/:id/search", async (req, res) => {
  try {
    const { id } = req.params;

    const url = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${LAT}&lng=${LNG}&restaurantId=${id}&submitAction=ENTER`;

    const data = await fetchSwiggy(url, 5);

    const categories = extractCategories(data);

    const allItems = categories.flatMap(
      (cat) => cat?.card?.card?.itemCards || []
    );

    const seen = new Set();

    const uniqueItems = allItems.filter((item) => {
      const name = item?.card?.info?.name?.toLowerCase();

      if (!name) return false;

      if (seen.has(name)) return false;

      seen.add(name);
      return true;
    });


    // cheese pizza  , pizza chesse sab dega result 
   const query = req.query.q?.toLowerCase().trim() || "";

const result = query
  ? uniqueItems.filter((item) => {
      const itemName = item?.card?.info?.name?.toLowerCase() || "";

      const queryWords = query
        .split(" ")
        .filter((word) => word.trim() !== "");

      return queryWords.every((word) => itemName.includes(word));
    })
  : uniqueItems;

    res.json({ items: result });
  } catch (err) {
    console.error("Search API Error:", err.message);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


app.get("/", (req, res) => res.send("Swiggy proxy backend running ✅"));


const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
}

module.exports = app;