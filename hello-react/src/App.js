import { Fragment } from "react";

function App() {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "28px",
    fontWeight: "bold",
    padding: 16,
  };
  return <div style={style}>{name}</div>;
}

export default App;
