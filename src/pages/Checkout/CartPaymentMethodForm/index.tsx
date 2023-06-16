import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { Conditions, Payment, PaymentButton, PaymentHeader } from "./styles";
import { useTheme } from "styled-components";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export function CartPaymentMethodForm() {

  const [selected, setSelected] = useState('')

  const theme = useTheme()

  const { register, setValue } = useFormContext()

  return (
    <Payment>
      <PaymentHeader>
        <CurrencyDollar size={22} color={theme?.purple} />
        <div>
          <h4>Pagamento</h4>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        </div>
      </PaymentHeader>

      <Conditions>
        <PaymentButton
          {...register('payment')}
          value="credit"
          onClick={() => {
            selected !== 'credit' ? setSelected('credit') : setSelected('')
            setValue('payment', 'credit')
          }}
          type='button' isSelected={selected === 'credit' ? true : false}>
          <CreditCard size={22} color={theme?.purple} />
          <span>CARTÃO DE CRÉDITO</span>
        </PaymentButton>

        <PaymentButton
          value="debit"
          {...register('payment')}
          onClick={() => {
            selected !== 'debit' ? setSelected('debit') : setSelected('')
            setValue('payment', 'debit')
          }} type='button'
          isSelected={selected === 'debit' ? true : false}
        >
          <Bank size={22} color={theme?.purple} />
          <span>CARTÃO DE DÉBITO</span>
        </PaymentButton>

        <PaymentButton
          value="money"
          {...register('payment')}
          onClick={() => {
            selected !== 'money' ? setSelected('money') : setSelected('')
            setValue('payment', 'money')
          }}
          type='button' isSelected={selected === 'money' ? true : false}
        >
          <Money size={22} color={theme?.purple} />
          <span>DINHEIRO</span>
        </PaymentButton>
      </Conditions>

    </Payment>
  )
}