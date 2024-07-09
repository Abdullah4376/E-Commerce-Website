import React from 'react';
import { Sidebar } from '../index'


function SellerDashboardDiscounts() {
    return (
        <div className="flex w-full min-h-fit rounded-t-lg font-poppins">
            <Sidebar active='percent' settingsActive='' />
            <div className="flex-grow px-3 py-6 flex justify-center">
                Discounts
            </div>
        </div>
    );
};

export default SellerDashboardDiscounts;