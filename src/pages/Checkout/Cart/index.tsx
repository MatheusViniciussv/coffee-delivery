import { Actions, CartValue, Coffee, Container, Content, Price, Purchase, Remove } from "./styles";

import Express from '../../../assets/coffee-expresso.svg'
import Latte from '../../../assets/coffee-latte.svg'

import { useTheme } from "styled-components";
import { Trash } from "@phosphor-icons/react";
import { Counter } from "../../../components/Counter";
import { Link } from "react-router-dom";

export function Cart() {
  const theme = useTheme()

  return (
    <Container>
      <Content>
        <Coffee>
          <img src={Express} />

          <div>
            <span>Expresso Tradicional</span>

            <Actions>
              <Counter />

              <Remove>
                <Trash color={theme?.purple} size={18} />
                <span>REMOVER</span>
              </Remove>
            </Actions>
          </div>
        </Coffee>

        <Price>
          <strong>R$ 9,90</strong>
        </Price>
      </Content>

      <Content>
        <Coffee>
          <img src={Latte} />

          <div>
            <span>Latte</span>

            <Actions>
              <Counter />

              <Remove>
                <Trash color={theme?.purple} size={18} />
                <span>REMOVER</span>
              </Remove>
            </Actions>
          </div>
        </Coffee>

        <Price>
          <strong>R$ 9,90</strong>
        </Price>
      </Content>

      <CartValue>
        <div>
          <span>Total de itens</span>
          <span>Entrega</span>
          <strong>Total</strong>
        </div>

        <div>
          <span>R$ 29,70</span>
          <span>R$ 3,50</span>
          <strong>R$ 33,20</strong>
        </div>
      </CartValue>

      <Link to='/success'>
        <Purchase type='submit'>CONFIRMAR PEDIDO</Purchase>
      </Link>
    </Container>
  )
}