import React from "react";
import { Sidebar } from '../index'

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
        <div className="bg-[#F1F1F1] w-full min-h-fit rounded-t-lg font-poppins">
            
            {/* <button 
            className={`mt-4 ml-4 absolute top-0 left-0 menuBtn`} 
            onClick={() => {
                setMenuHidden('')

            }}>
                <span style={{fontSize: 25}} className="text-white hover:text-black material-symbols-outlined hover:bg-white duration-300 rounded-full p-1">menu</span>
            </button>
            <div className="flex z-50">
                <div className={`h-[557px] w-72 bg-[#EBEBEB] py-3 px-2 relative font-medium duration-300 ${menuHidden}`}>
                    <span onClick={() => {
                        setMenuHidden('hidden');
                    }} style={{fontSize: 25}} className="material-symbols-outlined absolute top-2 right-1 hover:bg-white duration-300 rounded-full p-1 cursor-pointer">close</span>
                    {icons.map(icon => (
                        <h1 className="mb-1 flex items-center gap-2 w-[85%] hover:bg-[#F1F1F1] px-2 py-1 rounded-md text-sm">
                            <span style={{fontSize: 19}} className="material-symbols-outlined">{icon.icon}</span>{icon.name}
                        </h1>
                    ))}
                    <h1 className="absolute bottom-2 flex items-center gap-[7px] w-[92%] hover:bg-[#F1F1F1] pl-2 pr-1 py-1 rounded-md text-sm">
                        <span className="material-symbols-outlined">settings</span>Settings
                    </h1>
                </div>


                
                <div className="w-full">
                    <h1>hifdgdg gg jghnjgh ghnjgnhjnghkkkkkkkkkkkkkkkkkkkkkkk hassan</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                    <h1>hi</h1>
                </div>
            </div> */}

            <Sidebar/>
        </div>
    )
}

export default SellerDashboardHome;