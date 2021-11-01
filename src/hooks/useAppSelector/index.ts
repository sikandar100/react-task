import { useSelector } from "react-redux";
import { IStore } from "stores/types";

const useAppSelector = <Value>(selection: (state: IStore) => Value) =>
  useSelector(selection);

export default useAppSelector;
