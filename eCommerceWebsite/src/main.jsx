import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Protection from './components/AuthLayout(Protection).jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AllProducts from './pages/AllProducts.jsx'
import AddProduct from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'
import Post from './pages/Post.jsx'
import Dashboard from './pages/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
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
            path: "/signup",
            element: (
                <Protection authentication={false}>
                    <Signup />
                </Protection>
            ),
        },
        {
            path: "/all-products",
            element: (
                <Protection authentication>
                    {" "}
                    <AllProducts />
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
            path: "/post/:slug",
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
