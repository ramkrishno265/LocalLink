import search from '../image/search.png'
import review from '../image/review.png'
import compare from '../image/compear.png'

function LocalLink_work() {
  return (
    <div className="bg-gray-200 py-12 px-4">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          How <span className="text-blue-600">LocalLink</span> Works
        </h1>

        <p className="text-gray-600 mt-4 text-sm md:text-lg font-medium">
          Find trusted services in 3 steps
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-6 hover:shadow-lg hover:-translate-y-2 transition duration-300 text-center">
          <img className="mx-auto mb-4" src={search} alt="Search Service" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Search Service
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Find the service you need by searching or browsing nearby providers.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-6 hover:shadow-lg hover:-translate-y-2 transition duration-300 text-center">
          <img className="mx-auto mb-4" src={compare} alt="Compare Service" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Compare & Choose
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Check profiles, ratings, and reviews to select the right provider.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-6 hover:shadow-lg hover:-translate-y-2 transition duration-300 text-center">
          <img className="mx-auto mb-4" src={review} alt="Book Service" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Book & Review
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Contact the provider, complete the service, and share your feedback.
          </p>
        </div>

      </div>
    </div>
  )
}

export default LocalLink_work;