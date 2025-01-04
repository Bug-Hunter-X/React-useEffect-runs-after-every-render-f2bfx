# React useEffect Runs After Every Render

This repository demonstrates a common issue in React where the `useEffect` hook runs after every render, potentially causing unnecessary re-renders and performance problems.  The example shows how to use `useLayoutEffect` and `useEffect` appropriately.

## Bug

The original `MyComponent` uses `useEffect` without dependencies. This means the effect runs after every render, logging the current count to the console. This is inefficient, particularly with complex components or frequent state updates.

## Solution

The solution showcases two approaches:

1. **`useLayoutEffect`:** For DOM manipulations that must happen synchronously after every render.
2. **`useEffect` with dependencies:** For tasks like data fetching that shouldn't run on every render. Using an empty dependency array `[]` ensures the effect runs only once after the initial render.

By understanding the differences and using the appropriate hook, developers can write more performant and efficient React applications.