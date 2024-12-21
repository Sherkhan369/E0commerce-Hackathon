import Image from "next/image"

function ShopingCart(){
    return(
        <div className="w-full">
             <div className="w-full h-[200px] sm:h-[200px] lg:h-[286px] bg-[#F6F5FF] mt-8">
            <div className="ml-10 sm:ml-10  lg:ml-56 mt-10 sm:mt-10 lg:mt-24 absolute">
           
                <h1 className="text-[#101750] text-3xl font-bold">Shopping Cart</h1>
                <div className="flex gap-2">
                    <p>Home.</p>
                    <p>.Page</p>
                    <p className="text-[#FB2E86]">.Shopping Cart</p>

                </div>
            </div>
            </div>

            <div className="w-[80%] mx-auto block sm:block md:block  lg:flex justify-between mt-36">
                <div className="space-y-5 w-[300px] sm:w-[300px] md:w-[500px]  xl:w-[650px] 2xl:w-[718px]">
                <div>
                    <ul  className="flex justify-around text-xl text-[#1D3178] font-bold px-10 pb-5">
                        <li>Product</li>
                        <li className="ml-40">Price</li>
                        <li >Quantity</li>
                        <li>Total</li>
                    </ul>
                </div>
                <div  className="flex justify-evenly items-center border-b-2 py-5">
                    <div className="flex  items-center gap-4">
                       <div><Image src={"/cart1.png"} alt="" width={83} height={87} /></div> 
                       <div className="text-[#A1A8C1]">
                       <p className="text-black">Ut diam consequat</p>
                       <p >Color:Brown</p>
                       <p>Size:XL</p>
                       </div>
                       </div>
                    
                    <div><p className="text-[#15245E]">$32.00</p></div>
                    <div className="w-[51px] h-[15px] bg-[#F0EFF2] flex justify-center items-center"> 
                        <p>- | +</p>
                    </div>
                    <div>
                        <p className="text-[#15245E]">£219.00</p>
                    </div>
                </div>
                
                <div  className="flex justify-evenly items-center border-b-2 py-5">
                    <div className="flex  items-center gap-4">
                       <div><Image src={"/cart1.png"} alt="" width={83} height={87} /></div> 
                       <div className="text-[#A1A8C1]">
                       <p className="text-black">Ut diam consequat</p>
                       <p >Color:Brown</p>
                       <p>Size:XL</p>
                       </div>
                       </div>
                    
                    <div><p className="text-[#15245E]">$32.00</p></div>
                    <div className="w-[51px] h-[15px] bg-[#F0EFF2] flex justify-center items-center"> 
                        <p>- | +</p>
                    </div>
                    <div>
                        <p className="text-[#15245E]">£219.00</p>
                    </div>
                </div>
                
                <div  className="flex justify-evenly items-center border-b-2 py-5">
                    <div className="flex  items-center gap-4">
                       <div><Image src={"/cart1.png"} alt="" width={83} height={87} /></div> 
                       <div className="text-[#A1A8C1]">
                       <p className="text-black">Ut diam consequat</p>
                       <p >Color:Brown</p>
                       <p>Size:XL</p>
                       </div>
                       </div>
                    
                    <div><p className="text-[#15245E]">$32.00</p></div>
                    <div className="w-[51px] h-[15px] bg-[#F0EFF2] flex justify-center items-center"> 
                        <p>- | +</p>
                    </div>
                    <div>
                        <p className="text-[#15245E]">£219.00</p>
                    </div>
                </div>
                
                <div  className="flex justify-evenly items-center border-b-2 py-5 ">
                    <div className="flex  items-center gap-4">
                       <div><Image src={"/cart1.png"} alt="" width={83} height={87} /></div> 
                       <div className="text-[#A1A8C1]">
                       <p className="text-black">Ut diam consequat</p>
                       <p >Color:Brown</p>
                       <p>Size:XL</p>
                       </div>
                       </div>
                    
                    <div><p className="text-[#15245E]">$32.00</p></div>
                    <div className="w-[51px] h-[15px] bg-[#F0EFF2] flex justify-center items-center"> 
                        <p>- | +</p>
                    </div>
                    <div>
                        <p className="text-[#15245E]">£219.00</p>
                    </div>
                </div>
                
                <div  className="flex justify-evenly items-center border-b-2 py-5">
                    <div className="flex  items-center gap-4">
                       <div><Image src={"/cart1.png"} alt="" width={83} height={87} /></div> 
                       <div className="text-[#A1A8C1]">
                       <p className="text-black">Ut diam consequat</p>
                       <p >Color:Brown</p>
                       <p>Size:XL</p>
                       </div>
                       </div>
                    
                    <div><p className="text-[#15245E]">$32.00</p></div>
                    <div className="w-[51px] h-[15px] bg-[#F0EFF2] flex justify-center items-center"> 
                        <p>- | +</p>
                    </div>
                    <div>
                        <p className="text-[#15245E]">£219.00</p>
                    </div>
                </div>
                <div className="flex justify-between px-16 pt-16">
                    <div className="bg-[#FB2E86] text-white w-[134px] h-[39px] rounded-sm flex justify-center items-center"><button>Update Cart</button></div>
                    <div className="bg-[#FB2E86] text-white w-[134px] h-[39px] rounded-sm flex justify-center items-center"> <button> Clear Cart</button></div>
                </div>
                </div>
                {/* Right side box */}
                <div className="">
                    <h1 className="text-[#1D3178] font-bold text-xl px-5 pb-5 flex justify-center ">Cart Totals</h1>
                    <div className="w-[371px] h-[284px] bg-[#F4F4FC] px-4">
                        <div className="flex justify-between border-b-2 py-4">
                            <div className="text-[#1D3178] text-xl font-medium"><h1>Subtotals:</h1></div>
                            <div className="text-[#1D3178]"><p>£219.00</p></div>
                        </div>
                        
                        <div className="flex justify-between border-b-2 py-4">
                            <div className="text-[#1D3178] text-xl font-medium"><h1>Totals:</h1></div>
                            <div className="text-[#1D3178]"><p>£325.00</p></div>
                        </div>
                        <p className="text-[#8A91AB] text-sm pt-6">Shipping & taxes calculated at checkout</p>
                        <div className="w-[312px] h-[40px] bg-[#19D16F] rounded-md text-white flex justify-center items-center mt-10 mx-auto">
                            <button>Proceed to Checkout</button>
                        </div>
                    </div>
                    <h1 className="text-[#1D3178] font-bold text-xl px-5 pb-5 flex justify-center mt-8">Calculate Shopping</h1>
                <div className="w-[371px] h-[284px] bg-[#F4F4FC] px-4">
                        <div className="pt-6 border-b-2 text-[#C5CBE3]">
                            <h1>Bangladesh</h1>
                        </div>
                        
                        <div className="pt-6 border-b-2 text-[#C5CBE3]">
                           <h1>Mirpur Dhaka - 1200</h1>
                        </div>
                        <div className="pt-6 border-b-2 text-[#C5CBE3]">
                           <h1>Postal Code</h1>
                        </div>
                        
                        <div className="w-[179px] h-[40px] bg-[#FB2E86] rounded-md text-white mt-10 flex justify-center items-center">
                            <button>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
               
            </div>
             </div>
        
    )
}

export default ShopingCart