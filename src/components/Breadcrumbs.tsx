import { FaArrowLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const Breadcrumbs = () => {
  return (
    <section>
      <div className="container m-auto py-6 px-6">
        <NavLink
          to="/jobs"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className="fas fa-arrow-left mr-2" /> Back to Jobs
          Listings
        </NavLink>
      </div>
    </section>
  )
}
