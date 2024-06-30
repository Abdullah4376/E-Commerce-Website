import React from "react";

function SellerDashboardHome() {

    const icons = [
        {name: 'Home', icon: 'home'},

        {name: 'Orders', icon: 'orders'},

        {name: 'Products', icon: 'sell'},

        {name: 'Customers', icon: 'person'},

        {name: 'Files', icon: 'add_photo_alternate'},

        {name: 'Analytics', icon: 'monitoring'},

        {name: 'Marketing', icon: 'ads_click'},

        {name: 'Discounts', icon: 'percent'},
    ]

    return(
        <div className="bg-[#F1F1F1] h-full rounded-t-lg font-poppins">
            {/* Left Section */}
            <div className="h-[88vh] w-60 bg-[#EBEBEB] py-3 px-2 relative">
                {icons.map(icon => (
                    <h1 className="mb-1 flex items-center gap-2 w-full hover:bg-[#F1F1F1] px-2 py-1 rounded-md text-sm">
                        <span style={{fontSize: 19}} className="material-symbols-outlined">{icon.icon}</span>{icon.name}
                    </h1>
                ))}
                <h1 className="absolute bottom-2 flex items-center gap-2 w-full hover:bg-[#F1F1F1] pl-2 pr-1 py-1 rounded-md text-sm">
                    <span className="material-symbols-outlined">settings</span>Settings
                </h1>
            </div>


            {/* Right Section */}
            <div>

            </div>
        </div>
    )
}

export default SellerDashboardHome;