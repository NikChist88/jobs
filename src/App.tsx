import { MainLayout } from '@layouts/MainLayout'
import { AddJobPage } from '@pages/AddJobPage'
import { HomePage } from '@pages/HomePage'
import { JobPage } from '@pages/JobPage'
import { JobsPage } from '@pages/JobsPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  LoaderFunction,
  LoaderFunctionArgs,
} from 'react-router-dom'
import { useEffect } from 'react'
import { JobType, useJobs } from './store/store'
import { jobsAPI } from './api/jobs-api'

export const App = () => {
  const fetchJobs = useJobs((state) => state.fetchJobs)

  const loader: LoaderFunction = async ({
    params,
  }: LoaderFunctionArgs<JobType>) => {
    if (params.id) {
      const { data } = await jobsAPI.getJob(params.id)
      return data
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/jobs"
          element={<JobsPage />}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage />}
          loader={loader}
        />
        <Route
          path="/addJob"
          element={<AddJobPage />}
        />
        <Route
          path="/addJob/:id"
          element={<AddJobPage />}
          loader={loader}
        />
        <Route
          path="/*"
          element={<NotFoundPage />}
        />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}
