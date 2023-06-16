import { Actions, CartValue, Coffee, Container, Content, Price, Purchase, Remove } from "./styles";

import { useTheme } from "styled-components";
import { Trash } from "@phosphor-icons/react";
import { Counter } from "../../../components/Counter";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { stringFormatter } from "../../../utils/stringFormatter";
import { Coffee as ICoffee } from "../../../reducers/cart/reducer";

export function Cart() {
  const theme = useTheme()

  const { cart, removeCoffeeToCart } = useContext(CartContext)

  return (
    <Container>
      {cart.map((coffee) => {
        return (
          <Content key={coffee.id}>
            <Coffee>
              <img src={coffee.image} />

              <div>
                <span>{coffee.name}</span>

                <Actions>
                  <Counter id={coffee.id} />

                  <Remove onClick={() => removeCoffeeToCart(coffee.id)}>
                    <Trash color={theme?.purple} size={18} />
                    <span>REMOVER</span>
                  </Remove>
                </Actions>
              </div>
            </Coffee>

            <Price>
              <strong>{stringFormatter.currency(coffee.value * coffee.quantity)}</strong>
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
          <span>
            {cart.length > 0 && stringFormatter.currency(cart.reduce((acc, curr) => acc + (curr.value * curr.quantity), 0))}
          </span>
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