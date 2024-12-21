
function Contact(){
    return(
        <div className="w-[100%] h-auto">   
        <div className="w-full h-[200px] sm:h-[200px] lg:h-[286px] bg-[#F6F5FF] mt-8">
            <div className="ml-10 sm:ml-10  lg:ml-56 mt-10 sm:mt-10 lg:mt-24 absolute">
           
                <h1 className="text-[#101750] text-3xl font-bold">Contact Us</h1>
                <div className="flex gap-2">
                    <p>Home.</p>
                    <p>.Page</p>
                    <p className="text-[#FB2E86]">.Contact us</p>

                </div>
            </div>
            </div>
            {/* main body section */}
            <div className="w-[80%] mx-auto mt-10 sm:mt-10 lg:mt-24">
                {/* main box */}
                <div className="w-full block sm:block md:block lg:flex justify-between">
                    {/* left side box */}
                    <div className="w-[250px] sm:w-[250px] md:w-[300px] lg:w-[450px]">
                        <div className="space-y-5">
                        <h1 className="text-2xl font-semibold text-[#151875]">Information About us</h1>
                        <p className="text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Mattis neque ultrices mattis aliquam, malesuada diam est.
                              Malesuada sem tristique amet erat vitae eget dolor lobortis.
                             Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                             </div>

                             <div className="flex gap-5 pt-5">
                             <div className="w-[25px] h-[25px] rounded-[50%] bg-[#5625DF]"></div>
                             <div className="w-[25px] h-[25px] rounded-[50%] bg-[#FF27B7]"></div>
                             <div className="w-[25px] h-[25px] rounded-[50%] bg-[#37DAF3]"></div>
                             </div>
                    </div>
                      {/* left side box end*/}

                      {/* right side box*/}
                    <div>
                        <h1 className="text-2xl font-semibold text-[#151875] pt-4 sm:pt-4 md:pt-4">Contact Way</h1>
                        {/* main box */}
                        <div className="w-[250px] sm:w-[250px] md:w-[300px] lg:w-[450px] xl:w-[490px] h-auto sm:h-auto md:h-auto lg:h-[155px] block sm:block md:flex gap-5 mt-10">
                            <div className="space-y-8">
                                <div className="flex gap-5">
                                <div className="w-[45px] h-[45px] rounded-[50%] bg-[#5726DF]"></div>
                                <div className="text-[#8A8FB9]">
                                    <p>Tel: 877-67-88-99</p>
                                    <a href="mailto:shop@store.com">E-Mail:shop@store.com</a>
                                </div>
                                </div>
                                <div className="flex gap-5">
                                <div className="w-[45px] h-[45px] rounded-[50%] bg-[#FFB265]"></div>
                                <div className="text-[#8A8FB9]">
                                    <p>20 Margaret st, London</p>
                                  <p> Great britain, 3NM98-LK</p>
                                </div>
                                </div>
                            </div>
                            <div className="space-y-8 mt-4 sm:mt-4">
                                <div className="flex gap-5">
                                <div className="w-[45px] h-[45px] rounded-[50%] bg-[#FB2E86]"></div>
                                <div className="text-[#8A8FB9]">
                                    <p>Support Forum</p>
                                  <p> For over 24hr</p>
                                </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-[45px] h-[45px] rounded-[50%] bg-[#1BE982]"></div>
                                <div className="text-[#8A8FB9]">
                                    <p>Free standard shipping</p>
                                  <p> on all orders.</p>
                                </div> 
                                </div>
                            </div>
                            {/* right side box end*/}
                            
                        </div>
                    </div>
                </div>
                {/* second box */}
                <div className="block sm:block lg:flex mx-auto justify-between">
                <div className="w-[250px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-auto sm:h-auto xl:h-[500px]">
                    <h1  className="text-2xl font-semibold text-[#151875] pb-5 pt-4 sm:pt-4 md:pt-4">Get In Touch</h1>
                    <p className="text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
                         tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>

                         <form action="" className="space-y-6 mt-10 rounded-sm">
                            <div className="flex gap-5">
                            <input type="text"  className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[245px] h-[45px] border border-[#A4B6C8B2]" placeholder="  your Name*"/>
                            <input type="emai;" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[245px] h-[45px] border border-[#A4B6C8B2]" placeholder="  Your E-mail" />
                            </div>
                            <input type="text" className="w-[320px] sm:w-[370px] md:w-[420px] lg:w-[500px] h-[45px] border border-[#A4B6C8B2]" placeholder="  Subject*"/>
                            <textarea name="message" className="w-[320px] sm:w-[370px] md:w-[420px] lg:w-[500px] h-[166px] border border-[#A4B6C8B2]" placeholder="  Type Tour message*"></textarea>

                            <div className="w-[320px] sm:w-[320px] md:w-[157px] xl:w-[157px] h-11 bg-[#FB2E86] rounded-sm text-white mt-10 flex justify-center items-center">
                                <button>Send Mail</button>
                            </div>
                         </form>

                </div>
                <div className="w-[250px] sm:w-[300px] md:w-[350px] xl:w-[600px] h-[250px] sm:h-[300px] md:h-[350px] xl:h-[550px]  bg-[url('/contact1.png')] bg-cover mt-10 sm:mt-10">
                    
                </div>
                </div>
                </div>
        </div>
        );
        }
        export default Contact