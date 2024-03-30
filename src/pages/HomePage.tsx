import { FC } from 'react'
import { Hero } from '@components/Hero'
import { HomeCards } from '@components/HomeCards'
import { JobsList } from '@components/JobsList'
import { ViewAllJobs } from '@components/ViewAllJobs'

export const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsList isHome />
      <ViewAllJobs />
    </>
  )
}
