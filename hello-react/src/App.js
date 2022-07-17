import { Fragment } from "react";

function App() {
  const truthIs = "true";
  return (
    <>
      <h1>jsx내부에서는 if문 사용 못함 -&gt; 조건문 사용해야함.</h1>
      {truthIs === "true" && <h2>true</h2>}
    </>
  );
}

export default App;
