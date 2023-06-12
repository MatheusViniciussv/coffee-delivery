import { produce } from 'immer'

import { ActionTypes } from './actions'
import { Catalog } from '../../context/CartContext';
import { api } from '../../api';

export interface Coffee {
  image: string;
  name: string;
  value: number;
  quantity: number;
  id: string;
}

interface CoffeeState {
  cart: Coffee[]
  catalog: Catalog[]
}

export function cartReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ONE_COFFEE: {
      const findCoffeeInCart = state.cart.find((coffee) => {
        return coffee.id === action.payload.coffeeId;
      });

      if (findCoffeeInCart) {
        return produce(state, (draft) => {
          draft.cart.push({
            ...findCoffeeInCart,
            quantity: findCoffeeInCart.quantity + 1,
          });
        });
      }


      const findCurrentCoffee = api.find((coffee) => {
        return coffee.id === action.payload.coffeeId;
      });

      console.log(findCurrentCoffee);


      if (findCurrentCoffee) {
        return produce(state, (draft) => {
          draft.cart.push({ ...findCurrentCoffee, quantity: 1 });
        });
      }

      return state
    }

    case ActionTypes.LESS_ONE_COFFEE: {
      const findCoffeeAlreadyExists = state.cart.find((coffee) => {
        return coffee.id === action.payload.coffeeId;
      });

      if (findCoffeeAlreadyExists && findCoffeeAlreadyExists.quantity < 0) {
        return produce(state, (draft) => {
          draft.cart.push({
            ...findCoffeeAlreadyExists,
            quantity: findCoffeeAlreadyExists.quantity - 1,
          });
        });
      }

      return state;
    }
    
    default:
      return state;
  }
}