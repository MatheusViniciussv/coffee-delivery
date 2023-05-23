import HomeImage from '../../assets/home-image.svg'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'

import { HomeContainer, Content, Item, ItemsContent } from './styles';
import { useTheme } from 'styled-components';
import { Catalog } from './Catalog';

export function Home() {

  const theme = useTheme()

  return (
    <>
      <HomeContainer>
        <Content>
          <h3>Encontre o café perfeito para qualquer hora do dia</h3>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

          <ItemsContent>
            <Item color='orange'>
              <div>
                <ShoppingCart size={24} weight='fill' color={theme?.white} />
              </div>
              <span>Compra simples e segura</span>
            </Item>

            <Item color='gray'>
              <div><Package size={24} weight='fill' color={theme?.white} /></div>
              <span>Embalagem mantém o café intacto</span>
            </Item>

            <Item color='yellow'>
              <div><Timer size={24} weight='fill' color={theme?.white} /></div>

              <span>Entrega rápida e rastreada</span>
            </Item>

            <Item color='purple'>
              <div><Coffee size={24} weight='fill' color={theme?.white} /></div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </ItemsContent>
        </Content>

        <img src={HomeImage} />

      </HomeContainer>

      <Catalog />
    </>
  )
}