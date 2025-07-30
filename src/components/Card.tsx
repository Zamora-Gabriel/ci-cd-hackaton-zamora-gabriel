import { useState } from "preact/hooks";

function Card() {
  const [count, setCount] = useState(0);

  return (
    <div class="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/app.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default Card;
