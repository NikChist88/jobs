import { FC, useState } from 'react'
import { Breadcrumbs } from '@components/Breadcrumbs'
import { useFormik } from 'formik'
import { JobType, jobsAPI } from '../api/jobs-api'
import { AxiosError } from 'axios'
import { Navigate } from 'react-router-dom'

export const AddJobPage: FC = () => {
  const [jobAdded, setJobAdded] = useState(false)

  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      type: '',
      description: '',
      salary: '',
      location: '',
      company: {
        name: '',
        description: '',
        contactEmail: '',
        contactPhone: '',
      },
    },
    onSubmit: (values: JobType) => {
      jobsAPI
        .addJob(values)
        .then((res) => {
          if (res) {
            window.alert('Job added!')
            setJobAdded(true)
          }
        })
        .catch((err: AxiosError) => window.alert(err.message))
    },
  })

  if (jobAdded) {
    return <Navigate to={'/jobs'} />
  }

  return (
    <section className="bg-indigo-50">
      <Breadcrumbs
        href="/"
        title="Back to Home Page"
      />
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
                {...formik.getFieldProps('type')}
              >
                <option value='---'>---</option>
                <option value='Full-Time'>Full-Time</option>
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
                {...formik.getFieldProps('title')}
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
                {...formik.getFieldProps('description')}
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
                {...formik.getFieldProps('salary')}
              >
                <option value='---'>---</option>
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
                {...formik.getFieldProps('location')}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                id="name"
                type="text"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                {...formik.getFieldProps('company.name')}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="desc"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="desc"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="What does your company do?"
                {...formik.getFieldProps('company.desc')}
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
                {...formik.getFieldProps('company.contactEmail')}
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
                {...formik.getFieldProps('company.contactPhone')}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 transition-colors duration-300 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
