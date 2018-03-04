import { CounterActions, CounterActionsType } from "./actions";
import { isType } from "typescript-fsa";
import { combineReducers, Reducer } from "redux";
import produce from "immer";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export interface ICounterStore {
  TheCount: number;
}

const initialState: ICounterStore = {
  TheCount: 0
};

export const CounterReducer = reducerWithInitialState(initialState)
  .case(CounterActions.Add, (state, payload) =>
    produce(state, draft => {
      draft.TheCount += payload.Increment;
    })
  )
  .case(CounterActions.Decrement, (state, payload) =>
    produce(state, draft => {
      draft.TheCount--;
    })
  );
