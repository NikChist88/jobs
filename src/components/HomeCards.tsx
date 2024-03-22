import { memo } from 'react'
import { Card } from './Card'
import { cards } from '../data/cards.json'

export const HomeCards = memo(() => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {cards &&
            cards.map((card) => (
              <Card
                key={card.id}
                card={card}
              />
            ))}
        </div>
      </div>
    </section>
  )
})
