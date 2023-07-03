export enum ActionTypes {
  ADD_ONE_COFFEE = "ADD_NEW_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  LESS_ONE_COFFEE = "REMOVE_ONE_COFFEE",
  CLEAR_COFFEE_CART = "CLEAR_COFFEE_CART",
  CREATE_COFFEE_REQUEST = "CREATE_COFFEE_REQUEST",
}

interface CheckoutData {
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

export function removeOneCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  };
}

export function addOneCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.ADD_ONE_COFFEE,
    payload: {
      coffeeId,
    },
  };
}

export function lessOneCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.LESS_ONE_COFFEE,
    payload: {
      coffeeId,
    },
  };
}

export function clearCoffeeAction() {
  return {
    type: ActionTypes.CLEAR_COFFEE_CART,
  };
}

export function CreateCoffeeRequest(checkout: CheckoutData) {
  return {
    type: ActionTypes.CREATE_COFFEE_REQUEST,
    payload: {
      checkout,
    },
  };
}

