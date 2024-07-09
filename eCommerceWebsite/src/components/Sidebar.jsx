import React from "react";
import { Link } from "react-router-dom";

function Sidebar({active, settingsActive}) {
    const icons = [
        { name: 'Home', icon: 'home', path: '/seller-dashboard-home' },
        { name: 'Orders', icon: 'orders', path: '/seller-dashboard-orders' },
        { name: 'Products', icon: 'sell', path: '/seller-dashboard-products' },
        { name: 'Customers', icon: 'person', path: '/seller-dashboard-customers' },
        { name: 'Files', icon: 'add_photo_alternate', path: '/seller-dashboard-files' },
        { name: 'Analytics', icon: 'monitoring', path: '/seller-dashboard-analytics' },
        { name: 'Marketing', icon: 'ads_click', path: '/seller-dashboard-marketing' },
        { name: 'Discounts', icon: 'percent', path: '/seller-dashboard-discounts' },
    ];

    const settings = {name: 'Settings', icon: 'settings', path: '/seller-dashboard-settings'}

    return (
        <div>
            <button type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <span className="material-symbols-outlined">menu</span>
            </button>

            <menu className="fixed top-[13vh] left-0 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#e0e0e0] flex flex-col">
                    <ul className="space-y-2 flex-[0.85]">
                        {icons.map(icon => (
                            <li key={icon.path}>
                                <Link to={icon.path} className={`${icon.icon === active ? 'bg-[white]' : ''} flex items-center hover:bg-[#FAFAFA] py-1 px-2 rounded-lg`}>
                                    <span style={{ fontSize: '20px' }} className="material-symbols-outlined">{icon.icon}</span>
                                    <span className="ms-3">{icon.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li>
                            <Link to={settings.path} className={`${settings.icon === settingsActive ? 'bg-[white]' : ''} flex items-center hover:bg-[#FAFAFA] py-1 px-2 rounded-lg`}>
                                <span style={{ fontSize: '20px' }} className="material-symbols-outlined">{settings.icon}</span>
                                <span className="ms-3">{settings.name}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </menu>
        </div>
    );
}

export default Sidebar;
