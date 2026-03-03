
function Hero() {
  return (
    <div>
      <div>
        <div className="py-[130px] items-center flex flex-col gap-[32px]">
            <div>
                <div>
                    <h1 className="text-4xl font-bold text-center text-gray-800">
                        Ready To Get Started with <br /> <span className="text-blue-600">LocalLink ?</span>
                    </h1>

                </div>
                <div className="w-[662px] mx-auto">
                    <p className="text-center text-gray-600 mt-4">
                    Find trusted local services or grow your business with our reliable
                    platform. We connect high-quality talent with the people who need it
                    most.
                    </p>
                </div>

            </div>
            <div>
                <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    Find Services
                </a>
                <a href="#" className="border border-gray-600 text-blue-600 py-2 px-4 rounded-md hover:bg-green-700 ml-4">
                    Join as a Provider
                </a>
            </div>
            <div className="flex items-center gap-[32px]">
                <div className="gap-[32px] items-center  text-center w-[200px]">
                    <h1 className="text-2xl font-bold text-gray-800">30k+</h1>
                    <p className="font-medium text-gray-600">PROVIDER</p>
                </div>
                <div className="gap-[32px] items-center  text-center w-[200px]">
                    <h1 className="text-2xl font-bold text-gray-800">30k+</h1>
                    <p className="font-medium text-gray-600">USER</p>
                </div>
                <div className="gap-[32px] items-center  text-center w-[200px]">
                    <h1 className="text-2xl font-bold text-gray-800">4.9/5</h1>
                    <p className="font-medium text-gray-600">RATING</p>
                </div>
                <div className="gap-[32px] items-center  text-center w-[200px]">
                    <h1 className="text-2xl font-bold text-gray-800">24/7cd</h1>
                    <p className="font-medium text-gray-600">SUPPORT</p>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}
export default Hero;