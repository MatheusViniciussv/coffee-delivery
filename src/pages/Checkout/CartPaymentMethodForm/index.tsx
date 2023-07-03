import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { Conditions, Payment, PaymentButton, PaymentHeader } from "./styles";
import { useTheme } from "styled-components";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export function CartPaymentMethodForm() {

  const [selected, setSelected] = useState('')

  const theme = useTheme()

  const { register, setValue, formState: { errors } } = useFormContext()

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
        {/* <p>{errors?.payment?.message}</p> */}
        <PaymentButton
          {...register('payment')}
          value="Cartão de Crédito"
          onClick={() => {
            selected !== 'CRÉDITO' ? setSelected('CRÉDITO') : setSelected('')
            setValue('payment', 'Cartão de Crédito')
          }}
          type='button' isSelected={selected === 'CRÉDITO' ? true : false}
        >
          <CreditCard size={22} color={theme?.purple} />
          <span>CARTÃO DE CRÉDITO</span>
        </PaymentButton>

        <PaymentButton
          {...register('payment')}
          value="Cartão de Débito"
          onClick={() => {
            selected !== 'DÉBITO' ? setSelected('DÉBITO') : setSelected('')
            setValue('payment', 'Cartão de Débito')
          }} type='button'
          isSelected={selected === 'DÉBITO' ? true : false}

        >
          <Bank size={22} color={theme?.purple} />
          <span>CARTÃO DE DÉBITO</span>
        </PaymentButton>

        <PaymentButton
          {...register('payment')}
          value="Dinheiro"
          onClick={() => {
            selected !== 'DINEHIRO' ? setSelected('DINEHIRO') : setSelected('')
            setValue('payment', 'Dinheiro')
          }}
          type='button' isSelected={selected === 'DINEHIRO' ? true : false}
        >
          <Money size={22} color={theme?.purple} />
          <span>DINHEIRO</span>
        </PaymentButton>
      </Conditions>

    </Payment>
  )
}