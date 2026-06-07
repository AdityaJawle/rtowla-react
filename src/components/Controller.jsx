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
import ServiceRequestPage from './guest/pages/ServiceRequestPage'
import SellVehiclePage from './guest/pages/SellVehiclePage'
import PurchaseVehiclePage from './guest/pages/PurchaseVehiclePage'
import RequestHistoryPage from './guest/pages/RequestHistoryPage'
import ClerkDashboard from './clerk/pages/ClerkDashboard'
import IncomingRequests from './clerk/pages/IncomingRequests'
import WorkTable from './clerk/pages/WorkTable'
import AssignmentPanel from './clerk/pages/AssignmentPanel'
import RequestDetails from './clerk/pages/RequestDetails'
import OfcBoyDashboard from './ofcboy/pages/OfcBoyDashboard'
import OfcBoyTasks from './ofcboy/pages/OfcBoyTasks'
import InspectionTasks from './ofcboy/pages/InspectionTasks'
import AdminDashboard from './admin/pages/AdminDashboard'
import ServiceMonitoring from './admin/pages/ServiceMonitoring'
import VehiclePurchaseReview from './admin/pages/VehiclePurchaseReview'
import ApprovalCenter from './admin/pages/ApprovalCenter'
import ReportsDashboard from './admin/pages/ReportsDashboard'
import SuperAdminDashboard from './superadmin/pages/SuperAdminDashboard'
import UserManagement from './superadmin/pages/UserManagement'
import RoleManagement from './superadmin/pages/RoleManagement'
import AuditLogs from './superadmin/pages/AuditLogs'
import ActivityMonitoring from './superadmin/pages/ActivityMonitoring'
import AnalyticsDashboard from './superadmin/pages/AnalyticsDashboard'
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
      },

      {
        path : "/guest-dashboard/service-request",
        element : <ServiceRequestPage />
      },

      {
        path : "/guest-dashboard/sell-vehicle",
        element : <SellVehiclePage />
      },

      {
        path : "/guest-dashboard/purchase-vehicle",
        element : <PurchaseVehiclePage />
      },

      {
        path : "/guest-dashboard/request-history",
        element : <RequestHistoryPage />
      },

      {
        path : "/clerk",
        element : <ClerkDashboard />
      },

      {
        path : "/clerk/incoming-requests",
        element : <IncomingRequests />
      },

      {
        path : "/clerk/work-table",
        element : <WorkTable />
      },

      {
        path : "/clerk/assignment-panel",
        element : <AssignmentPanel />
      },

      {
        path : "/clerk/request-details",
        element : <RequestDetails />
      },

      {
        path : "/ofcboy",
        element : <OfcBoyDashboard />
      },

      {
        path : "/ofcboy/assigned-tasks",
        element : <OfcBoyTasks />
      },

      {
        path : "/ofcboy/pickup-tasks",
        element : <OfcBoyTasks type="Pickup" />
      },

      {
        path : "/ofcboy/delivery-tasks",
        element : <OfcBoyTasks type="Delivery" />
      },

      {
        path : "/ofcboy/inspection-tasks",
        element : <InspectionTasks />
      },

      {
        path : "/admin",
        element : <AdminDashboard />
      },

      {
        path : "/admin/service-monitoring",
        element : <ServiceMonitoring />
      },

      {
        path : "/admin/vehicle-purchase-review",
        element : <VehiclePurchaseReview />
      },

      {
        path : "/admin/approval-center",
        element : <ApprovalCenter />
      },

      {
        path : "/admin/reports-dashboard",
        element : <ReportsDashboard />
      },

      {
        path : "/superadmin",
        element : <SuperAdminDashboard />
      },

      {
        path : "/superadmin/user-management",
        element : <UserManagement />
      },

      {
        path : "/superadmin/role-management",
        element : <RoleManagement />
      },

      {
        path : "/superadmin/audit-logs",
        element : <AuditLogs />
      },

      {
        path : "/superadmin/activity-monitoring",
        element : <ActivityMonitoring />
      },

      {
        path : "/superadmin/analytics-dashboard",
        element : <AnalyticsDashboard />
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
