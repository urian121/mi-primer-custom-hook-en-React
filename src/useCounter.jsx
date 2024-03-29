import { useState } from "react";

// Definimos nuestro custom hook
function useCounter(initialCount = 0, step = 1) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    //setCount(count - step);
    setCount((prevCount) => (prevCount - step >= 0 ? prevCount - step : 0));
  };

  return { count, increment, decrement };
}

export default useCounter;
