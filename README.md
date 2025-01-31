# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook and its dependency array.  Improperly using the dependency array can lead to unexpected behavior, such as infinite loops and performance issues.

## The Bug

The `bug.js` file contains a component that uses `useEffect` to log the current count. However, the dependency array is missing, causing the effect to run on every render, creating an infinite loop.

## The Solution

The `bugSolution.js` file demonstrates the correct way to use `useEffect` by including the `count` variable in the dependency array. This ensures the effect only runs when the `count` changes.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output in the browser to see the infinite loop in `bug.js` and the correct behavior in `bugSolution.js`.
