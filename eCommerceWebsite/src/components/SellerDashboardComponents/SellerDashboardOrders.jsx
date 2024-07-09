import React from 'react';
import { Sidebar } from '../index'

function SellerDashboardOrders() {
    return (
        <div className="flex w-full min-h-fit rounded-t-lg font-poppins">
            <Sidebar active='orders' settingsActive='' />
            <div className="flex-grow px-3 py-6 flex justify-center">
                Orders
            </div>
        </div>
    );
};

export default SellerDashboardOrders;