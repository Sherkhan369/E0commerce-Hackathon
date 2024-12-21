import Link from "next/link";
import Image from "next/image";
function Navbar() {
  return (
    <div className="w-full mt-10">
      <div className="w-[80%] mx-auto hover:border-2 border-[#9747ff] block sm:block lg:flex justify-between items-center space-y-2 sm:space-y-2 md:space-y-2">
        <h1 className="text-[#0D0E43] text-2xl font-bold">Hekto</h1>
        <div className="text-[#0D0E43]">
          <ul className=" gap-5 flex ">
            <select>
              <option>Home</option>
              <option>About Us </option>
            </select>
            <li>Page</li>
            <li>Product</li>
            <Link href={"/blog"}>
              <li>Blog</li>
            </Link>
            <Link href={"/shop"}>
              <li>Shop</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="border-2 border-[#E7E6EF] flex justify-center items-center w-[300px]">
          <input
            type="search"
            placeholder="  What are you looking for"
            className="w-[250px]"
          />
          <div className="w-[51px] h-[34px] bg-[#FB2E86] flex justify-center items-center">
            <Image src={"/search.png"} alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
