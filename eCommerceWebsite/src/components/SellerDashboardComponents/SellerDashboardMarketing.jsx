import React from 'react';
import { Sidebar } from '../index'

function SellerDashboardMarketing() {
    return (
        <div className="flex w-full min-h-fit rounded-t-lg font-inter">
            <Sidebar active='ads_click' settingsActive='' />
            <div className="flex-grow px-3 py-6 flex justify-center">
                Marketing
            </div>
        </div>
    );
};

export default SellerDashboardMarketing;