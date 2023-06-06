import { useTheme } from "styled-components"
import { CounterButton, Content } from "./styles"
import { Minus, Plus } from "@phosphor-icons/react"

export function Counter() {

  const theme = useTheme()

  return (
    <Content>
      <CounterButton radiusDiraction="left">
        <Minus color={theme?.purple} />
      </CounterButton>
      1
      <CounterButton radiusDiraction="right">
        <Plus color={theme?.purple} />
      </CounterButton>
    </Content>
  )
}