import { useEffect, useState } from 'react'
import { Breadcrumbs } from '@components/Breadcrumbs'
import { Sidebar } from '@components/Sidebar'
import { FaLocationDot } from 'react-icons/fa6'
import { JobType, jobsAPI } from '../api/jobs-api'
import { AxiosError } from 'axios'
import { useParams } from 'react-router-dom'

export const JobPage = () => {
  const { id } = useParams()
  const [job, setJob] = useState<JobType>()

  useEffect(() => {
    if (id) {
      jobsAPI
        .getJob(id)
        .then((res) => setJob(res.data))
        .catch((err: AxiosError) => console.log(err))
    }
  }, [])

  return (
    <>
      <Breadcrumbs
        href="/jobs"
        title="Back to jobs listing"
      />
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-4 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job?.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job?.title}</h1>
                <div className="text-gray-500 flex items-center gap-1 justify-center md:justify-start">
                  <FaLocationDot color="#C7481C" />
                  <p className="text-orange-700">{job?.location}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-3">
                  Job Description
                </h3>
                <p className="mb-4">{job?.description}</p>
                <h3 className="text-indigo-800 text-lg font-bold mb-3">
                  Salary
                </h3>
                <p>{job?.salary}</p>
              </div>
            </main>
            <Sidebar id={job?.id} company={job?.company} />
          </div>
        </div>
      </section>
    </>
  )
}
