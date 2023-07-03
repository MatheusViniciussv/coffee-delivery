import { MapPinLine } from '@phosphor-icons/react'
import {
  CompletedOrder,
  Content,
  CartCoffee,
  Location,
  LocationHeader,
  Purchase,
  CartContent
} from "./styles";
import { useTheme } from 'styled-components';
import { Cart } from './Cart';
import { CartAddressForm } from './CartAddressForm';
import { zodResolver } from '@hookform/resolvers/zod'

// import { Link } from "react-router-dom";

import { FormProvider, useForm } from 'react-hook-form'
import zod from 'zod'
import { CartPaymentMethodForm } from './CartPaymentMethodForm';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const cartCoffeeFormValidationSchema = zod.object({
  address: zod.object({
    zipcode: zod.string().nonempty({ message: 'this field is required' }),
    road: zod.string().min(3).nonempty({ message: 'this field is required' }),
    number: zod.string().nonempty({ message: 'this field is required' }),
    complement: zod.string().optional(),
    city: zod.string().nonempty({ message: 'this field is required' }),
    neighborhood: zod.string().nonempty({ message: 'this field is required' }),
    state: zod.string().max(2).nonempty({ message: 'this field is required' })
  }),
  payment: zod.string().nonempty({ message: 'this field is required' })
})

type cartCoffeeFormData = zod.infer<typeof cartCoffeeFormValidationSchema>

export function Checkout() {

  const theme = useTheme()
  const { createCheckoutCoffee, cart, clearCoffeeToCart } = useContext(CartContext)

  const navigator = useNavigate()

  const CartCoffeeForm = useForm<cartCoffeeFormData>({
    resolver: zodResolver(cartCoffeeFormValidationSchema)
  })

  const { handleSubmit } = CartCoffeeForm

  function handleOrder(data: cartCoffeeFormData) {
    localStorage.removeItem("@ignite-coffee-delivery");

    createCheckoutCoffee({
      address: data.address,
      paymentMethod: data.payment,
      coffeeId: [...cart.map((coffee) => coffee.id)]
    })

    clearCoffeeToCart()

    navigator('/success')
  }

  return (
    <Content>
      <form onSubmit={handleSubmit(handleOrder)}>
        <CompletedOrder>
          <h3>Complete seu pedido</h3>
          <Location>
            <LocationHeader>
              <MapPinLine size={22} color={theme?.yellow} />
              <div>
                <h4>Endereço de Entrega</h4>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </LocationHeader>

            <FormProvider {...CartCoffeeForm}>
              <CartAddressForm />
            </FormProvider>

          </Location>


          <FormProvider {...CartCoffeeForm}>
            <CartPaymentMethodForm />
          </FormProvider>


        </CompletedOrder>

        <CartCoffee>
          <h3>cafés selecionados</h3>

          <CartContent>

            <Cart />
            <Purchase onClick={() => localStorage.removeItem('@ignite-coffee-delivery')} type="submit">CONFIRMAR PEDIDO</Purchase>
          </CartContent>
        </CartCoffee>
      </form>
    </Content >
  )
}