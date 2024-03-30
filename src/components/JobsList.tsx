import { FC } from 'react'
import { JobItem } from './JobItem'
import { Loader } from './Loader'
import { useJobs, useJobsFilter } from '../store/store'

type JobsListPropsType = {
  isHome?: boolean
}

export const JobsList: FC<JobsListPropsType> = ({ isHome }) => {
  const { jobs, isLoading } = useJobs((state) => ({
    jobs: state.jobs,
    isLoading: state.isLoading,
  }))
  const searchQuery = useJobsFilter((state) => state.searchQuery)

  const filteredJobs =
    searchQuery === '' && isHome
      ? jobs.slice(0, 3)
      : jobs.filter((job) => {
          return (
            job.title.toLowerCase().includes(searchQuery) ||
            job.description.toLowerCase().includes(searchQuery)
          )
        })

  return (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {filteredJobs.length
            ? isHome
              ? 'Recent Jobs'
              : 'All Jobs'
            : 'No Jobs'}
        </h2>
        <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
          {isLoading && <Loader />}
          {filteredJobs.map((job) => (
            <JobItem
              key={job.uuid}
              job={job}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
