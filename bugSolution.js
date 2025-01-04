```javascript
import React, { useState, useEffect, useLayoutEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    // This effect runs after every render, but synchronously before the browser paints
    console.log('Component rendered with count (useLayoutEffect):', count);
  });

  useEffect(() => {
    // This effect runs after every render, but asynchronously
    console.log('Component rendered with count (useEffect):', count);
  }, []); // Empty dependency array ensures it runs only after the initial render

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```