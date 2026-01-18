import { useState } from 'react';

function Counter() {
  // Initialize state to 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>Current Count: {count}</p>
      {/* Increment button increases count by 1 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      {/* Decrement button decreases count by 1 */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      
      {/* Reset button sets count back to 0 */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;