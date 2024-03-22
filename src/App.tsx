import { Header } from '@components/Header'
import { Hero } from '@components/Hero'
import { HomeCards } from '@components/HomeCards'
import { Jobs } from '@components/Jobs'
import { ViewAll } from '@components/ViewAll'

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeCards />
      <Jobs />
      <ViewAll />
    </>
  )
}
