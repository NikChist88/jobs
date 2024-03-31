import { MainLayout } from '@layouts/MainLayout'
import { AddJobPage } from '@pages/AddJobPage'
import { HomePage } from '@pages/HomePage'
import { JobPage, jobLoader } from '@pages/JobPage'
import { JobsPage } from '@pages/JobsPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from './store/useAuth'
import { useJobs } from './store/useJobs'
import { useProducts } from './store/useProducts'
import { LoginPage } from '@pages/LoginPage'
import { AuthRequire } from './hocs/AuthRequire'
import { Loader } from '@components/Loader'
import { ProductsPage } from '@pages/ProductsPage'

export const App = () => {
  const fetchJobs = useJobs((state) => state.fetchJobs)
  const fetchProducts = useProducts((state) => state.fetchProducts)
  const isLogin = useAuth((state) => state.isLogin)

  useEffect(() => {
    if (isLogin) {
      fetchJobs()
      fetchProducts()
    }
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={
            <AuthRequire>
              <HomePage />
            </AuthRequire>
          }
        />
        <Route
          path="/products"
          element={
            <AuthRequire>
              <ProductsPage />
            </AuthRequire>
          }
        />
        <Route
          path="/jobs"
          element={
            <AuthRequire>
              <JobsPage />
            </AuthRequire>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <AuthRequire>
              <JobPage />
            </AuthRequire>
          }
          loader={jobLoader}
        />
        <Route
          path="/addJob"
          element={
            <AuthRequire>
              <AddJobPage />
            </AuthRequire>
          }
        />
        <Route
          path="/addJob/:id"
          element={
            <AuthRequire>
              <AddJobPage />
            </AuthRequire>
          }
          loader={jobLoader}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/*"
          element={
            <AuthRequire>
              <NotFoundPage />
            </AuthRequire>
          }
        />
      </Route>
    )
  )

  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
    />
  )
}
