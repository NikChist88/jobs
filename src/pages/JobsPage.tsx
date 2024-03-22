import { Header } from "@components/Header"
import { Jobs } from "@components/Jobs"
import { FilterJobs } from "@components/FilterJobs"

export const JobsPage = () => {
  return (
    <>
      <Header />
      <FilterJobs />
      <Jobs />
    </>
  )
}
