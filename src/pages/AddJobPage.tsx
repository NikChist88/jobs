import { FC } from 'react'
import { GoBack } from '@components/GoBack'
import { useFormik } from 'formik'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useJobs, JobType } from '../store/store'
import { nanoid } from 'nanoid'

export const AddJobPage: FC = () => {
  const { createJob, updateJob } = useJobs((state) => ({
    createJob: state.createJob,
    updateJob: state.updateJob,
  }))
  const job = useLoaderData() as JobType
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      id: job?.id,
      uuid: nanoid(),
      title: job?.title,
      type: job?.type,
      description: job?.description,
      salary: job?.salary,
      location: job?.location,
      companyName: job?.companyName,
      companyDesc: job?.companyDesc,
      contactEmail: job?.contactEmail,
      contactPhone: job?.contactPhone,
    },
    onSubmit: (values: JobType) => {
      job ? updateJob(job.id, values) : createJob(values)
      navigate('/jobs')
    },
  })

  return (
    <section className="bg-indigo-50">
      <GoBack />
      <div className="container m-auto max-w-2xl py-14">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                className="border rounded w-full py-2 px-3"
                required
                onChange={formik.handleChange}
                defaultValue={formik.values.type}
              >
                <option value="---">---</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                onChange={formik.handleChange}
                defaultValue={formik.values.title}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="Add any job duties, expectations, requirements, etc"
                onChange={formik.handleChange}
                defaultValue={formik.values.description}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="salary"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                className="border rounded w-full py-2 px-3"
                required
                onChange={formik.handleChange}
                defaultValue={formik.values.salary}
              >
                <option value="---">---</option>
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-gray-700 font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                onChange={formik.handleChange}
                defaultValue={formik.values.location}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                onChange={formik.handleChange}
                defaultValue={formik.values.companyName}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="companyDesc"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="companyDesc"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="What does your company do?"
                onChange={formik.handleChange}
                defaultValue={formik.values.companyDesc}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contactEmail"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contactEmail"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                onChange={formik.handleChange}
                defaultValue={formik.values.contactEmail}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contactPhone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contactPhone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                onChange={formik.handleChange}
                defaultValue={formik.values.contactPhone}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 transition-colors duration-300 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {job ? 'Update job' : 'Add job'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
