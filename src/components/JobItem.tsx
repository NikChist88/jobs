import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'
import { JobType } from 'api/jobs-api'

type JobPropsType = {
  job: JobType
}

export const JobItem: FC<JobPropsType> = ({ job }) => {
  const [showMore, setShowMore] = useState(false)
  let description = job.description

  if (!showMore) {
    description = description.substring(0, 90) + '...'
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className="mb-1">{description}</div>
        <span
          className="block mb-5 text-indigo-600 cursor-pointer hover:underline"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? ' Less...' : 'More...'}
        </span>
        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex items-center gap-2 text-orange-700 mb-3">
            <FaLocationDot className="fa-solid fa-location-dot text-lg" />
            {job.location}
          </div>
          <NavLink
            to={`/job`}
            className="h-[36px] bg-indigo-500 transition-colors duration-300 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  )
}
