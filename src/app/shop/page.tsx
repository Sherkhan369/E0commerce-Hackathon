import Image from "next/image"

function Shop(){
    return(
        <div className="w-[100%]">
            <div className="w-full h-[200px] sm:h-[200px] lg:h-[286px] bg-[#F6F5FF] mt-8">
            <div className="ml-10 sm:ml-10  lg:ml-56 mt-10 sm:mt-10 lg:mt-24 absolute">
           
                <h1 className="text-[#101750] text-3xl font-bold">Shop List</h1>
                <div className="flex gap-2">
                    <p>Home.</p>
                    <p>.Page</p>
                    <p className="text-[#FB2E86]">.Shop List</p>

                </div>
            </div>
            </div>

            {/* Main body section */}
            <div className=" w-[370px] sm:w-[450px] md:w-[600px] lg:w-[950px] xl:w-[1171px] h-auto sm:h-auto md:h-auto lg:h-[50px] mx-auto block sm:block md:block lg:flex justify-center sm:justify-center md:justify-center lg:justify-between hover:border-2 border-[#c090ff] mt-14">
                <div>
                    <h1 className="text-[15px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#151875] font-medium">Ecommerce Acceories & Fashion item </h1>
                    <p className="text-[#8A8FB9] text-[12px] font-sans">About 9,620 results (0.62 seconds)</p>
                </div>
                <div className="block sm:block md:flex gap-5 justify-normal sm:justify-normal md:justify-normal lg:justify-center items-center">
                    <label htmlFor="Per Page"> Per Page:</label>
                    <input type="number" className="w-[55px] h-[25px] border border-[#E7E6EF]" />
                    <label htmlFor="Sort by">Sort By:</label>
                    <select className="w-[100px] h-[28px]  border border-[#E7E6EF]">
                        <option>Best Match</option>
                    </select>
                    
                    <div className="flex justify-normal sm:justify-normal md:justify-center  items-center gap-2">
                        <p>View:</p>
                    <div><Image src={"/menu1.png"} alt="" width={12} height={12}/></div>
                   <div> <Image src={"/menu2.png"} alt="" width={12} height={12}/></div>
                   <input type="text" className="w-[162px] h-7  border border-[#E7E6EF]"/>
                    </div>

                   
                    
                </div>
            </div>

            <div className="w-[314px] sm:w-[314px] md:w-[720px] lg:w-[1024px] xl:w-[1141px] mx-auto sm:mx-auto md:mx-auto lg:mx-auto space-y-5 mt-14">
                {/* Box 1 */}
                <div className="w-full h-auto sm:h-auto md:h-[200px] lg:h-[254px] xl:h-[254px] block sm:block md:flex lg:flex hover:border-2 border-[#33a8ff] xl:flex items-center gap-8 shadow-lg">
                    <div className="py-1 sm:py-1 md:py-2 lg:pl-4 xl:pl-4 px-1 sm:px-1 md:px-2 lg:px-0 xl:px-0">
                    <Image src={"/shop1.png"} alt="" width={313.63} height={217.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>
                    <div className=" lg:space-y-3 block items-center md:mt-3 ml-2 sm:ml-2">
                        <div className="flex gap-5 ">
                        <h1 className=" hover:border-b-2 border-[#33a8ff] text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-medium text-[#111C85]">Accumsan tincidunt</h1>
                        <div className="flex justify-center items-center gap-3">
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#DE9034] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#E60584] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#5E37FF] hover:border-2 border-[#33a8ff]"></div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="text-[#111C85] hover:border-b-2 border-[#33a8ff]">$26.00</p>
                            <p className="text-[#FF2AAA] hover:border-b-2 border-[#33a8ff]">$52.00</p>
                            <div className="flex gap-3 justify-center items-center">
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star1.png"} alt="" width={10.96} height={10.47}/></div>
                            </div>
                        </div>
                        <p className="text-[#9295AA]  hover:border-b-2 border-[#33a8ff] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing 
                            in phasellus non in justo.</p>
                            <Image src={"/icons.png"} alt="" width={144.67} height={34.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>

                </div>
              
               {/* Box 2 */}
               <div className="w-full h-auto sm:h-auto md:h-[200px] lg:h-[254px] xl:h-[254px] block sm:block md:flex lg:flex hover:border-2 border-[#33a8ff] xl:flex items-center gap-8 shadow-lg">
                    <div className="py-1 sm:py-1 md:py-2 lg:pl-4 xl:pl-4 px-1 sm:px-1 md:px-2 lg:px-0 xl:px-0">
                    <Image src={"/shop1.png"} alt="" width={313.63} height={217.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>
                    <div className=" lg:space-y-3 block items-center md:mt-3 ml-2 sm:ml-2">
                        <div className="flex gap-5 ">
                        <h1 className=" hover:border-b-2 border-[#33a8ff] text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-medium text-[#111C85]">Accumsan tincidunt</h1>
                        <div className="flex justify-center items-center gap-3">
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#DE9034] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#E60584] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#5E37FF] hover:border-2 border-[#33a8ff]"></div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="text-[#111C85] hover:border-b-2 border-[#33a8ff]">$26.00</p>
                            <p className="text-[#FF2AAA] hover:border-b-2 border-[#33a8ff]">$52.00</p>
                            <div className="flex gap-3 justify-center items-center">
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star1.png"} alt="" width={10.96} height={10.47}/></div>
                            </div>
                        </div>
                        <p className="text-[#9295AA]  hover:border-b-2 border-[#33a8ff] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing 
                            in phasellus non in justo.</p>
                            <Image src={"/icons.png"} alt="" width={144.67} height={34.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>

                </div>
               {/* Box 3 */}
               <div className="w-full h-auto sm:h-auto md:h-[200px] lg:h-[254px] xl:h-[254px] block sm:block md:flex lg:flex hover:border-2 border-[#33a8ff] xl:flex items-center gap-8 shadow-lg">
                    <div className="py-1 sm:py-1 md:py-2 lg:pl-4 xl:pl-4 px-1 sm:px-1 md:px-2 lg:px-0 xl:px-0">
                    <Image src={"/shop1.png"} alt="" width={313.63} height={217.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>
                    <div className=" lg:space-y-3 block items-center md:mt-3 ml-2 sm:ml-2">
                        <div className="flex gap-5 ">
                        <h1 className=" hover:border-b-2 border-[#33a8ff] text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-medium text-[#111C85]">Accumsan tincidunt</h1>
                        <div className="flex justify-center items-center gap-3">
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#DE9034] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#E60584] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#5E37FF] hover:border-2 border-[#33a8ff]"></div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="text-[#111C85] hover:border-b-2 border-[#33a8ff]">$26.00</p>
                            <p className="text-[#FF2AAA] hover:border-b-2 border-[#33a8ff]">$52.00</p>
                            <div className="flex gap-3 justify-center items-center">
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star1.png"} alt="" width={10.96} height={10.47}/></div>
                            </div>
                        </div>
                        <p className="text-[#9295AA]  hover:border-b-2 border-[#33a8ff] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing 
                            in phasellus non in justo.</p>
                            <Image src={"/icons.png"} alt="" width={144.67} height={34.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>

                </div>
               {/* Box 4 */}
               <div className="w-full h-auto sm:h-auto md:h-[200px] lg:h-[254px] xl:h-[254px] block sm:block md:flex lg:flex hover:border-2 border-[#33a8ff] xl:flex items-center gap-8 shadow-lg">
                    <div className="py-1 sm:py-1 md:py-2 lg:pl-4 xl:pl-4 px-1 sm:px-1 md:px-2 lg:px-0 xl:px-0">
                    <Image src={"/shop1.png"} alt="" width={313.63} height={217.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>
                    <div className=" lg:space-y-3 block items-center md:mt-3 ml-2 sm:ml-2">
                        <div className="flex gap-5 ">
                        <h1 className=" hover:border-b-2 border-[#33a8ff] text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-medium text-[#111C85]">Accumsan tincidunt</h1>
                        <div className="flex justify-center items-center gap-3">
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#DE9034] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#E60584] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#5E37FF] hover:border-2 border-[#33a8ff]"></div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="text-[#111C85] hover:border-b-2 border-[#33a8ff]">$26.00</p>
                            <p className="text-[#FF2AAA] hover:border-b-2 border-[#33a8ff]">$52.00</p>
                            <div className="flex gap-3 justify-center items-center">
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star1.png"} alt="" width={10.96} height={10.47}/></div>
                            </div>
                        </div>
                        <p className="text-[#9295AA]  hover:border-b-2 border-[#33a8ff] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing 
                            in phasellus non in justo.</p>
                            <Image src={"/icons.png"} alt="" width={144.67} height={34.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>

                </div>
               {/* Box 5 */}
               <div className="w-full h-auto sm:h-auto md:h-[200px] lg:h-[254px] xl:h-[254px] block sm:block md:flex lg:flex hover:border-2 border-[#33a8ff] xl:flex items-center gap-8 shadow-lg">
                    <div className="py-1 sm:py-1 md:py-2 lg:pl-4 xl:pl-4 px-1 sm:px-1 md:px-2 lg:px-0 xl:px-0">
                    <Image src={"/shop1.png"} alt="" width={313.63} height={217.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>
                    <div className=" lg:space-y-3 block items-center md:mt-3 ml-2 sm:ml-2">
                        <div className="flex gap-5 ">
                        <h1 className=" hover:border-b-2 border-[#33a8ff] text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-medium text-[#111C85]">Accumsan tincidunt</h1>
                        <div className="flex justify-center items-center gap-3">
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#DE9034] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#E60584] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#5E37FF] hover:border-2 border-[#33a8ff]"></div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="text-[#111C85] hover:border-b-2 border-[#33a8ff]">$26.00</p>
                            <p className="text-[#FF2AAA] hover:border-b-2 border-[#33a8ff]">$52.00</p>
                            <div className="flex gap-3 justify-center items-center">
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star1.png"} alt="" width={10.96} height={10.47}/></div>
                            </div>
                        </div>
                        <p className="text-[#9295AA]  hover:border-b-2 border-[#33a8ff] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing 
                            in phasellus non in justo.</p>
                            <Image src={"/icons.png"} alt="" width={144.67} height={34.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>

                </div>
               {/* Box 6 */}
               <div className="w-full h-auto sm:h-auto md:h-[200px] lg:h-[254px] xl:h-[254px] block sm:block md:flex lg:flex hover:border-2 border-[#33a8ff] xl:flex items-center gap-8 shadow-lg">
                    <div className="py-1 sm:py-1 md:py-2 lg:pl-4 xl:pl-4 px-1 sm:px-1 md:px-2 lg:px-0 xl:px-0">
                    <Image src={"/shop1.png"} alt="" width={313.63} height={217.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>
                    <div className=" lg:space-y-3 block items-center md:mt-3 ml-2 sm:ml-2">
                        <div className="flex gap-5 ">
                        <h1 className=" hover:border-b-2 border-[#33a8ff] text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-medium text-[#111C85]">Accumsan tincidunt</h1>
                        <div className="flex justify-center items-center gap-3">
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#DE9034] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#E60584] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#5E37FF] hover:border-2 border-[#33a8ff]"></div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="text-[#111C85] hover:border-b-2 border-[#33a8ff]">$26.00</p>
                            <p className="text-[#FF2AAA] hover:border-b-2 border-[#33a8ff]">$52.00</p>
                            <div className="flex gap-3 justify-center items-center">
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star1.png"} alt="" width={10.96} height={10.47}/></div>
                            </div>
                        </div>
                        <p className="text-[#9295AA]  hover:border-b-2 border-[#33a8ff] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing 
                            in phasellus non in justo.</p>
                            <Image src={"/icons.png"} alt="" width={144.67} height={34.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>

                </div>
             {/* Box 7 */}
             <div className="w-full h-auto sm:h-auto md:h-[200px] lg:h-[254px] xl:h-[254px] block sm:block md:flex lg:flex hover:border-2 border-[#33a8ff] xl:flex items-center gap-8 shadow-lg">
                    <div className="py-1 sm:py-1 md:py-2 lg:pl-4 xl:pl-4 px-1 sm:px-1 md:px-2 lg:px-0 xl:px-0">
                    <Image src={"/shop1.png"} alt="" width={313.63} height={217.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>
                    <div className=" lg:space-y-3 block items-center md:mt-3 ml-2 sm:ml-2">
                        <div className="flex gap-5 ">
                        <h1 className=" hover:border-b-2 border-[#33a8ff] text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-medium text-[#111C85]">Accumsan tincidunt</h1>
                        <div className="flex justify-center items-center gap-3">
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#DE9034] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#E60584] hover:border-2 border-[#33a8ff]"></div>
                                <div className="w-[12.15px] h-[12.15px] rounded-[50%] bg-[#5E37FF] hover:border-2 border-[#33a8ff]"></div>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <p className="text-[#111C85] hover:border-b-2 border-[#33a8ff]">$26.00</p>
                            <p className="text-[#FF2AAA] hover:border-b-2 border-[#33a8ff]">$52.00</p>
                            <div className="flex gap-3 justify-center items-center">
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star.png"} alt="" width={10.96} height={10.47}/></div>
                                <div className="w-[13.25px] h-[13.25px] hover:border-2 border-[#33a8ff]"> <Image src={"/star1.png"} alt="" width={10.96} height={10.47}/></div>
                            </div>
                        </div>
                        <p className="text-[#9295AA]  hover:border-b-2 border-[#33a8ff] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing 
                            in phasellus non in justo.</p>
                            <Image src={"/icons.png"} alt="" width={144.67} height={34.56} className="hover:border-2 border-[#33a8ff]"/>
                    </div>

                </div>
             {/* logos */}
              <div className="flex justify-center pt-20">
                          <Image src={"/logos.png"} alt="lamp-pic" width={904} height={93} className=""/>
                          </div>
            </div>

        </div>
    )
}
export default Shop