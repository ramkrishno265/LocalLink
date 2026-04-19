function Hero() {
    return (
      <div className="px-4">
        <div className="py-16 md:py-24 flex flex-col items-center gap-8">
          
          {/* Title + Description */}
          <div className="text-center max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              Ready To Get Started with <br />
              <span className="text-blue-600">LocalLink?</span>
            </h1>
  
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Find trusted local services or grow your business with our reliable
              platform. We connect high-quality talent with the people who need it
              most.
            </p>
          </div>
  
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 text-center"
            >
              Find Services
            </a>
  
            <a
              href="#"
              className="border border-gray-600 text-blue-600 py-2 px-6 rounded-md hover:bg-green-700 hover:text-white text-center"
            >
              Join as a Provider
            </a>
          </div>
  
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full max-w-4xl">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">30k+</h1>
              <p className="text-gray-600 text-sm">PROVIDER</p>
            </div>
  
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">30k+</h1>
              <p className="text-gray-600 text-sm">USER</p>
            </div>
  
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">4.9/5</h1>
              <p className="text-gray-600 text-sm">RATING</p>
            </div>
  
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">24/7</h1>
              <p className="text-gray-600 text-sm">SUPPORT</p>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Hero;