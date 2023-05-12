import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../components/Header'

export function DefaultLayout() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  )
}