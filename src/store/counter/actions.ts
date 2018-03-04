import creatorFactory from "typescript-fsa";
const actionCreator = creatorFactory();

export interface IAdd {
  Increment: number;
}

export const CounterActions = {
  Add: actionCreator<IAdd>("Counter/Add"),
  Decrement: actionCreator("Counter/Decrement")
};

export type CounterActionsType = ReturnType<
  typeof CounterActions[keyof typeof CounterActions]
>;
