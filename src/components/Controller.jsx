import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './common/Layout'
import Home from './Home'
import Sell from './Sell'
import Register from './Register'
import Login from './Login'
import Purchase from './Purchase'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import GuestDashboard from './guest/GuestDashboard'
import { LoginProvider } from '../context/LoginContext'

function ErrorFallBack() {
  return <h1>Something went Wrong!</h1>
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorFallBack />,
    
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path : "/sell",
        element : <Sell />
      },

      {
        path : "/purchase",
        element : <Purchase />
      },

      {
        path : "/about",
        element : <AboutUs />
      },

      {
        path : "/contact",
        element : <ContactUs />
      },

      {
        path : "/register",
        element : <Register />
      },

      {
        path : "/login",
        element : <Login />
      },

      {
        path : "/guest-dashboard",
        element : <GuestDashboard />
      }

    ]
  }
])

function Controller() {
  return (
    <>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
    </>
  )
}

export default Controller
