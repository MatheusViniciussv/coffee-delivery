import { ContentCard } from "./styles";

interface CardData {
  data: {
    title: string
    description: string
    value: number
    type: Array<string>
    image: string
    id: number
  }
}

export function Card({ data }: CardData) {
  return (
    <ContentCard>
      <img src={data.image} alt={data.title} />
      {data.title}

      <div>
        {data.description}
      </div>
    </ContentCard>
  )
}