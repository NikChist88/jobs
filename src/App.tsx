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
} from 'react-router-dom'

export const router = createBrowserRouter(
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

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
