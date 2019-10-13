import React from "react";

interface IProps {
  age: number;
  onClick(): void;
}

export const App: React.FunctionComponent<IProps> = ({ age, onClick }) => (
  <div>
    <h1>Age: {age}</h1>
    <button onClick={onClick}>Click me</button>
  </div>
);
