import React from 'react';
import { Sidebar } from '../index'

function SellerDashboardProducts() {
    return (
        <div className="flex w-full min-h-fit rounded-t-lg font-poppins">
            <Sidebar active='sell' settingsActive='' />
            <div className="flex-grow px-3 py-6 flex justify-center">
                Products
            </div>
        </div>
    );
};

export default SellerDashboardProducts;