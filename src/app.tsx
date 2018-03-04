import * as React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { IRootState } from "./store";
import { getCount } from "./store/counter/selectors";
import { bindActionCreators } from "redux";
import { CounterActions, IAdd } from "./store/counter/actions";

export interface IAppProps {
  count: number;
  onAdd: (p: IAdd) => void;
  onDecrement: () => void;
}

export const App = (props: IAppProps) => {
  return (
    <div>
      <div>The count is {props.count}.</div>
      <button type="button" onClick={() => props.onAdd({ Increment: 2 })}>
        Add 2
      </button>
      <button type="button" onClick={() => props.onDecrement()}>
        Decrement
      </button>
    </div>
  );
};

export const ConnectedApp = connect(
  (state: IRootState) => ({ count: getCount(state) }),
  dispatch =>
    bindActionCreators(
      {
        onAdd: CounterActions.Add,
        onDecrement: CounterActions.Decrement
      },
      dispatch
    )
)(App);
export default hot(module)(ConnectedApp);
