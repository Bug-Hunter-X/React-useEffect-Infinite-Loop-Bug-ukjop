```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran with count:', count);
    // Perform side effects here, such as fetching data
    // ...
    return () => {
      console.log('Cleanup function ran');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```