
import Image from "next/image"
function Blog(){
    return(
        <div className="w-[100%] ">   
        <div className="w-full h-[200px] sm:h-[200px] lg:h-[286px] bg-[#F6F5FF] mt-8">
            <div className="ml-10 sm:ml-10  lg:ml-56 mt-10 sm:mt-10 lg:mt-24 absolute">
           
                <h1 className="text-[#101750] text-3xl font-bold">Blog Page</h1>
                <div className="flex gap-2">
                    <p>Home.</p>
                    <p>.Page</p>
                    <p className="text-[#FB2E86]">.Blog page</p>

                </div>
            </div>
            </div>
        {/* main body */}
        <div className="-[80%] min-h-screen mx-auto flex justify-center gap-10 ">
            <div className="w-[300px] sm:w-[300px] md:w-[500px] lg:w-[650px] mt-24">
                 <div className="space-y-5">
                <div className="w-full h-[250px] sm:h-[250px] md:h-[430px] bg-[url('/blog1.png')] bg-cover rounded-[6px]"></div>
                <div className="text-[#151875] flex gap-5 text-center">
                    <div className="bg-[#FFE7F9] w-[160px] h-[23px]"><p>Surf Auxion</p></div>
                    <div className="bg-[#FFECE2]  w-[160px] h-[23px]"><p>Aug 09 2020</p></div>
                </div>
                <h1 className="text-2xl font-medium text-[#151875]">Mauris at orci non vulputate diam tincidunt nec.</h1>
                <p className="text-[#8A8FB9] pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque,
                     porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                     <a href="#" className="text-[#151875] mt-5">Read More </a>
                </div>
                <div  className="space-y-5 mt-10">
                <div className="w-full h-[250px] sm:h-[250px] md:h-[430px] bg-[url('/blog2.png')] bg-cover rounded-[6px]"></div>
                <div className="text-[#151875] flex gap-5 text-center">
                <div className="bg-[#FFE7F9]  w-[160px] h-[23px]"><p>Surf Auxion</p></div>
                <div className="bg-[#FFECE2]  w-[160px] h-[23px]"><p>Aug 09 2020</p></div>
                </div>
                <h1 className="text-2xl font-medium text-[#151875]">Aenean vitae in aliquam ultrices lectus. Etiam.</h1>
                <p className="text-[#8A8FB9] pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque,
                     porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                     <a href="#" className="text-[#151875]">Read More </a>
                </div>
                <div  className="space-y-5 mt-10 ">
                <div className="w-full h-[250px] sm:h-[250px] md:h-[430px] bg-[url('/blog3.png')] bg-cover rounded-md"></div>
                <div className="text-[#151875] flex gap-5 text-center">
                <div className="bg-[#FFE7F9]  w-[160px] h-[23px]"><p>Surf Auxion</p></div>
                <div className="bg-[#FFECE2]  w-[160px] h-[23px]"><p>Aug 09 2020</p></div>
                </div>
                <h1 className="text-2xl font-medium text-[#151875]">Sit nam congue feugiat nisl, mauris amet nisi. </h1>
                <p className="text-[#8A8FB9] pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque,
                     porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                     <a href="#" className="text-[#151875]">Read More </a>
                </div>
            <div className="w-[236px] h-[24px] flex  gap-8 mx-auto mt-8 text-[#E0D3F5]">
                <div className="w-[32px] h-6 flex justify-center items-center border border-[#E0D3F5] bg-[#FB2CA8] text-white">1</div>
                <div className="w-[32px] h-6 flex justify-center items-center border border-[#E0D3F5]">2</div>
                <div className="w-[32px] h-6 flex justify-center items-center border border-[#E0D3F5]">3</div>
                <div className="w-[32px] h-6 flex justify-center items-center border border-[#E0D3F5]">4</div>
            </div>
 
            </div>
            <div className="hidden sm:hidden md:hidden lg:block w-[270px] mt-24">
                {/* left side box1 */}
                <div>
                    <h1 className="text-xl font-medium text-[#151875] ">Search </h1>
                   <div className="w-[270px] h-[40px] border border-[#BDBDD8] text-[#1518751A] flex items-center"> <input type="search" placeholder="Search For Posts" /></div>
                </div>
                 {/* left side box2 */}
                  <div>
                    <h1 className="text-xl font-medium text-[#151875] py-5">Categories</h1>
                    <div className="flex gap-10 text-[#3F509E]">
                        <ul>
                           <div className="w-[122px] h-7 bg-[#F939BF] text-white flex items-center rounded-sm"> <li>Hobbies (14)</li></div>
                            <li>Women (21)</li>
                            <li>Women (21)</li>
                        </ul>
                        <ul>
                            <li>Women (21)</li>
                            <li>Women (21)</li>
                            <li>Women (21)</li>
                        </ul>
                    </div>
                 </div> 
                  {/* left side box3 */}
             <div className="w-[310px] space-y-5">
                <h1 className="text-xl font-medium text-[#151875] py-5">Recent Post</h1>
             <div className="flex justify-center items-center gap-5">     
                    <div className="w-[100px] h-[74px] bg-[#F5F6F8]">
                    <Image src={"/blog4.png"} alt="lamp-pic" width={100} height={74} className=""/>
                    </div>
                    <div>
                    <p className="text-[#3F509E]">It is a long established fact</p>
                    <p className="text-[#8A8FB9]">Aug 09 2020</p> 
                    </div>
                    </div>
                    <div  className="flex justify-center items-center gap-5">     
                    <div className="w-[100px] h-[74px] bg-[#F5F6F8]">
                    <Image src={"/blog5.png"} alt="lamp-pic" width={100} height={74} className=""/>
                    </div>
                    <div>
                    <p className="text-[#3F509E]">It is a long established fact</p>
                    <p className="text-[#8A8FB9]">Aug 09 2020</p> 
                    </div>
                    </div>
                    <div  className="flex justify-center items-center gap-5">     
                    <div className="w-[100px] h-[74px] bg-[#F5F6F8]">
                    <Image src={"/blog6.png"} alt="lamp-pic" width={100} height={74} className=""/>
                    </div>
                    <div>
                    <p className="text-[#3F509E]">It is a long established fact</p>
                    <p className="text-[#8A8FB9]">Aug 09 2020</p> 
                    </div>
                    </div>
                    <div className="flex justify-center items-center gap-5">     
                    <div className="w-[100px] h-[74px] bg-[#F5F6F8]">
                    <Image src={"/blog7.png"} alt="lamp-pic" width={100} height={74} className=""/>
                    </div>
                    <div>
                    <p className="text-[#3F509E]">It is a long established fact</p>
                    <p className="text-[#8A8FB9]">Aug 09 2020</p> 
                    </div>
                    </div>
             </div>
              {/* left side box4 */}
              <div className="w-[310px] space-y-5">
                <h1 className="text-xl font-medium text-[#151875] py-5">Sale Product</h1>
             <div className="flex justify-center items-center gap-5">     
                    <div className="w-[100px] h-[74px] bg-[#F5F6F8]">
                    <Image src={"/blog8.png"} alt="lamp-pic" width={100} height={74} className=""/>
                    </div>
                    <div>
                    <p className="text-[#3F509E]">Elit ornare in enim mauris.</p>
                    <p className="text-[#8A8FB9]">Aug 09 2020</p> 
                    </div>
                    </div>
                    <div  className="flex justify-center items-center gap-5">     
                    <div className="w-[100px] h-[74px] bg-[#F5F6F8]">
                    <Image src={"/blog9.png"} alt="lamp-pic" width={100} height={74} className=""/>
                    </div>
                    <div>
                    <p className="text-[#3F509E]">Elit ornare in enim mauris.</p>
                    <p className="text-[#8A8FB9]">Aug 09 2020</p> 
                    </div>
                    </div>
                   
                    <div className="flex justify-center items-center gap-5">     
                    <div className="w-[100px] h-[74px] bg-[#F5F6F8]">
                    <Image src={"/blog10.png"} alt="lamp-pic" width={100} height={74} className=""/>
                    </div>
                    <div>
                    <p className="text-[#3F509E]">Elit ornare in enim mauris.</p>
                    <p className="text-[#8A8FB9]">Aug 09 2020</p> 
                    </div>
                    </div>
                    </div>
                    <h1 className="text-xl font-medium text-[#151875] py-5">Offer product</h1>
                    <div className="w-[267px] h-[282px] flex gap-5">
                      
                        <div>
                            <div className="w-[126px] h-[80px] bg-[url('/blog11.png')] bg-cover"></div>
                            <p className="text-[#151875]">Duis lectus est.</p>
                            <p className="text-[#8A8FB9]">$12.00 - $15.00</p>

                            <div className="w-[126px] h-[80px] bg-[url('/blog12.png')] bg-cover mt-5"></div>
                            <p className="text-[#151875]">Netus proin.</p>
                            <p className="text-[#8A8FB9]">$12.00 - $15.00</p>
                        </div>
                        <div>
                            <div className="w-[126px] h-[80px] bg-[url('/blog13.png')] bg-cover"></div>
                            <p className="text-[#151875]">Sed placerat..</p>
                            <p className="text-[#8A8FB9]">$12.00 - $15.00</p>

                            <div className="w-[126px] h-[80px] bg-[url('/blog14.png')] bg-cover mt-5"></div>
                            <p className="text-[#151875]">Platea in.</p>
                            <p className="text-[#8A8FB9]">$12.00 - $15.00</p>
                        </div>


                    </div>

                    <div className="w-[126px] h-[78px]">
                        <h1 className="text-xl font-medium text-[#151875] py-5">Follow</h1>
                        <div className="flex  gap-3 shadow-lg justify-center">
                <Image src={"/facebook.png"} alt="logo" height={25} width={25}/>
               
                <Image src={"/instagram.png"} alt="logo" height={25} width={25}/>
              
                <Image src={"/twitter.png"} alt="logo" height={25} width={25}/>
                
            </div>

                    </div>

                    <div className="w-[228px] h-[64px] mt-5">
                        <h1 className="text-xl font-medium text-[#151875] py-5">Tags</h1>
                        <div className="flex gap-8 text-[#3F509E]">
                            <p>General</p>
                            <p className="text-[#FB2E86]">Atsanil</p>
                            <p>Insas.</p>
                        </div>
                        <div className="flex gap-8 text-[#3F509E]">
                            <p>Bibsaas</p>
                            <p>Nulla.</p>
                        </div>
                    </div>
           </div>
                 </div>
                 <div className="flex justify-center mt-14">
             <Image src={"/logos.png"} alt="lamp-pic" width={904} height={93} className=""/>
             </div>
                 </div>
    )
}
export default Blog