export default function Clock({ time, className }) {
  return <h1 id={className}>{time.toLocaleTimeString()}</h1>;
}
