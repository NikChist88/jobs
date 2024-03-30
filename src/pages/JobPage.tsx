import { FC } from 'react'
import { GoBack } from '@components/GoBack'
import { FaLocationDot } from 'react-icons/fa6'
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom'
import { JobType, useJobs } from '../store/store'

export const JobPage: FC = () => {
  const job = useLoaderData() as JobType
  const deleteJob = useJobs((state) => state.deleteJob)
  const navigate = useNavigate()

  const handleDeleteJob = () => {
    if (window.confirm('Delete job?')) {
      deleteJob(job.id)
      navigate('/jobs', { replace: true })
    }
  }

  return (
    <>
      <GoBack />
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-4 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 flex items-center gap-1 justify-center md:justify-start">
                  <FaLocationDot color="#C7481C" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-3">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>
                <h3 className="text-indigo-800 text-lg font-bold mb-3">
                  Salary
                </h3>
                <p>{job.salary}</p>
              </div>
            </main>
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{job.companyName}</h2>
                <p className="my-2">{job.companyDesc}</p>
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.contactEmail}
                </p>
                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.contactPhone}
                </p>
              </div>

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
          </div>
        </div>
      </section>
    </>
  )
}
