import React from 'react';
import { Sidebar } from '../index'


function SellerDashboardCustomers() {
    return (
        <div className="flex w-full min-h-fit rounded-t-lg font-poppins">
            <Sidebar active='person' settingsActive='' />
            <div className="flex-grow px-3 py-6 flex justify-center">
                Customers
            </div>
        </div>
    );
};

export default SellerDashboardCustomers;