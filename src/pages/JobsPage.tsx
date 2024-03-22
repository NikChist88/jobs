import { FC } from 'react'
import { JobsList } from '@components/JobsList'
import { JobsFilter } from '@components/JobsFilter'
import { JobType } from 'types/job-type'

type JobsPagePropsType = {
  jobs: JobType[]
}

export const JobsPage: FC<JobsPagePropsType> = ({ jobs }) => {
  return (
    <>
      <JobsFilter />
      <JobsList jobs={jobs} />
    </>
  )
}
