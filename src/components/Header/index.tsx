import logoHeader from '../../assets/logo-header.svg'

import { ShoppingCart, MapPin } from '@phosphor-icons/react'

import { ActionsContent, Container, Location } from "./styles";
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';


export function HeaderComponent() {
  const theme = useTheme()

  return (
    <Container>
      <img src={logoHeader} />

      <ActionsContent>
        <Location>
          <MapPin size={24} weight='fill' color={theme?.purple} />

          <span>Salvador, BA</span>
        </Location>

        <Link to='/checkout'>
          <ShoppingCart size={24} weight='fill' />
        </Link>
      </ActionsContent>
    </Container>
  )
}