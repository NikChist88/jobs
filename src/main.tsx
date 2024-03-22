import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import { NotFoundPage } from '@pages/NoFoundPage'
import { JobsPage } from '@pages/JobsPage'
import { AddJobPage } from '@pages/AddJobPage'
import { JobPage } from '@pages/JobPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="/jobs"
          element={<JobsPage />}
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
