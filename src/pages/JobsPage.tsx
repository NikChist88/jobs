import { FC } from 'react'
import { JobsList } from '@components/JobsList'
import { JobsFilter } from '@components/JobsFilter'
import { Breadcrumbs } from '@components/Breadcrumbs'

export const JobsPage: FC = () => {
  return (
    <>
      <Breadcrumbs
        href="/"
        title="Back to Home Page"
      />
      <JobsFilter />
      <JobsList />
    </>
  )
}
