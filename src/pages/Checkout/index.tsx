import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from '@phosphor-icons/react'
import {
  CompletedOrder,
  Content,
  CartCoffee,
  Location, Payment,
  LocationHeader,
  PaymentHeader,
  Conditions,
  PaymentButton,
} from "./styles";
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { Cart } from './Cart';

import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';

export function Checkout() {

  const theme = useTheme()

  const [selected, setSelected] = useState('')
  const maskGenerator = createDefaultMaskGenerator('99999-999');

  const [value, setValue] = useState('');

  return (
    <Content>
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

          <form>
            <div className='header'>
              <MaskedInput
                name="zipcode"
                placeholder='CEP'
                maskGenerator={maskGenerator}
                value={value}
                onChange={setValue}
              />
            </div>
            <div className='address-top'>
              <input name="adress" placeholder='Rua' />
            </div>
            <div className='address-mid'>
              <input name="number" placeholder='Número' />
              <input name="complement" placeholder='Complemento' />
            </div>
            <div className='address-bottom'>
              <input name="neighborhood" placeholder='Bairro' />
              <input name="city" placeholder='Cidade' />
              <input name="state" placeholder='UF' />
            </div>

          </form>

        </Location>

        <Payment>
          <PaymentHeader>
            <CurrencyDollar size={22} color={theme?.purple} />
            <div>
              <h4>Pagamento</h4>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </PaymentHeader>

          <Conditions>
            <PaymentButton onClick={() => selected !== 'credit' ? setSelected('credit') : setSelected('')} type='button' isSelected={selected === 'credit' ? true : false}>
              <CreditCard size={22} color={theme?.purple} />
              <span>CARTÃO DE DÉBITO</span>
            </PaymentButton>

            <PaymentButton onClick={() => selected !== 'debit' ? setSelected('debit') : setSelected('')} type='button' isSelected={selected === 'debit' ? true : false}>
              <Bank size={22} color={theme?.purple} />
              <span>CARTÃO DE DÉBITO</span>
            </PaymentButton>

            <PaymentButton onClick={() => selected !== 'money' ? setSelected('money') : setSelected('')} type='button' isSelected={selected === 'money' ? true : false}>
              <Money size={22} color={theme?.purple} />
              <span>DINHEIRO</span>
            </PaymentButton>
          </Conditions>

        </Payment>
      </CompletedOrder>

      <CartCoffee>
        <h3>cafés selecionados</h3>

        <Cart />
      </CartCoffee>
    </Content >
  )
}