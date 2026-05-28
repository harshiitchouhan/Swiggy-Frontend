import { Link } from "react-router";
import { MdSupportAgent } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";


export default function CartHeader(){
    return(
        <div className="flex justify-between items-center px-4 sm:px-10 md:px-20 py-3 bg-gray-300">
            
            <div>
                <Link to="">
                    <img
                        className="bg-[#ff5200] h-9 sm:h-11 w-28 sm:w-36 mt-2 rounded-xl pr-1"
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                        alt="logo"
                    />
                </Link>
            </div>

            <div className="flex gap-x-6 sm:gap-x-10 md:gap-x-20">

                <div className="flex gap-x-2 items-center">
                    <MdSupportAgent size={24}/>
                    <span className=" sm:inline">Help</span>
                </div>

                <div className="flex gap-x-2 items-center">
                    <FaUserCircle size={24}/>
                    <span className=" sm:inline">Sign In</span>
                </div>

            </div>

        </div>
    )
}