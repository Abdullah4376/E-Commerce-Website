import React from 'react';
import { Sidebar } from '../index'

function SellerDashboardFiles() {
    return (
        <div className="flex w-full min-h-fit rounded-t-lg font-inter">
            <Sidebar active='add_photo_alternate' settingsActive='' />
            <div className="flex-grow px-3 py-6 flex justify-center">
                Files
            </div>
        </div>
    );
};

export default SellerDashboardFiles;