import store from "stores";
import { useDispatch } from "react-redux";

const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default useAppDispatch;
