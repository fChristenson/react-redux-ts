import { App as Component } from "./App";
import { compose } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "react";
import { SetAge, IAction } from "./actions";
import { IAppState } from "./store";

const mapStateToProps = (state: IAppState) => {
  return {
    age: state.app.age
  };
};

const mapDispatchToProps = (dipatch: Dispatch<IAction>) => {
  return {
    onClick: () => dipatch(SetAge(Math.floor(Math.random() * 100)))
  };
};

export const App = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);
