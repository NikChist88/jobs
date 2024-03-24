import { FC } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

type BreadcrumbsPropsType = {
  href: string
  title: string
}

export const Breadcrumbs: FC<BreadcrumbsPropsType> = ({ href, title }) => {
  return (
    <section className='bg-white'>
      <div className="container m-auto py-6 px-6">
        <NavLink
          to={href}
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className="fas fa-arrow-left mr-2" />
          {title}
        </NavLink>
      </div>
    </section>
  )
}
