import { ReactNode, createContext, useEffect, useReducer, useState } from "react"
import { Coffee, cartReducer } from "../reducers/cart/reducer"
import { addOneCoffeeAction, lessOneCoffeeAction, removeOneCoffeeAction } from "../reducers/cart/actions"
import { api } from "../api"

export interface Catalog {
  name: string
  description: string
  value: number
  type: Array<{ id: string, name: string }>
  image: string
  id: string
  quantity: number
}

interface CartContextTypes {
  catalog: Catalog[]
  cart: Coffee[]
  addCoffeeToCart: (id: string) => void
  lessCoffeeToCart: (id: string) => void
  removeCoffeeToCart: (id: string) => void
}

export const CartContext = createContext({} as CartContextTypes)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [], catalog: [] })
  const [catalog, setCatalog] = useState<Catalog[]>([])

  useEffect(() => {
    setCatalog(api)
  }, [])

  const { cart } = cartState

  function addCoffeeToCart(id: string) {
    dispatch(addOneCoffeeAction(id))
  }

  function lessCoffeeToCart(id: string) {
    dispatch(lessOneCoffeeAction(id))
  }

  function removeCoffeeToCart(id: string) {
    dispatch(removeOneCoffeeAction(id))
  }


  return (
    <CartContext.Provider value={{ cart, addCoffeeToCart, lessCoffeeToCart, removeCoffeeToCart, catalog }}>
      {children}
    </CartContext.Provider>
  )
}