import { MainLayout } from '@layouts/MainLayout'
import { AddJobPage } from '@pages/AddJobPage'
import { HomePage } from '@pages/HomePage'
import { JobPage } from '@pages/JobPage'
import { JobsPage } from '@pages/JobsPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import {
  createBrowserRouter,
  RouterProvider,
  LoaderFunction,
  LoaderFunctionArgs,
} from 'react-router-dom'
import { useEffect } from 'react'
import { JobType, useAuth, useJobs } from './store/store'
import { jobsAPI } from './api/jobs-api'
import { LoginPage } from '@pages/LoginPage'
import { AuthRequire } from './hocs/AuthRequire'
import { Loader } from '@components/Loader'

export const App = () => {
  const fetchJobs = useJobs((state) => state.fetchJobs)
  const isLogin = useAuth((state) => state.isLogin)

  const loader: LoaderFunction = async ({
    params,
  }: LoaderFunctionArgs<JobType>) => {
    if (params.id) {
      const { data } = await jobsAPI.getJob(params.id)
      return data
    }
  }

  useEffect(() => {
    isLogin && fetchJobs()
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: (
            <AuthRequire>
              <HomePage />
            </AuthRequire>
          ),
        },
        {
          path: '/jobs',
          element: (
            <AuthRequire>
              <JobsPage />
            </AuthRequire>
          ),
        },
        {
          path: '/jobs/:id',
          element: (
            <AuthRequire>
              <JobPage />
            </AuthRequire>
          ),
          loader: loader,
        },
        {
          path: '/addJob',
          element: (
            <AuthRequire>
              <AddJobPage />
            </AuthRequire>
          ),
        },
        {
          path: '/addJob/:id',
          element: (
            <AuthRequire>
              <AddJobPage />
            </AuthRequire>
          ),
          loader: loader,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/*',
          element: (
            <AuthRequire>
              <NotFoundPage />
            </AuthRequire>
          ),
        },
      ],
    },
  ])

  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
    />
  )
}
