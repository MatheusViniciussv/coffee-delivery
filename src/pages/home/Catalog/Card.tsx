import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { Actions, CardBuy, CardTitle, CardType, CardTypeContainer, ContentCard, Counter, CounterButton, IconButton, Price } from "./styles";
import { useTheme } from "styled-components";

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
          <Counter>
            <CounterButton radiusDiraction="left">
              <Minus color={theme?.purple} />
            </CounterButton>
            1
            <CounterButton radiusDiraction="right">
              <Plus color={theme?.purple} />
            </CounterButton>
          </Counter>

          <IconButton>
            <ShoppingCartSimple size={22} weight='fill' color={theme?.white} />
          </IconButton>
        </Actions>
      </CardBuy>

    </ContentCard>
  )
}