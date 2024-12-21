import Image from "next/image"

function Login() {
    return(
        <div className="w-[100%]">   
        <div className="w-full h-[200px] sm:h-[200px] lg:h-[286px] bg-[#F6F5FF] mt-8">
            <div className="ml-10 sm:ml-10  lg:ml-56 mt-10 sm:mt-10 lg:mt-24 absolute">
           
                <h1 className="text-[#101750] text-3xl font-bold">My Account </h1>
                <div className="flex gap-2">
                    <p>Home.</p>
                    <p>.Page</p>
                    <p className="text-[#FB2E86]">.My Account</p>

                </div>
            </div>
            </div>

        {/* <div className="w-[544px] h-[474px] mx-auto"> */}
        <div className="max-w-4xl mx-auto px-4 mt-24 ">
            <div className="flex justify-center">
              <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg hover:border-blue-700">
              <h1 className="text-4xl font-semibold text-center mb-2">
            Login
            </h1>
            <p className="text-center pb-4 text-[#9096B2]">Please login using account detail bellow.</p>
                <form>
                  <div className="mb-6">
                    <label className="block  font-semibold" htmlFor="name">
                    </label>
                    <input
                      type="email"
                      id="name"
                      name="name"
                      
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Email Address"
                      required
                    />
                  </div>
    
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold" htmlFor="email">

                    </label>
                    <input
                      type="password"
                      id="email"
                      name="email"
                     
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Password"
                      required
                    />
                  </div>
    
                
    
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FB2E86] text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Sign In
                  </button>
                  <p className="text-center pt-5 text-[#9096B2]">Don’t have an Account?Create account</p>
                </form>
              </div>
            </div>
          </div>
          {/* logos */}
          <div className="flex justify-center mt-14">
             <Image src={"/logos.png"} alt="lamp-pic" width={904} height={93} className=""/>
             </div>
        </div>
        //    </div>
    )
}
export default Login