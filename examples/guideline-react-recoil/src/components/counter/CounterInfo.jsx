import { useRecoilValue } from "recoil";
import { countNextState } from "../../store/selectors/counter";

//This component shares the same atom making the count state global or shareble
function CounterInfo () {
  const count = useRecoilValue(countNextState);
  return <p>the next number is {count}</p>;
}

export default CounterInfo;
