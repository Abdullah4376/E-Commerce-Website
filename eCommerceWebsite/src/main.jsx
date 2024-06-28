import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLoader from './pages/HomeLoader.jsx'
import Protection from './components/AuthLayout(Protection).jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AddProduct from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'
import Post from './pages/Post.jsx'
import Dashboard from './pages/Dashboard.jsx'
import UserProfile from './pages/UserProfile.jsx'
import SellerDashboard from './components/SellerDashboard.jsx'

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
            path: "/seller-dashboard",
            element: (
                <Protection authentication>
                    <SellerDashboard />
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
  </React.StrictMode>,
)
