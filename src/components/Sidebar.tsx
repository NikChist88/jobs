import { FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { JobType } from '../store/store'
import { useJobs } from '../store/store'

type SidebarPropsType = {
  job: JobType
}

export const Sidebar: FC<SidebarPropsType> = ({ job }) => {
  const deleteJob = useJobs((state) => state.deleteJob)
  const navigate = useNavigate()

  const handleDeleteJob = () => {
    if (window.confirm('Delete job?')) {
      deleteJob(job.id)
      navigate('/jobs')
    }
  }

  return (
    <aside>
      {/* <!-- Company Info --> */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6">Company Info</h3>
        <h2 className="text-2xl">{job.companyName}</h2>
        <p className="my-2">{job.companyDesc}</p>
        <hr className="my-4" />
        <h3 className="text-xl">Contact Email:</h3>
        <p className="my-2 bg-indigo-100 p-2 font-bold">{job.contactEmail}</p>
        <h3 className="text-xl">Contact Phone:</h3>
        <p className="my-2 bg-indigo-100 p-2 font-bold">{job.contactPhone}</p>
      </div>

      {/* <!-- Manage --> */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-bold mb-6">Manage Job</h3>
        <NavLink
          to={`/addJob/${job.id}`}
          className="bg-indigo-500 transition-colors duration-300 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >
          Edit Job
        </NavLink>
        <button
          className="bg-red-500 transition-colors duration-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
          onClick={handleDeleteJob}
        >
          Delete Job
        </button>
      </div>
    </aside>
  )
}
