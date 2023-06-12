import logoHeader from '../../assets/logo-header.svg'

import { ShoppingCart, MapPin } from '@phosphor-icons/react'

import { ActionsContent, Container, Location } from "./styles";
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Geocode from 'react-geocode'
import { useState } from 'react';

export function HeaderComponent() {
  const theme = useTheme()

  const [city, setCity] = useState();
  const [state, setState] = useState();

  navigator.geolocation.getCurrentPosition(function (position) {
    Geocode.fromLatLng(String(position.coords.latitude), String(position.coords.longitude)).then(
      (response) => {
        const addressReversed = response.results.reverse()
        const city = addressReversed[2].address_components[0].long_name
        const state = addressReversed[2].address_components[1].short_name

        setCity(city)
        setState(state)
      },
      (error) => {
        console.log(error);
      }
    );
  });

  return (
    <Container>
      <Link to='/'>
        <img src={logoHeader} />
      </Link>

      <ActionsContent>
        <Location>
          <MapPin size={24} weight='fill' color={theme?.purple} />

          {city ?
            (
              <span>{`${city + ', ' + state}`}</span>
            ) : ''
          }
        </Location>

        <Link to='/checkout'>
          <ShoppingCart size={24} weight='fill' />
        </Link>
      </ActionsContent>
    </Container>
  )
}