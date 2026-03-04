import electrician from '../image/Service image/electrician.png'
import plumber from '../image/Service image/plamber.png'
import tutor from '../image/Service image/tutor.png'
import ac from '../image/Service image/ac.png'
import tv from '../image/Service image/cctv.png'
import computer from '../image/Service image/computer.png'
function Service() {
    return(
        <div className="items-center justify-center">
            <div className="bg-white py-[50px] px-[230px]  items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-800 text-center">Popular Service Categories</h1>
                <p className="text-center text-gray-600 font-medium text-xl">Explore the most requested services in your area.</p>
                <div className="grid grid-cols-3 gap-4 mt-10 justify-items-center">
                    <div className=" mb-4 w-[270px] bg-gray-100 p-6 rounded-lg shadow-md hover:cursor-pointer hover:shadow-lg translate-y-0 hover:translate-y-[-5px] transition-transform duration-300">
                        <img src={electrician} alt="Electrician" />
                        <h2 className="text-2xl mt-4 font-bold text-gray-800 text-center"> Electrician</h2>
                        <p className="text-center text-gray-600 mt-4">Professional electrical repair and installation services.</p>
                    </div>
                    <div className=" mb-4 w-[270px] bg-gray-100 p-6 rounded-lg shadow-md hover:cursor-pointer hover:shadow-lg translate-y-0 hover:translate-y-[-5px] transition-transform duration-300">
                        <img src={plumber} alt="Electrician" />
                        <h2 className="text-2xl mt-4 font-bold text-gray-800 text-center"> Plumber</h2>
                        <p className="text-center text-gray-600 mt-4">Quick solutions for leaks, pipes, and bathroom fittings.</p>
                    </div>
                    <div className=" mb-4 w-[270px] bg-gray-100 p-6 rounded-lg shadow-md hover:cursor-pointer hover:shadow-lg translate-y-0 hover:translate-y-[-5px] transition-transform duration-300">
                        <img src={tutor} alt="Electrician" />
                        <h2 className="text-2xl mt-4 font-bold text-gray-800 text-center"> Home Tutor</h2>
                        <p className="text-center text-gray-600 mt-4">Experienced tutors for school and college students.</p>
                    </div>
                    <div className=" mb-4 w-[270px] bg-gray-100 p-6 rounded-lg shadow-md hover:cursor-pointer hover:shadow-lg translate-y-0 hover:translate-y-[-5px] transition-transform duration-300">
                        <img src={ac} alt="Electrician" />
                        <h2 className="text-2xl mt-4 font-bold text-gray-800 text-center"> AC Technician</h2>
                        <p className="text-center text-gray-600 mt-4">AC installation, servicing, and cooling system repair..</p>
                    </div>
                    <div className=" mb-4 w-[270px] bg-gray-100 p-6 rounded-lg shadow-md hover:cursor-pointer hover:shadow-lg translate-y-0 hover:translate-y-[-5px] transition-transform duration-300">
                        <img src={tv} alt="Electrician" />
                        <h2 className="text-2xl mt-4 font-bold text-gray-800 text-center"> CCTV Installation</h2>
                        <p className="text-center text-gray-600 mt-4">Secure home and office surveillance setup.</p>
                    </div>
                    <div className=" mb-4 w-[270px] bg-gray-100 p-6 rounded-lg shadow-md hover:cursor-pointer hover:shadow-lg translate-y-0 hover:translate-y-[-5px] transition-transform duration-300">
                        <img src={computer} alt="Electrician" />
                        <h2 className="text-xl mt-4 font-bold text-gray-800 text-center">  Computer Technician</h2>
                        <p className="text-center text-gray-600 mt-4">Hardware and software troubleshooting support.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service;