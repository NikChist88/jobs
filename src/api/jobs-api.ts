import axios from 'axios'
import { JobType } from '../store/store'

const localhost = 'http://localhost:8000/'
const mockAPI = 'https://65fd6f139fc4425c6531ee24.mockapi.io/data/'

export const instance = axios.create({
  baseURL: mockAPI,
})

export const jobsAPI = {
  getJobs() {
    return instance.get<JobType[]>('jobs')
  },
  getJob(id: string) {
    return instance.get<JobType>(`jobs/${id}`)
  },
  createJob(job: JobType) {
    return instance.post('jobs', job)
  },
  deleteJob(id: string) {
    return instance.delete(`jobs/${id}`)
  },
  updateJob(id: string, job: JobType) {
    return instance.put<JobType>(`jobs/${id}`, job)
  },
}

export type CardType = {
  id: string
  href: string
  title: string
  description: string
  link: string
  bg: string
}
