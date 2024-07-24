import React from 'react';
import { Sidebar } from '../index'

// Whenever a customer purchases a product from a specific seller, the customer's data will be shown here like orders and amount spent
// Whenever a customer purchases a product from a specific seller, the customer's data will be shown here like orders and amount spent
// Whenever a customer purchases a product from a specific seller, the customer's data will be shown here like orders and amount spent
// Whenever a customer purchases a product from a specific seller, the customer's data will be shown here like orders and amount spent
// Whenever a customer purchases a product from a specific seller, the customer's data will be shown here like orders and amount spent
// Whenever a customer purchases a product from a specific seller, the customer's data will be shown here like orders and amount spent
// Whenever a customer purchases a product from a specific seller, the customer's data will be shown here like orders and amount spent
// Whenever a customer purchases a product from a specific seller, the customer's data will be shown here like orders and amount spent
// Whenever a customer purchases a product from a specific seller, the customer's data will be shown here like orders and amount spent
// Whenever a customer purchases a product from a specific seller, the customer's data will be shown here like orders and amount spent

function SellerDashboardCustomers() {

    const dummyCustomerData = [
        {
            name: 'Russell Winfield',
            orderCount: 4,
            amountSpent: '$6,626.04'
        },
        {
            name: 'Ayumo Hirano',
            orderCount: 2,
            amountSpent: '$26.04'
        },
        {
            name: 'Gill Bates',
            orderCount: 1,
            amountSpent: '$626,000,000.04'
        },
    ]

    return (
        <div className="min-h-[90vh] bg-[#F1F1F1] flex justify-center w-full rounded-t-lg font-inter">
            <Sidebar active='person' settingsActive='' />
            <div className="px-3 py-6 w-[75%] ml-60">
                <h1 className='text-xl font-semibold'>Customers</h1>
                <main className='bg-white mt-4 py-4 rounded-lg rounded-b-lg border border-slate-300'>
                    <header className='flex justify-around items-center gap-5 px-4'>

                        {/* Add the search functionality using JS by filter, includes, or any other method. */}
                        {/* Add the search functionality using JS by filter, includes, or any other method. */}
                        {/* Add the search functionality using JS by filter, includes, or any other method. */}
                        {/* Add the search functionality using JS by filter, includes, or any other method. */}
                        {/* Add the search functionality using JS by filter, includes, or any other method. */}
                        {/* Add the search functionality using JS by filter, includes, or any other method. */}
                        {/* Add the search functionality using JS by filter, includes, or any other method. */}
                        {/* Add the search functionality using JS by filter, includes, or any other method. */}

                        <div className='flex flex-grow border border-slate-400 rounded-md px-2 py-1 gap-2'>
                            <label htmlFor='search' className='text-[#6d6f75] cursor-pointer material-symbols-outlined'>search</label>
                            <input id='search' type="text" className='border-none outline-none w-full' placeholder='Search Customers' />
                        </div>
                        <div className='flex-shrink rounded-md border border-slate-400 px-2 py-[5px] cursor-pointer'>
                            <h1 className='flex items-center justify-around text-sm text-[#666262] font-semibold'>
                                <span className='material-symbols-outlined' style={{fontSize: 22}}>swap_vert</span>
                                Sort
                            </h1>
                        </div>
                    </header>

                    <div className='font-semibold text-xs mt-3'>
                        <header className='bg-[#FAFAFA] grid grid-cols-3 py-4 items-center border-t w-full pl-4 px-4 border-slate-300'>
                            <h1 className='col-span-1'>Customer Name</h1>
                            <h1 className='col-span-1'>Orders</h1>
                            <h1 className='col-span-1'>Amount Spent</h1>
                        </header>

                        {dummyCustomerData ? dummyCustomerData.map((customer, index) => (
                            <div key={index} className='grid grid-cols-3 items-center text-sm text-[#575757] border-t border-slate-300 px-4 py-4'>
                                <h1 className='col-span-1'>{customer.name}</h1>
                                <h1 className='col-span-1'>{customer.orderCount}</h1>
                                <h1 className='col-span-1'>{customer.amountSpent}</h1>
                            </div>
                        )) : (
                            <div className='text-2xl py-20 flex justify-center font-medium items-center font-poppins'>
                                <h1>No Data To Show!</h1>
                            </div>
                        )}

                    </div>

                </main>
            </div>
        </div>
    );
};

export default SellerDashboardCustomers;