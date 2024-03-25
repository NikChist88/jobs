import { Outlet } from 'react-router-dom'
import { Header } from '@components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="light"
      />
    </>
  )
}
