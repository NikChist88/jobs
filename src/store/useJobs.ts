import { jobsAPI } from '../api/jobs-api'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { persist, createJSONStorage } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

export type JobType = {
  id: string
  uuid: string
  title: string
  type: string
  description: string
  location: string
  salary: string
  companyName: string
  companyDesc: string
  contactEmail: string
  contactPhone: string
}
type JobsStoreType = {
  jobs: JobType[]
  job: JobType
  isLoading: boolean
  createJob: (job: JobType) => void
  updateJob: (requestId: string, job: JobType) => void
  deleteJob: (requestId: string) => void
  fetchJobs: () => void
  fetchJob: (id: string) => void
}

export const useJobs = createWithEqualityFn<JobsStoreType>()(
  persist(
    (set, get) => ({
      jobs: [],
      job: {
        id: '',
        uuid: '',
        title: '',
        type: '',
        description: '',
        location: '',
        salary: '',
        companyName: '',
        companyDesc: '',
        contactEmail: '',
        contactPhone: '',
      },
      isLoading: false,
      fetchJobs: () => {
        set({ isLoading: true })
        jobsAPI
          .getJobs()
          .then((res) => set({ jobs: res.data }))
          .catch((err: AxiosError) =>
            toast.error(err.message, { autoClose: false })
          )
          .finally(() => set({ isLoading: false }))
      },
      fetchJob: (id: string) => {
        jobsAPI
          .getJob(id)
          .then((res) => {
            set({ job: res.data })
          })
          .catch((err: AxiosError) =>
            toast.error(err.message, { autoClose: false })
          )
      },
      createJob: (job: JobType) => {
        jobsAPI
          .createJob(job)
          .then((res) => {
            set((state) => ({ jobs: [...state.jobs, res.data] }))
            toast.success('Job created!')
          })
          .catch((err: AxiosError) =>
            toast.error(err.message, { autoClose: false })
          )
      },
      updateJob: (id: string, job: JobType) => {
        jobsAPI
          .updateJob(id, job)
          .then(() => {
            const jobs = get().jobs
            const updatedJobs = jobs.map((item) =>
              item.id === id ? job : item
            )
            set({ jobs: updatedJobs })
            toast.success('Job updated!')
          })
          .catch((err: AxiosError) =>
            toast.error(err.message, { autoClose: false })
          )
      },
      deleteJob: (id: string) => {
        jobsAPI.deleteJob(id).then(() => {
          const jobs = get().jobs
          const updatedJobs = jobs.filter((job) => job.id !== id)
          set({ jobs: updatedJobs })
          toast.success('Job deleted!')
        })
      },
    }),
    {
      name: 'jobs-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ jobs: state.jobs, isLoading: state.isLoading }),
    }
  ),
  shallow
)
