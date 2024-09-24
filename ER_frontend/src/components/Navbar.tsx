import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication tokens or any other logout logic
        localStorage.removeItem('authToken');
        // Redirect to the login page
        navigate('/login');
    };
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <NavLink to="/" className="text-2xl font-bold">
                    Voicedrop
                </NavLink>
            </div>
            <div className="hidden md:flex items-center gap-x-5">
                {/* <NavLink to="/dashboard" className="hover:text-blue-400">
                    Dashboard
                </NavLink> */}
                {/* <NavLink to="/profile" className="hover:text-blue-400">
                    Profile
                </NavLink> */}
                {/* <NavLink to="/settings" className="hover:text-blue-400">
                    Settings
                </NavLink> */}
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div className="md:hidden flex items-center">
                <button className="text-white focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;