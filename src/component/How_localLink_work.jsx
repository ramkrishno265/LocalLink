import search from '../image/search.png'
import review from '../image/review.png'
import compare from '../image/compear.png'
function LocalLink_work() {
    return(
        <div>
            <div className="bg-gray-200 py-[50px]">
                <h1 className="text-4xl font-bold text-center text-gray-800">
                    How <span className="text-blue-600">LocalLink</span> Works
                </h1>
                <div className="w-[662px] mx-auto">
                    <p className="text-center text-gray-600 mt-4 text-xl font-medium">
                    Find trusted services in 3 steps
                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-[32px] justify-center mt-10">
                        <div className=" bg-white rounded-lg p-6 w-[270px] hover:shadow-lg translate-y-0 hover:translate-y-[-5px] transition-transform duration-300">
                            <img className="mx-auto rounded " src={search} alt="Search Service" />
                            <h1 className="text-2xl font-bold text-gray-800 text-center">Search Service</h1>
                            <p className="text-left text-gray-600 mt-4">
                            Find the service you need by searching or browsing nearby providers.
                            </p>
                        </div>
                        <div className=" bg-white rounded-lg p-6 w-[270px] hover:shadow-lg translate-y-0 hover:translate-y-[-5px] transition-transform duration-300">
                            <img className="mx-auto rounded " src={compare} alt="Search Service" />
                            <h1 className="text-2xl font-bold text-gray-800 text-center">Compare & Choose</h1>
                            <p className="text-left text-gray-600 mt-4">
                            Check profiles, ratings, and reviews to select the right provider.
                            </p>
                        </div>
                        <div className=" bg-white rounded-lg p-6 w-[270px] hover:shadow-lg translate-y-0 hover:translate-y-[-5px] transition-transform duration-300">
                            <img className="mx-auto rounded " src={review} alt="Search Service" />
                            <h1 className="text-2xl font-bold text-gray-800 text-center">Book & Review  </h1>
                            <p className="text-left text-gray-600 mt-4">
                            Contact the provider, complete the service, and share your feedback.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LocalLink_work;