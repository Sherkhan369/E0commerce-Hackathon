import Image from "next/image"
function Footer() {
    return(
        <div className="w-full ]">
            <div className="w-full h-auto sm:h-auto md:h-auto xl:h-[400px] 2xl:h-[479px] bg-[#EEEFFB] block sm:block lg:flex justify-center pl-5 sm:pl-5 lg:justify-around mt-10 text-[#8A8FB9] ">
                <div className="space-y-3 mt-14">
                    <h1 className="text-2xl font-bold text-black">Hekto</h1>
                    <div className="flex mt-10">
                    <input type="search" placeholder="Enetr Email Address" className="w-[200px] h-[39px]"/>
                    <button className="w-[130px] h-[39px] text-white bg-[#FB2E86]">Sign Up</button>
                    </div>
                    <p>Contact</p>
                    <address>17 Princess Road, London, Greater London NW1 8JR, UK</address>
                </div>
                <div className="mt-14">
                    <h1 className="text-xl font-semibold text-black">Catagories</h1>
                    <ul className="space-y-3 mt-10">
                        <li>Laptops & Computers</li>
                        <li>Cameras & Photography</li>
                        <li>Smart Phones & Tablets</li>
                        <li>Video Games & Consoles</li>
                        <li>Waterproof Headphones</li>
                        
                    </ul>
                </div>
                <div className="mt-14 ">
                    <h1 className="text-xl font-semibold text-black">Customer Care</h1>
                    <ul className="space-y-3 mt-10">
                    <li>My Account</li>
                    <li>Discount</li>
                    <li>Returns</li>
                    <li>Returns</li>
                    <li>Order Tracking</li>
                    </ul>
                </div>
                <div className="mt-14 ">
                    <h1 className="text-xl font-semibold text-black">Pages</h1>
                    <ul className="space-y-3 mt-10">
                        <li>Blog</li>
                        <li>Browse the Shop</li>
                        <li>Category</li>
                        <li>Pre-Built Pages</li>
                        <li>Visual Composer Elements</li>
                        <li>WooCommerce Pages</li>
                        
                    </ul>
                </div>
            </div>
           <div className="bg-[#E7E4F8] h-[53px]">
            <div className="w-[80%] mx-auto flex justify-between items-center pt-[24px]">
                <div>©Webecy - All Rights Reserved</div>
                <div className="w-[80px] h-[19.42px]">
                    <Image src={"/icons1.png"} alt="" width={80} height={19}/>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Footer