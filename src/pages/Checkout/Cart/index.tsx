import { Actions, CartValue, Coffee, Container, Content, Price, Purchase, Remove } from "./styles";

import { useTheme } from "styled-components";
import { Trash } from "@phosphor-icons/react";
import { Counter } from "../../../components/Counter";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export function Cart() {
  const theme = useTheme()

  const { cart } = useContext(CartContext)

  return (
    <Container>
      {cart.map((coffee) => {

        console.log(coffee)

        return (
          <Content key={coffee.id}>
            <Coffee>
              <img src={coffee.image} />

              <div>
                <span>{coffee.name}</span>

                <Actions>
                  <Counter coffeeId={coffee.id} />

                  <Remove>
                    <Trash color={theme?.purple} size={18} />
                    <span>REMOVER</span>
                  </Remove>
                </Actions>
              </div>
            </Coffee>

            <Price>
              <strong>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRA' }).format(coffee.value * coffee.quantity)}</strong>
            </Price>
          </Content>
        )
      })}

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