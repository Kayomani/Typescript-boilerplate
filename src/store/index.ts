import { ICounterStore, CounterReducer } from "./counter/reducer";
import {
  combineReducers,
  Dispatch as ReduxDispatch,
  Reducer as ReduxReducer
} from "redux";
import { CounterActionsType } from "./counter/actions";

export type RootAction = CounterActionsType;

export interface IRootState {
  Counter: ICounterStore;
}

export const RootReducer = combineReducers<IRootState, RootAction>({
  Counter: CounterReducer
});
