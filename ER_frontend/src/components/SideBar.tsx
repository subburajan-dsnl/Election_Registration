
import { NavLink } from "react-router-dom"
const MenuItems = [
    {
        title: 'Make New Voicedrop',
        url: '/bookvoicedrop',
        icon: 'fa-solid fa-book',
        cName: 'nav-text'
    },
    {
        title: 'current Voicedrop',
        url: '/currentvoicedrop',
        icon: 'fa-solid fa-chart-line',
        cName: 'nav-text'
    },
    {
        title: 'History',
        url: '/history',
        icon: 'fa-solid fa-clock-rotate-left',
        cName: 'nav-text'
    },

]


const Sidebar = () => {
    return <>
        <aside className="h-screen w-64 bg-gray-800 text-blue-500 flex flex-col">
            <div className="p-4">
                <h1 className="text-center text-white text-2xl font-bold">
                    <NavLink to="/dashboard">
                        VDCC
                    </NavLink>
                </h1>
            </div>
            <hr className="border-gray-700" />
            <ul className="mt-4 flex-grow">
                {MenuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.url}
                        className={({ isActive }) =>
                            isActive ? 'flex items-center p-2 bg-gray-700 text-blue-400' : 'flex items-center p-2 text-white hover:bg-gray-700'
                        }
                    >
                        <li className="flex items-center w-full">
                            <i className={`${item.icon} mr-4`}></i>
                            {item.title}
                        </li>
                    </NavLink>
                ))}
            </ul>

        </aside>
    </>
}

export default Sidebar