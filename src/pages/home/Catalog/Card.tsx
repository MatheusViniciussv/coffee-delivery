import { CardBuy, CardTitle, CardType, ContentCard } from "./styles";

interface CardData {
  data: {
    name: string
    description: string
    value: number
    type: Array<{ id: number, name: string }>
    image: string
    id: number
  }
}

export function Card({ data }: CardData) {
  return (
    <ContentCard>
      <img src={data.image} alt={data.name} />

      {data?.type.map((type) => (
        <CardType key={type.id}>
          {type.name}
        </CardType>
      ))}

      <CardTitle>
        <strong>
          {data.name}
        </strong>

        <span>
          {data.description}
        </span>
      </CardTitle>

      <CardBuy>

      </CardBuy>

    </ContentCard>
  )
}