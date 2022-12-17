import { NavLink } from "react-router-dom";

const tabs = [
    { label: 'Tab One', route: '/' },
    { label: 'Tab Two', route: '/two' },
    { label: 'Tab Three', route: '/three' },
];

function NavTab() {
    return (
        <div className="md:block md:ml-10 md:pr-4">
            {tabs.map(tab => (
                <NavLink
                    key={tab.route}
                    to={tab.route}
                    style={({ isActive }) =>
                        isActive ? { borderBottom: '4px solid white' } : {}
                    }
                    className="p-3 font-medium font-mono text-white uppercase hover:text-gray-900 ml-3"
                >
                    {tab.label}
                </NavLink>
            ))}
        </div>
    );
}


export default NavTab;

