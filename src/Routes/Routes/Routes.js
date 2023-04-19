import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/SharedComponents/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryPage></CategoryPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://woodpecker12-server-numangit.vercel.app/products/${params.id}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addaproduct',
                element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>
            },
            {
                path: "/dashboard/myproducts",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: "/dashboard/allSellers",
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: "/dashboard/allBuyers",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: "/dashboard/reportedItems",
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: "/dashboard/myOrders",
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute> <Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://woodpecker12-server-numangit.vercel.app/orders/${params.id}`)
            }
        ]
    }
])

export default router;
