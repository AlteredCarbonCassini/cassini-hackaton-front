import TempMap from "../TempMap";
import Openmeteo from "../Openmeteo/Openmeteo";

const App = () => {
  return (
    <div className="px-[20px] py-[20px] ">
      <h1 className="text-4xl ">Hello Hackaton!</h1>

      <div className="h-2/3 mb-6">
        <TempMap />
      </div>

      <Openmeteo />
    </div>
  );
};

export default App;
