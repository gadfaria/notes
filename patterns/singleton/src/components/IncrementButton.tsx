import singletonCounter from "../utils/counter";

export default function IncrementButton() {
  function handleClick() {
    alert(singletonCounter.increment());
  }

  return <button onClick={handleClick}>+</button>;
}
