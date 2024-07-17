import React from 'react';
import { Sidebar } from '../index'

function SellerDashboardSettings() {
    return (
        <div className="flex w-full min-h-fit rounded-t-lg font-inter">
            <Sidebar settingsActive='settings' />
            <div className="flex-grow px-3 py-6 flex justify-center">
                Settings
            </div>
        </div>
    );
};

export default SellerDashboardSettings;