import React from 'react';
import { Sidebar } from '../index'
import Calendar from './Calendar';
import Chart from './Charts/Chart';


function SellerDashboardAnalytics() {

    const dummyTopSellingProductsData = [
        {},
    ]

    return (
        <div className="min-h-[90vh] bg-[#F1F1F1] flex justify-center w-full rounded-t-lg font-inter">
            <Sidebar active='monitoring' settingsActive='' />
            <div className="px-3 py-6 w-[75%] ml-60">
                <h1 className='text-xl font-semibold'>Analytics</h1>
                <Calendar />

                {/* Things to include in Graphs: */}
                {/* Total Sales */}
                {/* Online Store Sessions */}
                {/* Total Orders */}
                {/* Average Order Value */}
                {/* Top Selling Products */}
                {/* Fulfilled Orders Over Time */}

                <main className='mt-7 grid grid-cols-3 gap-4'>
                    <div className='px-3 py-4 bg-white rounded-md'>
                        <h1 
                            className='flex justify-between items-center text-xs'
                        >
                            Total Sales
                            <span 
                                style={{fontSize: 22}} 
                                className='text-[#666666] material-symbols-outlined'
                            >
                                {/* Chart Icon Name */}
                                bar_chart
                            </span>
                        </h1>
                        <h1 className='font-semibold text-xl hover:underline cursor-pointer'>$22,345</h1>
                        <Chart />
                    </div>

                    <div className='px-3 py-4 bg-white rounded-md'>
                        <h1 
                            className='flex justify-between items-center text-xs'
                        >
                            Online Store Sessions
                            <span
                                style={{fontSize: 22}}
                                className='text-[#666666] material-symbols-outlined'
                            >
                                {/* Chart Icon Name */}
                                bar_chart
                            </span>
                        </h1>
                        <h1 className='font-semibold text-xl hover:underline cursor-pointer'>0</h1>
                        <Chart />
                    </div>

                    <div className='px-3 py-4 bg-white rounded-md'>
                        <h1 
                            className='flex justify-between items-center text-xs'
                        >
                            Total Orders
                            <span
                                style={{fontSize: 22}}
                                className='text-[#666666] material-symbols-outlined'
                            >
                                {/* Chart Icon Name */}
                                bar_chart
                            </span>
                        </h1>
                        <h1 className='font-semibold text-xl hover:underline cursor-pointer'>0</h1>
                        <Chart />
                    </div>

                    <div className='px-3 py-4 bg-white rounded-md'>
                        <h1 
                            className='flex justify-between items-center text-xs'
                        >
                            Average Order Value
                            <span
                                style={{fontSize: 22}}
                                className='text-[#666666] material-symbols-outlined'
                            >
                                {/* Chart Icon Name */}
                                bar_chart
                            </span>
                        </h1>
                        <h1 className='font-semibold text-xl hover:underline cursor-pointer'>$2,055</h1>
                        <Chart />
                    </div>

                    <div className='px-3 py-4 bg-white rounded-md'>
                        <h1
                            className='flex justify-between items-center text-xs'
                        >
                            Top Selling Products
                            <span
                                style={{fontSize: 22}}
                                className='text-[#666666] material-symbols-outlined'
                            >
                                {/* Chart Icon Name */}
                                bar_chart
                            </span>
                        </h1>

                        <div>
                            {}
                        </div>

                    </div>

                </main>
            </div>
        </div>
    );
};

export default SellerDashboardAnalytics;