import { ReactNode, createContext, useEffect, useReducer, useState } from "react"
import { Coffee, cartReducer } from "../reducers/cart/reducer"
import { addOneCoffeeAction, lessOneCoffeeAction, removeOneCoffeeAction, CreateCoffeeRequest, clearCoffeeAction } from "../reducers/cart/actions"
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
interface Checkout {
  coffeeId: string | string[];
  paymentMethod: string;
  address: {
    number: string;
    zipcode: string;
    road: string;
    city: string;
    neighborhood: string;
    state: string;
    complement?: string | undefined;
  };
}

interface CartContextTypes {
  catalog: Catalog[]
  cart: Coffee[]
  checkout?: Checkout
  addCoffeeToCart: (id: string) => void
  lessCoffeeToCart: (id: string) => void
  removeCoffeeToCart: (id: string) => void
  clearCoffeeToCart: () => void
  createCheckoutCoffee: (cart: Checkout) => void
}

export const CartContext = createContext({} as CartContextTypes)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer,
    { cart: [], catalog: [], checkout: {} as Checkout },
    (initialState) => {
      const storedState = localStorage.getItem('@ignite-coffee-delivery')

      if (storedState) {
        return JSON.parse(storedState)
      }

      return initialState
    })

  const [catalog, setCatalog] = useState<Catalog[]>([])

  useEffect(() => {
    setCatalog(api)
  }, [])

  useEffect(() => {
    const stateFormated = JSON.stringify(cartState)

    localStorage.setItem('@ignite-coffee-delivery', stateFormated)
  }, [cartState])

  const { cart, checkout } = cartState

  function addCoffeeToCart(id: string) {
    dispatch(addOneCoffeeAction(id))
  }

  function lessCoffeeToCart(id: string) {
    dispatch(lessOneCoffeeAction(id))
  }

  function removeCoffeeToCart(id: string) {
    dispatch(removeOneCoffeeAction(id))
  }

  function clearCoffeeToCart() {
    dispatch(clearCoffeeAction())
  }

  function createCheckoutCoffee(cart: Checkout) {
    dispatch(CreateCoffeeRequest(cart))
  }


  return (
    <CartContext.Provider value={{ cart, checkout, addCoffeeToCart, lessCoffeeToCart, removeCoffeeToCart, catalog, createCheckoutCoffee, clearCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}