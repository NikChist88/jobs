import { FC } from 'react'
import { Hero } from '@components/Hero'
import { HomeCards } from '@components/HomeCards'
import { JobsList } from '@components/JobsList'
import { ViewAllJobs } from '@components/ViewAllJobs'
import { useAuth } from '../store/store'
import { Navigate } from 'react-router-dom'

export const HomePage: FC = () => {
  const isLogin = useAuth((state) => state.isLogin)

  if (!isLogin) {
    return <Navigate to={'/login'} />
  }

  return (
    <>
      <Hero />
      <HomeCards />
      <JobsList isHome />
      <ViewAllJobs />
    </>
  )
}
