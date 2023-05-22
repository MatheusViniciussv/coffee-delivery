import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <HeaderComponent />
      <Outlet />
    </LayoutContainer>
  )
}