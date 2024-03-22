import { FC } from 'react'
import { Hero } from '@components/Hero'
import { HomeCards } from '@components/HomeCards'
import { JobsList } from '@components/JobsList'
import { ViewAllJobs } from '@components/ViewAllJobs'
import { JobType } from 'types/job-type'

type HomePagePropsType = {
  jobs: JobType[]
}

export const HomePage: FC<HomePagePropsType> = ({ jobs }) => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsList jobs={jobs} />
      <ViewAllJobs />
    </>
  )
}
