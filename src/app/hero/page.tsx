import Image from "next/image";

function Hero() {
  return (
    <div className="w-[100%]  bg-[#F2F0FF]">
      <div className="w-[80%] sm:h-auto md:h-[500px] mx-auto sm:block md:flex justify-centergap-5 mt-12">
        <div className="w-[350px] h-[387]">
          <Image src={"/lamp.png"} alt="lamp-pic" width={350} height={387} />
        </div>

        <div className=" m md:mt-28 space-y-3">
          <p className="text-[#FB2E86]">Best furniture for your castle..</p>
          <h1 className="font-bold text-3xl">
            New Furniture Collection <br />
            Trends in 2020
          </h1>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>

          <div className="pt-8">
            <button className="w-[150px] h-12 rounded-lg bg-[#FB2E86] text-white">
              Shop Now
            </button>
          </div>
        </div>

        <div className="sm:w-[300px] md:w-[550px] 2xl:w-[706px] sm:h-[300px] md:h-[550px] 2x:h-[689px] md:mt-32">
          <Image
            src={"/sofa1.png"}
            alt="-pic"
            width={550}
            height={550}
            className=""
          />
        </div>
      </div>
      <div className="flex justify-center pb-10">
      <Image
            src={"/slide.png"}
            alt="-pic"
            width={66.07}
            height={14.6}
            className=""
          />
          </div>
    </div>
  );
}
export default Hero;
