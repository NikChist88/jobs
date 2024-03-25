import { MainLayout } from '@layouts/MainLayout'
import { AddJobPage } from '@pages/AddJobPage'
import { HomePage } from '@pages/HomePage'
import { JobPage } from '@pages/JobPage'
import { JobsPage } from '@pages/JobsPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { JobType, jobsAPI } from './api/jobs-api'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

export const App = () => {
  // Add Job
  const addJob = async (job: JobType) => {
    try {
      await jobsAPI.addJob(job)
    } catch (err) {
      window.alert(err)
    }
  }

  // Delete Job
  const deleteJob = async (id: string) => {
    try {
      await jobsAPI.deleteJob(id)
    } catch (err) {
      window.alert(err)
    }
  }

  // Job Loader
  const jobLoader = async ({ params }: any) => {
    try {
      const { data } = await jobsAPI.getJob(params.id)
      return data
    } catch (err) {
      window.alert(err)
    }
  }

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
          element={
            <JobPage
              deleteJob={deleteJob}
            />
          }
          loader={jobLoader}
        />
        <Route
          path="/addJob"
          element={<AddJobPage addJob={addJob} />}
        />
        <Route
          path="/addJob/:id"
          element={<AddJobPage />}
          loader={jobLoader}
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
