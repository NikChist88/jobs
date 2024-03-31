import { FC } from 'react'
import { JobsList } from '@components/JobsList'
import { Filter } from '@components/Filter'
import { GoBack } from '@components/GoBack'

export const JobsPage: FC = () => {
  return (
    <>
      <GoBack />
      <Filter />
      <JobsList />
    </>
  )
}
