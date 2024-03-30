import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { CardType } from 'api/jobs-api'

type CardPropsType = {
  card: CardType
}

export const Card: FC<CardPropsType> = ({ card }) => {
  return (
    <div className={`${card.bg} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{card.title}</h2>
      <p className="mt-2 mb-4">{card.description}</p>
      <NavLink
        to={card.href}
        className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-indigo-700"
      >
        {card.link}
      </NavLink>
    </div>
  )
}
