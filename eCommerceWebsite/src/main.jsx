import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeLoader, Protection, Login, Signup, AddProduct, EditProduct, Post, Dashboard, UserProfile, SellerDashboardHome, SellerDashboardOrders, SellerDashboardProducts, SellerDashboardCustomers, SellerDashboardAnalytics, SellerDashboardMarketing, SellerDashboardDiscounts, SellerDashboardSettings } from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <HomeLoader />,
        },
        {
            path: "/login",
            element: (
                <Protection authentication={false}>
                    <Login />
                </Protection>
            ),
        },
        {
            path: "/profile",
            element: (
                <Protection authentication>
                    <UserProfile />
                </Protection>
            ),
        },
        {
            path: "/signup",
            element: (
                <Protection authentication={false}>
                    <Signup />
                </Protection>
            ),
        },
        {
            path: "/add-product",
            element: (
                <Protection authentication>
                    {" "}
                    <AddProduct />
                </Protection>
            ),
        },
        {
            path: "/edit-product/:slug",
            element: (
                <Protection authentication>
                    {" "}
                    <EditProduct />
                </Protection>
            ),
        },
        {
            path: "/dashboard",
            element: (
                <Protection authentication>
                    <Dashboard />
                </Protection>
            )
        },
        {
            path: "/seller-dashboard-home",
            element: (
                <Protection authentication>
                    <SellerDashboardHome />
                </Protection>
            )
        },
        {
            path: "/seller-dashboard-orders",
            element: (
                <Protection authentication>
                    <SellerDashboardOrders />
                </Protection>
            )
        },
        {
            path: "/seller-dashboard-products",
            element: (
                <Protection authentication>
                    <SellerDashboardProducts />
                </Protection>
            )
        },
        {
            path: "/seller-dashboard-customers",
            element: (
                <Protection authentication>
                    <SellerDashboardCustomers />
                </Protection>
            )
        },
        {
            path: "/seller-dashboard-analytics",
            element: (
                <Protection authentication>
                    <SellerDashboardAnalytics />
                </Protection>
            )
        },
        {
            path: "/seller-dashboard-marketing",
            element: (
                <Protection authentication>
                    <SellerDashboardMarketing />
                </Protection>
            )
        },
        {
            path: "/seller-dashboard-discounts",
            element: (
                <Protection authentication>
                    <SellerDashboardDiscounts />
                </Protection>
            )
        },
        {
            path: "/seller-dashboard-settings",
            element: (
                <Protection authentication>
                    <SellerDashboardSettings />
                </Protection>
            )
        },
        {
            path: "/product/:slug",
            element: <Post />,
        },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
      </Provider> 
  </React.StrictMode>
)
