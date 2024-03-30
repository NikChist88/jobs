import { FC } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const GoBack: FC = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <section className="bg-white">
      <div className="container m-auto py-6 px-6 flex items-center gap-1">
        <span
          className="text-indigo-500 hover:text-indigo-600 flex items-center cursor-pointer"
          onClick={goBack}
        >
          <FaArrowLeft
            className="fas fa-arrow-left mr-2"
            color="#6268ED"
          />
          Back
        </span>
      </div>
    </section>
  )
}
