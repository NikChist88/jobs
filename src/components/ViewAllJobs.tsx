import { NavLink } from "react-router-dom"

export const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <NavLink
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl transition-colors duration-300 hover:bg-gray-700"
      >
        View All Jobs
      </NavLink>
    </section>
  )
}
