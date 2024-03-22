import { FC } from 'react'
import { CardType } from 'types/card-type'

type CardPropsType = {
  card: CardType
}

export const Card: FC<CardPropsType> = ({ card }) => {
  return (
    <div className={`${card.bg} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{card.title}</h2>
      <p className="mt-2 mb-4">{card.description}</p>
      <a
        href="/jobs.html"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-gray-700"
      >
        {card.link}
      </a>
    </div>
  )
}
