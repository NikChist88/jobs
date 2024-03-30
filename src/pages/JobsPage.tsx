import { FC } from 'react'
import { JobsList } from '@components/JobsList'
import { JobsFilter } from '@components/JobsFilter'
import { GoBack } from '@components/GoBack'

export const JobsPage: FC = () => {
  return (
    <>
      <GoBack />
      <JobsFilter />
      <JobsList />
    </>
  )
}
