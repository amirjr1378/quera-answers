import { useCount } from "./contexts/count";

function App() {
  const { count, increment, decrementByOne, backToZero } = useCount();
  console.log("🚀 ~ file: App.js ~ line 5 ~ App ~ count", count);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => increment(5)}>Increment by 5</button>
        <button onClick={() => decrementByOne()}>Decrement by 1</button>
        <button onClick={() => backToZero()}>Back To Zero</button>
      </div>
    </div>
  );
}

export default App;
