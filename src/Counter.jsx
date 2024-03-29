import useCounter from "./useCounter";
const Counter = () => {
  // Utilizamos nuestro custom hook
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <h2 className="title">Contador usando custom hook</h2>
      <div id="container">
        <p id="numero" className="numero">
          {count}
        </p>
        <div className="flexStyle">
          <button id="boton1" onClick={decrement}>
            Decrementar
          </button>
          <button id="boton2" onClick={increment}>
            Incrementar
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
