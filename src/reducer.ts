import { AppEvents } from "./events";
import { IAction } from "./actions";

const initState: IState = {
  name: "",
  age: 1223
};

export interface IState {
  name: string;
  age: number;
}

export const reducer = (state: IState = initState, action: IAction): IState => {
  switch (action.type) {
    case AppEvents.SET_NAME:
      return { ...state, name: action.payload };

    case AppEvents.SET_AGE:
      return { ...state, age: action.payload };

    default:
      return state;
  }
};
