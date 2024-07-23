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
    return (
        <div className="bg-[#F1F1F1] flex justify-center w-full min-h-fit rounded-t-lg font-inter">
            <Sidebar active='person' settingsActive='' />
            <div className="px-3 py-6 w-[75%] ml-60">
                <h1 className='text-xl font-semibold'>Customers</h1>
                <main className='bg-white mt-4 py-4 rounded-lg px-4 rounded-b-lg border border-slate-300'>
                    <header className='flex justify-around items-center gap-5 '>
                        <div className='flex flex-grow border border-slate-400 rounded-md px-2 py-1 gap-2'>
                            <label htmlFor='search' className='text-[#6d6f75] cursor-pointer material-symbols-outlined'>search</label>
                            <input id='search' type="text" className='border-none outline-none w-full' placeholder='Search Products' />
                        </div>
                        <div className='flex-shrink rounded-md border border-slate-400 px-2 py-1 cursor-pointer'>
                            <h1 className='flex items-center justify-around text-sm text-[#666262] font-semibold'>
                                <span className='material-symbols-outlined'>swap_vert</span>
                                Sort
                            </h1>
                        </div>
                    </header>
                    
                </main>
            </div>
        </div>
    );
};

export default SellerDashboardCustomers;