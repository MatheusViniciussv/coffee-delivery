import { useTheme } from "styled-components"
import { CounterButton, Content } from "./styles"
import { Minus, Plus } from "@phosphor-icons/react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

interface CounterProps {
  coffeeId: string
}

export function Counter({ coffeeId }: CounterProps) {

  const theme = useTheme()

  const { addCoffeeToCart, lessCoffeeToCart, cart } = useContext(CartContext)

  return (
    <Content>
      <CounterButton onClick={() => lessCoffeeToCart(coffeeId)} radiusDiraction="left">
        <Minus color={theme?.purple} />
      </CounterButton>
      {1}
      <CounterButton onClick={() => addCoffeeToCart(coffeeId)} radiusDiraction="right">
        <Plus color={theme?.purple} />
      </CounterButton>
    </Content>
  )
}