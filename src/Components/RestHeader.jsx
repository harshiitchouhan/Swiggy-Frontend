import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function RestHeader() {

    const count = useSelector(state => state.cartSlicer.count);

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-20 py-3 bg-[#FF5200] gap-4 md:gap-0 text-white">

                <div>
                    <Link to="">
                        <img
                            className="bg-[#ff5200] h-11 w-36 mt-2 rounded-xl pr-1"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                            alt="logo"
                        />
                    </Link>
                </div>

                <div className="flex flex-wrap justify-center md:justify-end gap-x-6 md:gap-x-10 gap-y-3">

                    <div className="flex gap-x-2 items-center">
                        <FaBriefcase size={22} />
                        <span>Swiggy Corporate</span>
                    </div>

                    <div className="flex gap-x-2 items-center">
                        <FaTags size={22} />
                        <span>Offers</span>
                    </div>

                    <div className="flex gap-x-2 items-center">
                        <MdSupportAgent size={22} />
                        <span>Help</span>
                    </div>

                    <div className="flex gap-x-2 items-center">
                        <FaUserCircle size={22} />
                        <span>Sign In</span>
                    </div>

                    <Link to={"/checkout"}>
                        <div className="flex gap-x-2 items-center">
                            <FaShoppingCart size={22} />
                            <span>Cart ({count})</span>
                        </div>
                    </Link>

                </div>

            </div>
        </>
    );
}