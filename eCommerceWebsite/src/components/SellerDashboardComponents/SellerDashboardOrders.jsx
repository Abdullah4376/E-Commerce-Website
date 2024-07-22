import React from "react";
import { Sidebar } from "../index";

function SellerDashboardOrders() {
  const dummyOrdersData = [
    {
      orderId: "#1001",
      orderDate: "Today at 8:16",
      orderCustomerName: "Russel Winfield",
      orderTotal: "$3.329,20",
      orderPaymentStatus: true,
      orderFulfillmentStatus: "Unfulfilled",
      orderItems: "2 items",
    },
    {
      orderId: "#1002",
      orderDate: "Today at 8:16",
      orderCustomerName: "Russel Winfield",
      orderTotal: "$3.329,20",
      orderPaymentStatus: true,
      orderFulfillmentStatus: "Unfulfilled",
      orderItems: "2 items",
    },
    {
      orderId: "#1003",
      orderDate: "Today at 8:16",
      orderCustomerName: "Russel Winfield",
      orderTotal: "$3.329,20",
      orderPaymentStatus: true,
      orderFulfillmentStatus: "Unfulfilled",
      orderItems: "2 items",
    },
    {
      orderId: "#1004",
      orderDate: "Today at 8:16",
      orderCustomerName: "Russel Winfield",
      orderTotal: "$3.329,20",
      orderPaymentStatus: true,
      orderFulfillmentStatus: "Unfulfilled",
      orderItems: "2 items",
    },
    {
      orderId: "#1005",
      orderDate: "Today at 8:16",
      orderCustomerName: "Russel Winfield",
      orderTotal: "$3.329,20",
      orderPaymentStatus: true,
      orderFulfillmentStatus: "Unfulfilled",
      orderItems: "2 items",
    },
    {
      orderId: "#1006",
      orderDate: "Today at 8:16",
      orderCustomerName: "Russel Winfield",
      orderTotal: "$3.329,20",
      orderPaymentStatus: true,
      orderFulfillmentStatus: "Unfulfilled",
      orderItems: "2 items",
    },
    {
      orderId: "#1007",
      orderDate: "Today at 8:16",
      orderCustomerName: "Russel Winfield",
      orderTotal: "$3.329,20",
      orderPaymentStatus: true,
      orderFulfillmentStatus: "Unfulfilled",
      orderItems: "2 items",
    },
    {
      orderId: "#1008",
      orderDate: "Today at 8:16",
      orderCustomerName: "Russel Winfield",
      orderTotal: "$3.329,20",
      orderPaymentStatus: true,
      orderFulfillmentStatus: "Unfulfilled",
      orderItems: "2 items",
    },
    {
      orderId: "#1009",
      orderDate: "Today at 8:16",
      orderCustomerName: "Russel Winfield",
      orderTotal: "$3.329,20",
      orderPaymentStatus: true,
      orderFulfillmentStatus: "Unfulfilled",
      orderItems: "2 items",
    },
    {
      orderId: "#1010",
      orderDate: "Today at 8:16",
      orderCustomerName: "Russel Winfield",
      orderTotal: "$3.329,20",
      orderPaymentStatus: true,
      orderFulfillmentStatus: "Unfulfilled",
      orderItems: "2 items",
    },
  ];

  return (
    <div className="bg-[#F1F1F1] flex justify-center w-full min-h-fit rounded-t-lg font-inter">
      <Sidebar active="orders" settingsActive="" />
      <div className="px-3 py-6 w-[75%] ml-60">
        <h1 className="text-xl font-semibold">Orders</h1>
        <main className="bg-white mt-4 py-2 rounded-lg rounded-b-lg border border-slate-300">
          <header className="px-3 flex justify-between items-center">
            {/* Left Section */}
            <div className="flex gap-2 text-sm">
              <button className="p-2 hover:bg-blue-50 hover:text-blue-600 px-3 rounded-lg">
                All
              </button>
              <button className="p-2 hover:bg-blue-50 hover:text-blue-600 px-3 rounded-lg">
                Unfulfilled
              </button>
              <button className="p-2 hover:bg-blue-50 hover:text-blue-600 px-3 rounded-lg">
                Unpaid
              </button>
              <button className="p-2 hover:bg-blue-50 hover:text-blue-600 px-3 rounded-lg">
                Open
              </button>
              <button className="p-2 hover:bg-blue-50 hover:text-blue-600 px-3 rounded-lg">
                Closed
              </button>
            </div>

            {/* Right Section */}
            <div className="flex gap-2">
              <button className="p-1 py-1 rounded-lg border border-slate-400 flex items-center">
                <span
                  style={{ fontSize: "22px" }}
                  className="material-symbols-outlined"
                >
                  filter_list
                </span>
              </button>
              <button className="p-1 py-1 rounded-lg border border-slate-400 flex items-center">
                <span
                  style={{ fontSize: "22px" }}
                  className="material-symbols-outlined"
                >
                  swap_vert
                </span>
              </button>
            </div>
          </header>

          {/* Order Section */}
          <div className="text-xs grid grid-cols-8 gap-4 items-center border-t px-4 mt-2 py-3 border-slate-300 bg-[#fafafa]">
            {/* Checkbox at the left! */}
            <div className="flex items-center col-span-1">
              <input
                id="order"
                type="checkbox"
                value=""
                className="border-[#575757] checked:border-solid checked:bg-[#575757] appearance-none border border-dashed hover:border-solid cursor-pointer h-5 min-w-5 rounded-full custom-checkbox"
              />
              <label
                htmlFor="order"
                className="z-50 select-none w-full h-full pl-3 text-xs font-semibold hover:cursor-pointer"
              >
                Order
              </label>
            </div>
            <h1 className="col-span-1 font-semibold">Date</h1>
            <h1 className="col-span-2 font-semibold">Customer</h1>
            <h1 className="col-span-1 font-semibold">Total</h1>
            <h1 className="col-span-1 font-semibold">Payment Status</h1>
            <h1 className="col-span-1 font-semibold">Fulfillment Status</h1>
            <h1 className="col-span-1 font-semibold">Items</h1>
          </div>

          {/* Data of the orders */}
          {dummyOrdersData.map((order, index) => (
            <div key={index} className="grid grid-cols-8 gap-4 items-center text-sm text-[#575757] border-t border-slate-300 px-4 py-3">
              <div className="flex items-center col-span-1">
                <input
                  id={`order-${index}`}
                  type="checkbox"
                  value=""
                  className="border-[#575757] checked:border-solid checked:bg-[#575757] appearance-none border border-dashed hover:border-solid cursor-pointer h-5 min-w-5 rounded-full custom-checkbox"
                />
                <label
                  htmlFor={`order-${index}`}
                  className="z-50 select-none w-full h-full pl-3 text-sm hover:cursor-pointer text-black"
                >
                  {order.orderId}
                </label>
              </div>
              <h1 className="col-span-1">{order.orderDate}</h1>
              <h1 className="col-span-2">{order.orderCustomerName}</h1>
              <h1 className="col-span-1">{order.orderTotal}</h1>
              <h1 className="col-span-1">{order.orderPaymentStatus ? 'Paid' : 'Unpaid'}</h1>
              <h1 className="col-span-1">{order.orderFulfillmentStatus}</h1>
              <h1 className="col-span-1">{order.orderItems}</h1>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default SellerDashboardOrders;
