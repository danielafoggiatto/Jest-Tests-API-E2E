import { useState } from 'react';

// Componente Counter com lógica
export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button onClick={increment} data-testid="increment-btn">
        +
      </button>
      <button onClick={decrement} data-testid="decrement-btn">
        -
      </button>
      <button onClick={reset} data-testid="reset-btn">
        Reset
      </button>
    </div>
  );
}

export default Counter;
