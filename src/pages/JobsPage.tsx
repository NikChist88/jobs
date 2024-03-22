import { FC } from 'react'
import { JobsList } from '@components/JobsList'
import { JobsFilter } from '@components/JobsFilter'

export const JobsPage: FC = () => {
  return (
    <>
      <JobsFilter />
      <JobsList />
    </>
  )
}
