import Link from "next/link"
import Image from "next/image"
function Header(){
    return(
        <div className="w-full bg-[#7E33E0] hover:border-2 border-[#9747ff]">
            <div className="w-[80%] mx-auto bg-transparent h-11  md:flex justify-center sm:justify-center md:justify-center  lg:justify-between">
                <div className="hidden sm:hidden md:hidden lg:flex gap-5 text-white">
                <div className=" flex justify-center items-center gap-3"> 
                    <Image src={"/email.png"} alt="" width={14} height={11}/>
                    <a href="mailto:mhhasanul@gmail.com">mhhasanul@gmail.com</a>
                    </div>
                    <div className=" flex justify-center items-center gap-3">
                    <Image src={"/call.png"} alt="" width={16} height={16}/>
                    <p>(12345)6789</p>
                   
                    </div>
                </div>
                <div className="flex gap-5 text-white">
                <select className="bg-transparent">
                        <option>English</option>
                        <option className="bg-black">Arbic</option>
                        <option className="bg-black">Urdu</option>
                    </select>
                    <select className="bg-transparent">
                        <option>USD</option>
                        <option className="bg-black">PKR</option>
                        <option className="bg-black">ERU</option>
                    </select>
                    <div className="flex items-center">
                   <Link href={"/login"}> <a href="/login"> Login</a></Link>
                   <Image src={"/login.png"} alt="" width={16} height={16}/>
                   </div>
                   <div className="flex justify-center items-center gap-2">
                   <p>Wishlist</p>
                   <Image src={"/wish.png"} alt="" width={14} height={14}/>
                   </div>
                   <div className=" flex justify-center items-center">
                  <Link href={"/shoping_cart"}> <Image src={"/cart.png"} alt="" width={18} height={17}/></Link>
                   </div>
                </div>
            </div>
        </div>
        
    )
}
export default Header