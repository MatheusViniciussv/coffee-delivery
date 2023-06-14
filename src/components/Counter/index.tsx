import { useTheme } from "styled-components"
import { CounterButton, Content } from "./styles"
import { Minus, Plus } from "@phosphor-icons/react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

interface CounterProps {
  id: string
}

export function Counter({ id }: CounterProps) {

  const theme = useTheme()

  const { addCoffeeToCart, lessCoffeeToCart, cart } = useContext(CartContext)

  return (
    <Content>
      <CounterButton onClick={() => lessCoffeeToCart(id)} radiusDiraction="left">
        <Minus color={theme?.purple} />
      </CounterButton>
      {(cart?.find((coffee) => { return coffee?.id === id })?.quantity) ?? 0}
      <CounterButton onClick={() => addCoffeeToCart(id)} radiusDiraction="right">
        <Plus color={theme?.purple} />
      </CounterButton>
    </Content>
  )
}