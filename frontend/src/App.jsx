

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/Companies'
import CompanyCreate from './components/CompanyCreate'
import CompanySetup from './components/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'



const appRouter =createBrowserRouter([
{
  path:'/',
  element:<Home/>
},
{
  path:'/login',
  element:<Login/>
},
{
  path:'/signup',
  element:<Signup/>
},
{
  path:'/jobs',
  element:<Jobs/>
},
{
path:"description/:id",
element:<JobDescription/>
},
{
  path:'/browse',
  element:<Browse/>
},
{
  path:'/profile',
  element:<Profile/>
},
//admin ke liye yaha se start hoga
{
  path:"/companies",
  element:<Companies/>
},
{
  path:"/companies/create",
  element:<CompanyCreate/>
},
{
  path:"/companies/:id",
  element:<CompanySetup/>
},

{
  path:"/admin/jobs",
  element:<AdminJobs/>
},

{
  path:"admin/jobs/admin/jobs/create",
  element:<PostJob/>
},

{
  path:"admin/jobs/:id/applicants",
  element:<Applicants/>
},


])
function App() {
  

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
