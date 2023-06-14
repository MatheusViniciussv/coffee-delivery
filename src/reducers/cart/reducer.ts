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
        return coffee.id === action.payload.coffeeId ;
      });

      if (findCoffeeInCart) {
        return produce(state, (draft) => {
          const coffeeIndex = state.cart.findIndex(
            (index) => findCoffeeInCart.id === index.id);

          draft.cart[coffeeIndex].quantity = findCoffeeInCart.quantity + 1 
        });

      }

      const findCurrentCoffee = api.find((coffee) => {
        return coffee.id === action.payload.coffeeId;
      });

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

      const coffeeIndex = state.cart.findIndex(
        (index) => findCoffeeAlreadyExists?.id === index.id
      );


      if (findCoffeeAlreadyExists && findCoffeeAlreadyExists.quantity > 1) {
        return produce(state, (draft) => {
          draft.cart[coffeeIndex].quantity =
            findCoffeeAlreadyExists.quantity - 1;
        });
      }

      if (findCoffeeAlreadyExists && findCoffeeAlreadyExists.quantity === 1) {
        return produce(state, (draft) => {
          const newCoffeeList = state.cart.filter((coffee) => coffee.id !== findCoffeeAlreadyExists.id);
          draft.cart = newCoffeeList
        });
      }

      return state;
    }

    case ActionTypes.REMOVE_COFFEE: {
      const findCoffeeAlreadyExists = state.cart.find((coffee) => {
        return coffee.id === action.payload.coffeeId;
      });

      if (findCoffeeAlreadyExists) {
        return produce(state, (draft) => {
          const removeCoffee = state.cart.filter(
            (coffee) => coffee.id !== findCoffeeAlreadyExists.id
          );
          
          draft.cart = removeCoffee;
        });
      } 

      return state;
    }
    
    default:
      return state;
  }
}