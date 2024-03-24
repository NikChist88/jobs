import { FC, useState } from 'react'
import { CompanyType, jobsAPI } from '../api/jobs-api'
import { NavLink, Navigate } from 'react-router-dom'
import { AxiosError } from 'axios'

type SidebarPropsType = {
  id?: string
  company?: CompanyType
}

export const Sidebar: FC<SidebarPropsType> = ({ id, company }) => {
  const [jobDelete, setJobDelete] = useState(false)

  const deleteJob = () => {
    if (window.confirm('Delete Job?') && id) {
      jobsAPI
        .deleteJob(id)
        .then((res) => {
          if (res) {
            window.alert('Job deleted!')
            setJobDelete(true)
          }
        })
        .catch((err: AxiosError) => window.alert(err.message))
    }
  }

  if (jobDelete) {
    return <Navigate to={'/jobs'} />
  }

  return (
    <aside>
      {/* <!-- Company Info --> */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6">Company Info</h3>
        <h2 className="text-2xl">{company?.name}</h2>
        <p className="my-2">{company?.description}</p>
        <hr className="my-4" />
        <h3 className="text-xl">Contact Email:</h3>
        <p className="my-2 bg-indigo-100 p-2 font-bold">
          {company?.contactEmail}
        </p>
        <h3 className="text-xl">Contact Phone:</h3>
        <p className="my-2 bg-indigo-100 p-2 font-bold">
          {company?.contactPhone}
        </p>
      </div>

      {/* <!-- Manage --> */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-bold mb-6">Manage Job</h3>
        <NavLink
          to="/addJob"
          className="bg-indigo-500 transition-colors duration-300 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >
          Edit Job
        </NavLink>
        <button
          className="bg-red-500 transition-colors duration-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
          onClick={deleteJob}
        >
          Delete Job
        </button>
      </div>
    </aside>
  )
}
