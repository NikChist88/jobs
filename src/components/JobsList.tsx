import { FC, useEffect, useState, memo } from 'react'
import { JobItem } from './JobItem'
import { jobsAPI, JobType } from '../api/jobs-api'
import { Loader } from './Loader'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

type JobsListPropsType = {
  isHome?: boolean
}

export const JobsList: FC<JobsListPropsType> = memo(({ isHome }) => {
  const [jobs, setJobs] = useState<JobType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const jobsList = isHome ? jobs.slice(0, 3) : jobs

  useEffect(() => {
    jobsAPI
      .getJobs()
      .then((res) => setJobs(res.data))
      .catch((err: AxiosError) =>
        toast.error(err.message, {
          autoClose: false,
        })
      )
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'All Jobs'}
        </h2>
        <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
          {isLoading && <Loader />}
          {jobsList.map((job) => (
            <JobItem
              key={job.id}
              job={job}
            />
          ))}
        </div>
      </div>
    </section>
  )
})
