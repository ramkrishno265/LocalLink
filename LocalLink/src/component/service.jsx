import electrician from '../image/Service image/electrician.png'
import plumber from '../image/Service image/plamber.png'
import tutor from '../image/Service image/tutor.png'
import ac from '../image/Service image/ac.png'
import tv from '../image/Service image/cctv.png'
import computer from '../image/Service image/computer.png'
import Header from './header'

function Service() {
  return (
    <div className="bg-white">
      
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mt-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Popular Service Categories
        </h1>
        <p className="text-gray-600 font-medium text-sm md:text-lg mt-2">
          Explore the most requested services in your area.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition transform duration-300 text-center cursor-pointer">
          <img src={electrician} alt="Electrician" className="mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Electrician</h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Professional electrical repair and installation services.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition transform duration-300 text-center cursor-pointer">
          <img src={plumber} alt="Plumber" className="mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Plumber</h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Quick solutions for leaks, pipes, and bathroom fittings.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition transform duration-300 text-center cursor-pointer">
          <img src={tutor} alt="Home Tutor" className="mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Home Tutor</h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Experienced tutors for school and college students.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition transform duration-300 text-center cursor-pointer">
          <img src={ac} alt="AC Technician" className="mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">AC Technician</h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            AC installation, servicing, and cooling system repair.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition transform duration-300 text-center cursor-pointer">
          <img src={tv} alt="CCTV Installation" className="mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">CCTV Installation</h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Secure home and office surveillance setup.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition transform duration-300 text-center cursor-pointer">
          <img src={computer} alt="Computer Technician" className="mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Computer Technician</h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Hardware and software troubleshooting support.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Service;