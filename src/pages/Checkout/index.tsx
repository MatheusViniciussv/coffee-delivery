import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from '@phosphor-icons/react'
import { CoffeCartContent, CompletedOrder, Content, SelectedCoffee, Location, Payment, LocationHeader, PaymentHeader, Conditions, PaymentButton, FormInput } from "./styles";
import { useTheme } from 'styled-components';

export function Checkout() {

  const theme = useTheme()

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
            <FormInput name="zipcode" placeholder='CEP' />
            <FormInput name="adress" placeholder='Rua' />
            <FormInput name="number" placeholder='Número' />
            <FormInput name="complement" placeholder='Complemento' />
            <FormInput name="neighborhood" placeholder='Bairro' />
            <FormInput name="city" placeholder='Cidade' />
            <FormInput name="state" placeholder='UF' />
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
            <PaymentButton>
              <CreditCard size={22} color={theme?.purple} />
              <span>CARTÃO DE DÉBITO</span>
            </PaymentButton>

            <PaymentButton>
              <Bank size={22} color={theme?.purple} />
              <span>CARTÃO DE DÉBITO</span>
            </PaymentButton>

            <PaymentButton>
              <Money size={22} color={theme?.purple} />
              <span>DINHEIRO</span>
            </PaymentButton>
          </Conditions>

        </Payment>
      </CompletedOrder>
      <SelectedCoffee>
        <h1>cafés selecionados</h1>
        <CoffeCartContent>
          <h1>coffeeeee</h1>

        </CoffeCartContent>
      </SelectedCoffee>
    </Content>
  )
}