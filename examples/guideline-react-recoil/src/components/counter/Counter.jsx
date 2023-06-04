import { useRecoilState } from "recoil";
import { countState } from "../../store/atoms/counter";

export const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
