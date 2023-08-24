import { Actions, CartValue, Coffee, Content, Price, Remove } from "./styles";

import { useTheme } from "styled-components";
import { Trash } from "@phosphor-icons/react";
import { Counter } from "../../../components/Counter";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { stringFormatter } from "../../../utils/stringFormatter";
import { Coffee as CoffeeType } from "../../../reducers/cart/reducer";

export function Cart() {
  const theme = useTheme()

  const { cart, removeCoffeeToCart } = useContext(CartContext)

  const [delivery, setDelivery] = useState(0)

  useEffect(() => {
    if (!cart.length) {
      return
    }
    setDelivery(Math.floor(Math.random() * (1300 - 499) + 499))
  }, [cart])

  function totalOfItems(items: CoffeeType[]): number {

    return cart.length > 0 ? items.reduce((acc, curr) => acc + (curr.value * curr.quantity), 0) : 0
  }

  function totalOfCart(value: number, delivery: number): number {
    return cart.length > 0 ? value + delivery : 0
  }

  return (
    <>
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
            {stringFormatter.currency(totalOfItems(cart))}
          </span>
          <span>{stringFormatter.currency(delivery)}</span>
          <strong>{stringFormatter.currency(totalOfCart(totalOfItems(cart), delivery))}</strong>
        </div>
      </CartValue>
    </>
  )
}