export enum ActionTypes {
  ADD_ONE_COFFEE = "ADD_NEW_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  LESS_ONE_COFFEE = "REMOVE_ONE_COFFEE",
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
