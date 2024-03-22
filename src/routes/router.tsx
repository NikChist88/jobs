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
} from 'react-router-dom'
import { jobs } from '../data/data.json'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout />}
    >
      <Route
        index
        element={<HomePage jobs={jobs} />}
      />
      <Route
        path="/jobs"
        element={<JobsPage jobs={jobs} />}
      />
      <Route
        path="/job"
        element={<JobPage />}
      />
      <Route
        path="/addJob"
        element={<AddJobPage />}
      />
      <Route
        path="/*"
        element={<NotFoundPage />}
      />
    </Route>
  )
)
