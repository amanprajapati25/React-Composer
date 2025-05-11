import React, { useState } from "react";

export default function Root(props) {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "2px solid blue",
        borderRadius: "5px",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h2>React Micro Frontend</h2>
      <p>
        This component is built with React and exposed through both single-spa
        and Module Federation
      </p>

      <div>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}
