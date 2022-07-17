import "./App.css";

function App() {
  const name = "리액트";

  return (
    <>
      {/* JSX내부에서 주석달기 */}
      <div className="react">{name}</div>
      <input // 태그 안에서는 이렇게
      ></input>
      <br /*태그 안에서는 이렇게 2*/></br>
      <input />
    </>
  );
}

export default App;
