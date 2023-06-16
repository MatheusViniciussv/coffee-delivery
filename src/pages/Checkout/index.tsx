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

import { Link } from "react-router-dom";

import { FormProvider, useForm } from 'react-hook-form'
import zod from 'zod'
import { CartPaymentMethodForm } from './CartPaymentMethodForm';

const cartCoffeeFormValidationSchema = zod.object({
  address: zod.object({
    zipcode: zod.string().max(10),
    road: zod.string(),
    number: zod.string(),
    complement: zod.string().optional(),
    city: zod.string(),
    neighborhood: zod.string(),
    state: zod.string().max(2)
  }),
  payment: zod.string()
})

type cartCoffeeFormData = zod.infer<typeof cartCoffeeFormValidationSchema>

export function Checkout() {

  const theme = useTheme()

  const CartCoffeeForm = useForm<cartCoffeeFormData>({
    resolver: zodResolver(cartCoffeeFormValidationSchema)
  })

  const { handleSubmit } = CartCoffeeForm

  function handleOrder(data: cartCoffeeFormData) {
    console.log(data)
  }

  const error = (errors: any, e: any) => console.log(errors, e)

  return (
    <Content>
      <form onSubmit={handleSubmit(handleOrder, error)}>
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
            {/* <Link to='/success'> */}
            <Purchase type="submit">CONFIRMAR PEDIDO</Purchase>
            {/* </Link> */}
          </CartContent>
        </CartCoffee>
      </form>
    </Content >
  )
}