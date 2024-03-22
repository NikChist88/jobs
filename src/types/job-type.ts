type CompanyType = {
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