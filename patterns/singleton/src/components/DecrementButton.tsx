import singletonCounter from "../utils/counter";

export default function DecrementButton() {
  function handleClick() {
    alert(singletonCounter.decrement());
  }

  return <button onClick={handleClick}>-</button>;
}
