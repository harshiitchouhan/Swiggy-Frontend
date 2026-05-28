//1st div : navbar
//2nd div : order and search
//3rd div : components
import { IoLocationSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-[#ff5200] font-serif">

      {/* First Div - Navbar */}
      <div className="font-semibold text-white px-4 sm:px-6 md:px-12 lg:px-20 py-5 md:py-7">

        {/* Top Row */}
        <div className="flex items-center justify-between mb-6">

          {/* Logo */}
          <img
            className="h-10 sm:h-11 w-auto"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="Swiggy Logo"
          />

          {/* Sign In */}
          <a
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-black hover:bg-neutral-900 transition py-2 px-4 sm:px-5 text-sm sm:text-base"
          >
            Sign in
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">

          <Link
            to="/corporate"
            className="hover:text-orange-400 transition"
          >
            Swiggy Corporate
          </Link>

          <Link
            to="/partner"
            className="hover:text-orange-400 transition"
          >
            Partner with us
          </Link>

          <a
            target="_blank"
            rel="noreferrer"
            className="border border-white hover:bg-white hover:text-black transition rounded-xl py-2 px-4"
          >
            Get the App
          </a>
        </div>
      </div>

      {/* Second Div - Hero Section */}
      <div className="relative pt-12 md:pt-16 pb-8">

        {/* Side Images (Hidden on Mobile) */}
        <img
          className="hidden md:block h-100 lg:h-125 w-auto absolute left-0 top-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="veggies image"
        />

        <img
          className="hidden md:block h-100 lg:h-125 w-auto absolute right-0 top-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="sushi image"
        />

        <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[43px] text-white max-w-[95%] md:max-w-[60%] mx-auto text-center py-4">
          Order food & groceries. Discover best restaurants. Swiggy it!

          {/* Search Section */}
          <div className="max-w-[95%] md:max-w-[90%] flex flex-col md:flex-row gap-4 mx-auto mt-6 relative">

            <div className="relative w-full md:w-[40%]">
              <IoLocationSharp className="absolute left-4 top-4 text-[#ff5200] text-xl h-6 w-6" />
              <input
                className="bg-white w-full text-black font-bold text-lg pl-12 pr-4 py-3 rounded-xl placeholder:text-gray-500"
                placeholder="Delhi, India"
              />
            </div>

            <div className="relative w-full md:w-[65%]">
              <FiSearch className="absolute left-4 top-4 text-[#817e7e] text-xl h-6 w-6" />
              <input
                className="bg-white w-full text-black font-semibold text-lg pl-12 pr-4 py-3 rounded-xl placeholder:text-gray-400"
                placeholder="Search for restaurant, item or more"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Third Div - Service Cards */}
      <div className="max-w-[95%] md:max-w-[80%] mx-auto flex flex-col md:flex-row gap-6 justify-center items-center pb-10">

        <Link to="/restaurant">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt="food delivery"
          />
        </Link>

        <Link to="/instamart">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
            alt="instamart"
          />
        </Link>

        <Link to="/dineout">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
            alt="dineout"
          />
        </Link>

      </div>

    </header>
  );
}

export default Header;