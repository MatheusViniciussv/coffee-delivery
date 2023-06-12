import { ShoppingCartSimple } from "@phosphor-icons/react";
import { Actions, CardBuy, CardTitle, CardType, CardTypeContainer, ContentCard, IconButton, Price } from "./styles";
import { useTheme } from "styled-components";
import { Counter } from "../../../components/Counter";

interface Catalog {
  data: {
    name: string
    description: string
    value: number
    type: Array<{ id: string, name: string }>
    image: string
    id: string
  }
}

export function Card({ data }: Catalog) {
  const theme = useTheme()

  return (
    <ContentCard>
      <img src={data.image} alt={data.name} />

      <CardTypeContainer>
        {data?.type.map((type) => (
          <CardType key={type.id}>
            {type.name}
          </CardType>
        ))}
      </CardTypeContainer>

      <CardTitle>
        <strong>
          {data.name}
        </strong>

        <span>
          {data.description}
        </span>
      </CardTitle>

      <CardBuy>
        <Price>
          <span>R$</span>
          <strong>{Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(data.value)}</strong>
        </Price>

        <Actions>
          <Counter coffeeId={data.id} />

          <IconButton>
            <ShoppingCartSimple size={22} weight='fill' color={theme?.white} />
          </IconButton>
        </Actions>
      </CardBuy>

    </ContentCard>
  )
}