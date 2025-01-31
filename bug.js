```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including the initial render
    console.log('Effect ran with count:', count);
    // Perform side effects here, such as fetching data
    // ...
    // Return a cleanup function if needed
    return () => {
      console.log('Cleanup function ran');
    };
  }, [count]); // Add count to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```