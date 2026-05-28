function Footer() {

    return (
        <div>

            {/* App Banner */}
            <div className="mt-10 px-4">
                <img 
                    className="w-full object-cover"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" 
                    alt="get app" 
                />
            </div>

            {/* Main Footer Section */}
            <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly bg-gray-200 mt-16 px-6 py-10 gap-10">

                <div>
                    <img className="pt-4" src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="logo" />
                    <p className="my-2 text-gray-600 font-semibold">© 2025 Swiggy Limited</p>
                </div>

                <div className="py-6">
                    <p className="font-bold text-lg pb-2">Company</p>
                    <div className="space-y-2 text-gray-700 font-semibold">
                        <p>About Us</p>
                        <p>Swiggy Corporate</p>
                        <p>Careers</p>
                        <p>Team</p>
                        <p>Swiggy One</p>
                        <p>Swiggy Instamart</p>
                        <p>Swiggy Dineout</p>
                        <p>Minis</p>
                    </div>
                </div>

                <div className="py-6">
                    <p className="font-bold text-lg pb-2">Contact Us</p>
                    <div className="space-y-2 text-gray-600 font-semibold">
                        <p>Help & Support</p>
                        <p>Partner With Us</p>
                        <p>Ride With Us</p>
                    </div>

                    <div className="mt-8">
                        <p className="font-bold text-lg pb-2">Legal</p>
                        <div className="space-y-2 text-gray-600 font-semibold">
                            <p>Term & Conditions</p>
                            <p>Cookie Policy</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <p className="font-bold text-lg pb-2">Available in:</p>
                    <div className="space-y-2 text-gray-600 font-semibold">
                        <p>Banglore</p>
                        <p>Gurugaon</p>
                        <p>Delhi</p>
                        <p>Pune</p>
                        <p>Mumbai</p>
                        <p>Hyderabad</p>
                        <p>Lucknow</p>
                        <button className="border border-gray-400 px-2 py-1 rounded-lg text-sm w-full">
                            650+ cities
                        </button>
                    </div>
                </div>

                <div className="py-6">
                    <p className="font-bold text-lg pb-2">Life at Swiggy</p>
                    <div className="space-y-2 text-gray-600 font-semibold">
                        <p>Explore at Swiggy</p>
                        <p>Swiggy News</p>
                        <p>Snackables</p>
                    </div>

                    <div className="mt-8">
                        <p className="font-bold text-lg pb-2">Social Links</p>
                        <div className="flex gap-3 mt-1 flex-wrap">
                            <a href="">
                                <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg" alt="linkedin" />
                            </a>
                            <a href="">
                                <img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg" alt="instagram" />
                            </a>
                            <a href="">
                                <img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg" alt="facebook" />
                            </a>
                            <a href="">
                                <img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg" alt="pinterest" />
                            </a>
                            <a href="">
                                <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg" alt="twitter" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom App Download Section */}
            <div className="bg-gray-200 flex flex-col md:flex-row justify-center items-center gap-6 px-6 py-10 text-center md:text-left">
                <p className="font-bold text-[#02060CBF] text-xl md:text-3xl">
                    For better experience, download the Swiggy app now
                </p>

                <a target="_blank" href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920">
                    <img 
                        className="w-40 md:w-50"
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" 
                        alt="appstore" 
                    />
                </a>

                <a target="_blank" href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
                    <img 
                        className="w-40 md:w-50"
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" 
                        alt="playstore" 
                    />
                </a>
            </div>

            <div className="py-6 bg-gray-200 px-6">
                <hr className="text-gray-400" />
            </div>

        </div>
    );
}

export default Footer;