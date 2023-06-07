import { Container, Content, Detail, Header, Icon, Info, RequestDetails, Image } from "./styles";

import Illustration from '../../../assets/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

export function Success() {

  const theme = useTheme()

  return (
    <Container>
      <Content>
        <Header>
          <h3>Uhu! Pedido confirmado</h3>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Header>

        <RequestDetails>
          <Detail>
            <Icon color='purple' >
              <MapPin size={18} weight="fill" color={theme?.white} />
            </Icon>

            <Info>
              <div>
                <span>Entrega em </span>
                <strong>Rua João Daniel Martinelli, 102</strong>
              </div>
              <span>Farrapos - Porto Alegre, RS</span>
            </Info>
          </Detail>

          <Detail>
            <Icon color='yellow'>
              <Timer size={18} weight="fill" color={theme?.white} />
            </Icon>

            <Info>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </Info>
          </Detail>

          <Detail>
            <Icon color='yellow-dark'>
              <CurrencyDollar size={18} color={theme?.white} />
            </Icon>

            <Info>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </Info>
          </Detail>
        </RequestDetails>
      </Content>

      <Image>
        <img src={Illustration} />
      </Image>
    </Container>
  )
}