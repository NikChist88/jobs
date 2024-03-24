import axios from 'axios'

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
  addJob(job: JobType) {
    return instance.post('jobs', job)
  },
  deleteJob(id: string) {
    return instance.delete(`jobs/${id}`)
  }
}

export type CardType = {
  id: string
  href: string
  title: string
  description: string
  link: string
  bg: string
}

export type CompanyType = {
  name: string
  description: string
  contactEmail: string
  contactPhone: string
}

export type JobType = {
  id: string
  title: string
  type: string
  description: string
  location: string
  salary: string
  company: CompanyType
}
