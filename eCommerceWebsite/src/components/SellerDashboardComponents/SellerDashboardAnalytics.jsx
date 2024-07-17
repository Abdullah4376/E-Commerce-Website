import React from 'react';
import { Sidebar } from '../index'

function SellerDashboardAnalytics() {
    return (
        <div className="flex w-full min-h-fit rounded-t-lg font-inter">
            <Sidebar active='monitoring' settingsActive='' />
            <div className="flex-grow px-3 py-6 flex justify-center">
                Analytics
            </div>
        </div>
    );
};

export default SellerDashboardAnalytics;