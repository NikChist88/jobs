import { ChangeEvent } from 'react'
import { useJobs } from '../store/store'

export const JobsFilter = () => {
  const { searchQuery, setSearchQuery } = useJobs((state) => ({
    searchQuery: state.searchQuery,
    setSearchQuery: state.setSearchQuery,
  }))

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
  }

  return (
    <section className="bg-blue-50 py-4">
      <div className="container mx-auto px-4">
        <div className="relative">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Filter jobs..."
            value={searchQuery}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  )
}
