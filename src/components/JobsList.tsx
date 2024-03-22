import { FC, useEffect, useState, memo } from 'react'
import { JobItem } from './JobItem'
import { jobsAPI, JobType } from '../api/jobs-api'
import { MoonLoader } from 'react-spinners'
import { AxiosError } from 'axios'

type JobsListPropsType = {
  isHome?: boolean
}

export const JobsList: FC<JobsListPropsType> = memo(({ isHome }) => {
  const [jobs, setJobs] = useState<JobType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const jobsList = isHome ? jobs.slice(0, 3) : jobs

  useEffect(() => {
    jobsAPI
      .getJobs()
      .then((res) => setJobs(res.data))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'All Jobs'}
        </h2>
        <div
          className={`${
            isLoading
              ? 'flex justify-center'
              : 'grid grid-cols-1 md:grid-cols-3 gap-6'
          }`}
        >
          {isLoading && <MoonLoader color="#423BC7" />}
          {error ? (
            <span className="col-span-3 text-center text-red-500 text-2xl">
              {error}
            </span>
          ) : (
            jobsList.map((job) => (
              <JobItem
                key={job.id}
                job={job}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
})
