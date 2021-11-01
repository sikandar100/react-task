import { FC,} from "react";
import Launches from "./components/Launches";
import Rockets from "./components/Rockets";

const Home: FC = () => {
  return <><Launches /><Rockets /></>;
};

export default Home;
