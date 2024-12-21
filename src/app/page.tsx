import Hero from "./hero/page";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full">
     <Hero/>
    

     <div className="w-[80%] mx-auto mt-14">
        {/* section 1 */}
    
      <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold text-center">Featured Products</h1>
      
     <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  gap-7   justify-center mt-10 text-center  ">
          <div className="w-[250px] h-[300px] shadow-xl rounded-lg border-2 hover:border-[#9c51fe]">
            <div className="w-[250px] h-[200px]  bg-[#F2F0FF] ">
              <div className="flex justify-center items-center">
              <Image src={"/chair1.png"} alt="lamp-pic" width={165} height={165}/>
              </div>
            </div>
            
            <p className="text-[#FB2E86]">Cantilever chair</p>
              <Image src={"/Group 141.png"} alt="lamp-pic" width={52} height={4} className=" ml-24"/>
              <p className="text-[#151875]">Code - Y523201</p>
              <p  className="text-[#151875]">$42.00</p>
              
          </div>
          <div className="w-[250px] h-[300px]  shadow-xl rounded-lg border-2 hover:border-[#9c51fe]">
          <div className="w-[250px] h-[200px] rounded-sm bg-[#F2F0FF]">
          <div className=" flex justify-center items-center">
              <Image src={"/chair2.png"} alt="lamp-pic" width={165} height={165} className="ml-[70px]"/>
              </div>
          </div>
          <p  className="text-[#FB2E86]">Cantilever chair</p>
              <Image src={"/Group 141.png"} alt="lamp-pic" width={52} height={4} className="ml-24"/>
              <p  className="text-[#151875]">Code - Y523201</p>
              <p  className="text-[#151875]">$42.00</p>
          </div>
          <div className="w-[250px] h-[300px]  shadow-xl rounded-lg border-2 hover:border-[#9c51fe]">
          <div className="w-[250px] h-[200px] rounded-sm bg-[#F2F0FF]">
          <div className=" flex justify-center items-center">
              <Image src={"/chair3.png"} alt="lamp-pic" width={165} height={165} className=" ml-[70px]"/>
              </div>
          </div>
          <p  className="text-[#FB2E86] hover:text-white">Cantilever chair</p>
              <Image src={"/Group 141.png"} alt="lamp-pic" width={52} height={4} className="ml-24"/>
              <p  className="text-[#151875]">Code - Y523201</p>
              <p  className="text-[#151875]">$42.00</p>
          </div>
          <div className="w-[250px] h-[300px]  shadow-xl rounded-lg border-2 hover:border-[#9c51fe]">
          <div className="w-[250px] h-[200px] rounded-sm bg-[#F2F0FF]">
          <div className="flex justify-center items-center">
              <Image src={"/chair4.png"} alt="lamp-pic" width={165} height={165} className="ml-[70px]"/>
              </div>
          </div>
          <p  className="text-[#FB2E86]">Cantilever chair</p>
              <Image src={"/Group 141.png"} alt="lamp-pic" width={52} height={4} className="ml-24 " />
              <p  className="text-[#151875]">Code - Y523201</p>
              <p  className="text-[#151875]">$42.00</p>
          </div>
        </div>
        {/* End of main body section 1 */}

        {/* main body section 2 */}

        <div className="text-center mt-40 text-[#151875]">
            <h1 className="md:text-3xl font-bold ">Latest Products</h1>
            <div className="flex justify-center gap-10 mt-2">
                <p className="text-[#FB2E86]">New Arrival</p>
                <p>Best Seller</p>
                <p>Featured</p>
                <p>Special Offer</p>
            </div>
        </div>
        <div className="w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-8 justify-center mt-16">
           
        <div className="rounded-lg  shadow-xl w-[300px] sm:w-[345px] md:w-[300px] lg:w-[345px] h-[250px] sm:h-[306px] border-2 hover:border-[#9c51fe]">
          <div className="bg-[#F2F0FF]  w-full h-[200px] sm:h-[269px] flex justify-center">
                     <Image src={"/chair5.png"} alt="chair-pic" height={229} width={223}/>
                     </div>
                     <div className="flex justify-between bg-white mt-3">
                      <p className="text-[#151875] font-thin">Comfort Handy Craft</p>
                      <div className="flex gap-2">
                     <p className="text-[#151875]">$42.00 </p>
                     <p className="text-[#FB2448]"> <s>$65.00</s></p>
                     </div>
                     </div>
                 </div >

                 <div className="rounded-lg  shadow-xl w-[300px] sm:w-[345px] md:w-[300px] lg:w-[345px] h-[250px] sm:h-[306px] border-2 hover:border-[#9c51fe]">

          <div className="   w-full h-[200px] sm:h-[269px] flex justify-center">
                     <Image src={"/chair6.png"} alt="chair-pic" height={229} width={223}/>
                     </div>
                     <div className="flex justify-between bg-white mt-3">
                      <p className="text-[#151875] font-thin">Comfort Handy Craft</p>
                      <div className="flex gap-2">
                     <p className="text-[#151875]">$42.00 </p>
                     <p className="text-[#FB2448]"> <s>$65.00</s></p>
                     </div>
                     </div>
                 </div >

                <div className="rounded-lg  shadow-xl w-[300px] sm:w-[345px] md:w-[300px] lg:w-[345px] h-[250px] sm:h-[306px] border-2 hover:border-[#9c51fe]">
          <div className="bg-[#F2F0FF] w-full h-[200px] sm:h-[269px] flex justify-center">
                     <Image src={"/chair7.png"} alt="chair-pic" height={229} width={223}/>
                     </div>
                     <div className="flex justify-between bg-white mt-3">
                      <p className="text-[#151875] font-thin">Comfort Handy Craft</p>
                      <div className="flex gap-2">
                     <p className="text-[#151875]">$42.00 </p>
                     <p className="text-[#FB2448]"> <s>$65.00</s></p>
                     </div>
                     </div>
                 </div >

                 <div className="rounded-lg  shadow-xl w-[300px] sm:w-[345px] md:w-[300px] lg:w-[345px] h-[250px] sm:h-[306px] border-2 hover:border-[#9c51fe]">
          <div className="bg-[#F2F0FF]  w-full h-[200px] sm:h-[269px] flex justify-center">
                     <Image src={"/chair8.png"} alt="chair-pic" height={229} width={223}/>
                     </div>
                     <div className="flex justify-between bg-white mt-3">
                      <p className="text-[#151875] font-thin">Comfort Handy Craft</p>
                      <div className="flex gap-2">
                     <p className="text-[#151875]">$42.00 </p>
                     <p className="text-[#FB2448]"> <s>$65.00</s></p>
                     </div>
                     </div>
                 </div >

                 
                 <div className="rounded-lg  shadow-xl  w-[300px] sm:w-[345px] md:w-[300px] lg:w-[345px] h-[250px] sm:h-[306px] border-2 hover:border-[#9c51fe]">
          <div className="bg-[#F2F0FF]  w-full h-[200px] sm:h-[269px] flex justify-center">
                     <Image src={"/chair9.png"} alt="chair-pic" height={229} width={223}/>
                     </div>
                     <div className="flex justify-between bg-white mt-3">
                      <p className="text-[#151875] font-thin">Comfort Handy Craft</p>
                      <div className="flex gap-2">
                     <p className="text-[#151875]">$42.00 </p>
                     <p className="text-[#FB2448]"> <s>$65.00</s></p>
                     </div>
                     </div>
                 </div >

                 <div className="rounded-lg  shadow-xl w-[300px] sm:w-[345px] md:w-[300px] lg:w-[345px] h-[250px] sm:h-[306px] border-2 hover:border-[#9c51fe]">
          <div className="bg-[#F2F0FF]  w-full h-[200px] sm:h-[269px] flex justify-center">
                     <Image src={"/chair10.png"} alt="chair-pic" height={229} width={223}/>
                     </div>
                     <div className="flex justify-between bg-white mt-3">
                      <p className="text-[#151875] font-thin">Comfort Handy Craft</p>
                      <div className="flex gap-2">
                     <p className="text-[#151875]">$42.00 </p>
                     <p className="text-[#FB2448]"> <s>$65.00</s></p>
                     </div>
                     </div>
                 </div >
              </div>
              {/* section 3 */}
              
              <div className=" flex justify-center items-center mt-16">
      <h1 className="text-3xl font-bold text-[#151875]">What Shopex Offer!</h1>
      </div>
     <div className=" gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  mt-10 text-center  ">
          <div className="w-[250px] h-[300px] shadow-xl rounded-lg border-2 hover:border-[#9c51fe] ">
            <div className="w-[250px] h-[180px]">
              <div className=" flex justify-center items-center">
              <Image src={"/delivery.png"} alt="lamp-pic" width={65} height={65} className="mt-11"/>
              </div>
            </div>
           <h1 className="text-xl font-semibold text-[#151875]">24/7 Support</h1>
              <p className="text-[#1A0B5B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

          <div className="w-[250px] h-[300px]  shadow-xl rounded-lg border-2 hover:border-[#9c51fe]">
          <div className="w-[250px] h-[180px]  ">
          <div className=" flex justify-center">
              <Image src={"/cashback.png"} alt="lamp-pic" width={65} height={65} className="mt-11"/>
              </div>
          </div>
          <h1 className="text-xl font-semibold text-[#151875]">24/7 Support</h1>
          <p className="text-[#1A0B5B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="w-[250px] h-[300px]  shadow-xl rounded-lg border-2 hover:border-[#9c51fe]">
          <div className="w-[250px] h-[180px] rounded-sm ">
          <div className="flex justify-center">
              <Image src={"/medal.png"} alt="lamp-pic" width={65} height={65} className="mt-11"/>
              </div>
          </div>
          <h1 className="text-xl font-semibold text-[#151875]">24/7 Support</h1>
              <p className="text-[#1A0B5B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="w-[250px] h-[300px]  shadow-xl rounded-lg border-2 hover:border-[#9c51fe]">
          <div className="w-[250px] h-[180px] rounded-sm ">
          <div className=" flex justify-center">
              <Image src={"/time.png"} alt="lamp-pic" width={65} height={65} className="mt-11"/>
              </div>
          </div>
          <h1 className="text-xl font-semibold text-[#151875]">24/7 Support</h1>
          <p className="text-[#1A0B5B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>

          </div>
        </div>
              </div>
            
             {/* section 4 */}
             <div className="w-[100%] h-auto sm:h-auto md:h-auto lg:h-[500px] bg-[#F1F0FF] mt-16">
                <div className="w-[300px] sm:w-[350px] md:[500px] lg:w-[1050px] h-auto sm:h-auto md:h-auto lg:h-[500px] mx-auto items-center block sm:block md:block lg:flex justify-center gap-5 ">
                    <div className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[558px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-[url('/back.png')] bg-cover flex justify-end items-center">
                    <Image src={"/sofa.png"} alt="sofa-pic" width={450} height={400} className=""/>
                    </div>
                    <div className="mt-4 sm:mt-4 md:mt-8">
                        <h1 className="text-[#151875] font-semibold text-2xl">Unique Features Of leatest & <br />Trending Poducts</h1>
                        <ol className="text-[#ACABC3] list-disc mt-8 space-y-3">
                            <li>All frames constructed with hardwood solids and laminates</li>
                            <li>Reinforced with double wood dowels, glue, screw - nails corner Reinforced <br /> with double wood dowels, glue, screw - nails corner </li>
                            <li>Arms, backs and seats are structurally reinforced</li>
                        </ol>
                        <div className="flex gap-10 mt-10 pb-5 sm:pb-5 md:pb-5">
                            <button className="w-[157px] h-[45px] bg-[#FB2E86] rounded-lg text-white">Add To Cart</button>
                            <div className="text-[#151875] ">
                            <p>B&B Italian Sofa </p>
                            <p>$32.00</p>
                            </div>
                        </div>
                    </div>
                </div>

             </div>
             {/* section 5 */}
             <div className="w-[80%] mx-auto mt-16 text-[#151875]">
             <div className="w-[367] h-[42px] text-center">
      <h1 className="text-3xl font-bold">Trending Products</h1>
      </div>
     <div className="w-[100%] gap-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 text-center  ">
          <div className="w-[250px] h-[300px] shadow-xl rounded-lg border-2 hover:border-[#9c51fe] ">
            <div className="w-[250px] h-[200px] rounded-sm bg-[#F2F0FF]">
              <div className="w-[165px] h-[165px] flex justify-center hover:text-white">
              <Image src={"/chair11.png"} alt="lamp-pic" width={165} height={165} className="ml-[70px] "/>
              </div>
            </div>
            <p className="text-[#151875]">Cantilever chair</p>
            <div className="flex justify-center gap-5 ">
              <p className="text-[#151875]">$26.00 </p>
              <p  className="text-[#1518754D]"><s>$42.00</s></p>
              </div>

          </div>
          <div className="w-[250px] h-[300px]  shadow-xl rounded-lg border-2 hover:border-[#9c51fe]">
          <div className="w-[250px] h-[200px] rounded-sm bg-[#F2F0FF]">
          <div className="w-[165px] h-[165px] flex justify-center">
              <Image src={"/chair12.png"} alt="lamp-pic" width={165} height={165} className="ml-[70px]"/>
              </div>
          </div>
          <p className="text-[#151875]">Cantilever chair</p>
            <div className="flex justify-center gap-5 ">
              <p className="text-[#151875]">$26.00 </p>
              <p  className="text-[#1518754D]"><s>$42.00</s></p>
              </div>
          </div>
          <div className="w-[250px] h-[300px]  shadow-xl rounded-lg border-2 hover:border-[#9c51fe]">
          <div className="w-[250px] h-[200px] rounded-sm bg-[#F2F0FF]">
          <div className="w-[165px] h-[165px] flex justify-center">
              <Image src={"/chair13.png"} alt="lamp-pic" width={165} height={165} className=" ml-[70px]"/>
              </div>
          </div>
          <p className="text-[#151875]">Cantilever chair</p>
            <div className="flex justify-center gap-5 ">
              <p className="text-[#151875]">$26.00 </p>
              <p  className="text-[#1518754D]"><s>$42.00</s></p>
              </div>
          </div>
          <div className="w-[250px] h-[300px]  shadow-xl rounded-lg border-2 hover:border-[#9c51fe]">
          <div className="w-[250px] h-[200px] rounded-sm bg-[#F2F0FF]">
          <div className="w-[165px] h-[165px] flex justify-center">
              <Image src={"/chair14.png"} alt="lamp-pic" width={165} height={165} className="ml-[70px]"/>
              </div>
          </div>
          <p className="text-[#151875]">Cantilever chair</p>
            <div className="flex justify-center gap-5 ">
              <p className="text-[#151875]">$26.00 </p>
              <p  className="text-[#1518754D]"><s>$42.00</s></p>
              </div>
          </div>
        </div>
             </div>

             {/* section 6 */}
             <div className="w-[80%]  mx-auto block sm:block md:block lg:flex justify-center sm:justify-center gap-5 mt-14">
                <div className="w-[300px] sm:w-[300px] md:w-[420px] h-[270px] bg-[#FFF6FB] border-2 hover:border-[#199eff]">
                    <div className="mt-8 ml-5">
                    <h1 className="text-[#151875] text-xl font-medium">23% off in all products</h1>
                    <button className="text-[#FB2E86]">Shop Now</button>
                    </div>
                    <div className="flex justify-end">
                    <Image src={"/watch.png"} alt="lamp-pic" width={213} height={207} className=""/>
                    </div>
                </div>
                <div  className="w-[300px] sm:w-[300px] md:w-[420px] h-[270px] bg-[#EEEFFB] border-2 hover:border-[#199eff]">
                    <div className="mt-8 ml-5">
                <h1 className="text-[#151875] text-xl font-medium">23% off in all products</h1>
                <button className="text-[#FB2E86]">View Collection</button>
                </div>
                <div className="flex justify-end">
                    <Image src={"/daraz.png"} alt="lamp-pic" width={280} height={173} className=""/>
                    </div>
                </div>
                <div className="w-[300px] sm:w-[300px] md:w-[420px] h-[267px] space-y-6 mt-5 sm:mt-5">
                    <div className="flex justify-center items-center gap-5 border-2 hover:border-[#9c51fe]">     
                    <div className="w-[100px] h-[74px] bg-[#F5F6F8]">
                    <Image src={"/chair15.png"} alt="lamp-pic" width={67} height={67} className=""/>
                    </div>
                    <div>
                    <p>Executive Seat chair</p>
                    <p>$32.00</p> 
                    </div>
                    </div>
                    <div  className="flex justify-center items-center gap-5 border-2 hover:border-[#9c51fe]">     
                    <div className="w-[100px] h-[74px] bg-[#F5F6F8]">
                    <Image src={"/chair16.png"} alt="lamp-pic" width={67} height={67} className=""/>
                    </div>
                    <div>
                    <p>Executive Seat chair</p>
                    <p>$32.00</p> 
                    </div>
                    </div>
                    <div  className="flex justify-center items-center gap-5 border-2 hover:border-[#9c51fe]">     
                    <div className="w-[100px] h-[74px] bg-[#F5F6F8]">
                    <Image src={"/chair17.png"} alt="lamp-pic" width={67} height={67} className=""/>
                    </div>
                    <div>
                    <p>Executive Seat chair</p>
                    <p>$32.00</p> 
                    </div>
                    </div>
                </div>
             </div>

             <div className="w-[80%] mx-auto mt-16">
             <h1 className="text-3xl font-bold text-[#151875] text-center ml-24">Discount Item</h1>
                    <div className="flex justify-center gap-5">
                        <p className="text-[#FB4997]">Wood Chair</p>
                        <p className="text-[#151875]">Plastic Chair</p>
                        <p className="text-[#151875]">Sofa Colletion</p>
                    </div>
                    <div className="block sm:block md:block lg:flex justify-center gap-8 items-center px-10 mx-auto h-auto sm:h-auto ">
                        <div className="space-y-3 w-[300px] sm:w-[300px]">
                            <h1 className="text-[#151875] text-2xl font-medium">20% Discount Of All Products</h1>
                            <br />
                            <a className="text-[#FB4997] mt-3">Eams Sofa Compact</a>
                            <p className="text-[#B7BACB]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Eu eget <br /> feugiat habitasse nec, bibendum condimentum.</p>
                                 <div className="flex gap-10">
                                 <ol className="text-[#B7BACB] list-disc">
                                    <li>Material expose like metals</li>
                                    <li>Simple neutral colours.</li>
                                 </ol>
                                 <ol className="text-[#B7BACB] list-disc">
                                    <li>Clear lines and geomatric figures</li>
                                    <li>Material expose like metals</li>
                                 </ol>
                                 </div>
                                 <button className="w-[200px] h-[57px] bg-[#FB2E86] text-white ">Shop Now</button>
                        </div>
                        <div className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[350px] sm:h-[350px] md:[400px] lg:h-[450px] bg-[url('/back2.png')] bg-cover mt-4">
                        <Image src={"/sofa2.png"} alt="lamp-pic" width={472} height={472} />
                        </div>
                    </div> 
                    
                    

                {/* section 7 */}
                <h1 className="text-center text-3xl font-bold text-[#151875] mb-8 mt-20 sm:mt-20">Top Categories</h1>
                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4   justify-center gap-5 mt-4">
                    <div className="text-center">
                    <div className="w-[269px] h-[269px] rounded-[50%] bg-[#f6f7fb] flex justify-center items-center border-l-8 border-[#9575e5] shadow-md border-2 hover:border-[#9c51fe]">
                    <Image src={"/chair18.png"} alt="lamp-pic" width={178} height={178} className=""/>
                    </div>
                    <p>Mini LCW Chair</p>
                    <p>$56.00</p>
                    </div>
                    <div className="text-center">
                    <div className="w-[269px] h-[269px] rounded-[50%] bg-[#f6f7fb] flex justify-center items-center shadow-md border-2 hover:border-[#9c51fe]">
                    <Image src={"/chair1.png"} alt="lamp-pic" width={178} height={178} className=""/>
                    </div>
                    <p>Mini LCW Chair</p>
                    <p>$56.00</p>
                    </div>
                    
                    <div className="text-center">
                    <div className="w-[269px] h-[269px] rounded-[50%] bg-[#f6f7fb] flex justify-center items-center shadow-md border-2 hover:border-[#9c51fe]">
                    <Image src={"/chair11.png"} alt="lamp-pic" width={178} height={178} className=""/>
                    </div>
                    <p>Mini LCW Chair</p>
                    <p>$56.00</p>
                    </div>
                   
                    <div className="text-center">
                    <div className="w-[269px] h-[269px] rounded-[50%] bg-[#f6f7fb] flex justify-center items-center shadow-md border-2 hover:border-[#9c51fe]">
                    <Image src={"/chair18.png"} alt="lamp-pic" width={178} height={178} className=""/>
                    </div>
                    <p>Mini LCW Chair</p>
                    <p>$56.00</p>
                    </div>
                    
                </div>
               
             </div>
             <div className="w-full h-[400px] bg-[url('/back3.png')] bg-cover mt-10 border-2 hover:border-[#199eff]">
             <div className="w-[300px] sm:w-[350px] lg:w-[574px] h-[250px] flex justify-center items-center  mx-auto">
                <h1 className="text-[#151875] text-2xl font-semibold text-center mt-8">Get Leatest Update By Subscribe
                <br />0ur Newslater </h1>
             </div>
             <div className="w-[173px] h-[49px] bg-[#FB2E86] text-white flex justify-center mx-auto">
                <button>Shop Now</button>
             </div>
             </div>
             {/* logos */}
             <div className="flex justify-center mt-14">
             <Image src={"/logos.png"} alt="lamp-pic" width={904} height={93} className=""/>
             </div>
             {/* section 8 */}
             <h1 className="text-center text-4xl font-bold mt-10 text-[#151875]">Leatest Blog</h1>
             <div className="w-[80%] h-auto sm:h-auto md:h-auto lg:h-[493px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  gap-5 mt-16 ">
                <div className="shadow-lg w-[300px] sm:w-[300px] lg:w-[350px] border-2 hover:border-[#9c51fe]">
                <div className="w-[300px] sm:w-[300px] lg:w-[350px] h-[255px]  bg-[url('/back4.png')] bg-cover"></div>
                <div className="">
                    <div className="flex gap-5 p-4">
                        <p className="text-[#151875]">SaberAli</p>
                        <p className="text-[#151875]">21 August,2020</p>
                    </div>
                </div>
                <h1 className="text-[#151875] text-2xl font-semibold p-3">Top esssential Trends in 2021</h1>
                <p className="text-[#72718F] p-3 ">More off this less hello samlande lied much <br />over tightly circa horse taped mightly</p>
                <a href="#" className="text-[#151875] p-3">Read More</a>
                </div>
                <div className="shadow-lg w-[300px] sm:w-[300px] lg:w-[350px] border-2 hover:border-[#9c51fe]">
                <div className="w-[300px] sm:w-[300px] lg:w-[350px] h-[255px]  bg-[url('/back5.png')] bg-cover"></div>
                <div>
                <div className="flex gap-5 p-4">
                <p className="text-[#151875]">SaberAli</p>
                        <p className="text-[#151875]">21 August,2020</p>
                    </div>
                </div>
                <h1 className="text-[#FB2E86] text-2xl font-semibold p-3">Top esssential Trends in 2021</h1>
                <p className="text-[#72718F] p-3">More off this less hello samlande lied much <br />over tightly circa horse taped mightly</p>
                <a href="#" className="text-[#FB2E86] p-3">Read More</a>
                </div>
                <div className="shadow-lg w-[300px] sm:w-[300px] lg:w-[350px] border-2 hover:border-[#9c51fe]">
                <div className="w-[300px] sm:w-[300px] lg:w-[350px] h-[255px]  bg-[url('/back6.png')] bg-cover"></div>
                <div>
                <div className="flex gap-5 p-4 ">
                <p className="text-[#151875]">SaberAli</p>
                        <p className="text-[#151875]">21 August,2020</p>
                    </div>
                </div>
                <h1 className="text-[#151875] text-2xl font-semibold p-3">Top esssential Trends in 2021</h1>
                <p className="text-[#72718F] p-3">More off this less hello samlande lied much <br />over tightly circa horse taped mightly</p>
                <a href="#" className="text-[#151875] p-3">Read More</a>
                </div>
               
                </div>
             </div>
     
  );
}






