import { useSelector } from "react-redux";
import { IState } from "stores/types";

const useAppSelector = <Value>(selection: (state: IState) => Value) =>
  useSelector(selection);

export default useAppSelector;
