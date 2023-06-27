//incorrect version

import React, useState  from 'react';

class Counter() {
  let [count, setCount] = useState(0);

  increment = () => {
    setCount(count + 1);
  }

  return (
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
  );
}

export default Counter;
