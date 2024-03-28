import { jobsAPI } from '../api/jobs-api'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { persist, createJSONStorage } from 'zustand/middleware'

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

type StoreType = {
  jobs: JobType[]
  isLoading: boolean
  searchQuery: string
  setSearchQuery: (query: string) => void
  createJob: (job: JobType) => void
  updateJob: (requestId: string, job: JobType) => void
  deleteJob: (requestId: string) => void
  fetchJobs: () => void
}

export const useJobs = createWithEqualityFn<StoreType>()(
  persist(
    (set, get) => ({
      jobs: [],
      isLoading: false,
      searchQuery: '',
      setSearchQuery: (query: string) => {
        set(() => ({ searchQuery: query }))
      },
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
            set(() => ({ jobs: updatedJobs }))
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
          set(() => ({ jobs: updatedJobs }))
          toast.success('Job deleted!')
        })
      },
    }),
    {
      name: 'jobs-storage',
      storage: createJSONStorage(() => localStorage),
      // partialize: (state) => ({ jobs: state.jobs }),
    }
  ),
  shallow
)
