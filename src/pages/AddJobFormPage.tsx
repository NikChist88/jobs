import { FC } from 'react'
import { Formik, Field, Form, FastField } from 'formik'
import { JobType } from '../api/jobs-api'

export const AddJobFormPage: FC = () => {
  const initialValues: JobType = {
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
  }

  const handleSubmit = (values: JobType) => {
    // Отправка данных на сервер
    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="jobType">
          <FastField
            as="select"
            className={`border rounded w-full py-2 px-3 `}
            required
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </FastField>
        </Field>
        <Field name="title">
          <FastField
            type="text"
            className={`border rounded w-full py-2 px-3 mb-2 `}
            placeholder="eg. Beautiful Apartment In Miami"
            required
          />
        </Field>
        <Field name="description">
          <FastField
            as="textarea"
            className={`border rounded w-full py-2 px-3 `}
            rows={4}
            placeholder="Add any job duties, expectations, requirements, etc"
          />
        </Field>
        <Field name="salary">
          <FastField
            as="select"
            className={`border rounded w-full py-2 px-3 `}
            required
          >
            <option value="Under $50K">Under $50K</option>
            <option value="$50K - 60K">$50K - $60K</option>
            <option value="$60K - 70K">$60K - $70K</option>
            <option value="$70K - 80K">$70K - $80K</option>
            <option value="$80K - 90K">$80K - $90K</option>
            <option value="$90K - 100K">$90</option>
            <option value="$100K - 125K">$100K - $125K</option>
            <option value="$125K - 150K">$125K - $150K</option>
            <option value="$150K - 175K">$150K - $175K</option>
            <option value="$175K - 200K">$175K - $200K</option>
            <option value="Over $200K">Over $200K</option>
          </FastField>
        </Field>
        <Field name="location">
          <FastField
            type="text"
            className={`border rounded w-full py-2 px-3 mb-2 `}
            placeholder="Company Location"
            required
          />
        </Field>
        <Field name="company.name">
          <FastField
            type="text"
            className={`border rounded w-full py-2 px-3 `}
            placeholder="Company Name"
          />
        </Field>
        <Field name="company.description">
          <FastField
            as="textarea"
            className={`border rounded w-full py-2 px-3 `}
            rows={4}
            placeholder="What does your company do?"
          />
        </Field>
        <Field name="company.contactEmail">
          <FastField
            type="email"
            className={`border rounded w-full py-2 px-3 `}
            placeholder="Email address for applicants"
            required
          />
        </Field>
        <Field name="company.contactPhone">
          <FastField
            type="tel"
            className={`border rounded w-full py-2 px-3 `}
            placeholder="Optional phone for applicants"
          />
        </Field>
        <button
          type="submit"
          className="bg-indigo-500 transition-colors duration-300 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        >
          Add Job
        </button>
      </Form>
    </Formik>
  )
}
