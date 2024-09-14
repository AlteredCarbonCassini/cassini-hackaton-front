import TempMap from "../TempMap";

import Openmeteo from "../Openmeteo/Openmeteo";

const App = () => {
  return (
    <div className="px-[20px] py-[20px]">
      <h1 className="text-4xl ">Hello Hackaton!</h1>

      <div className="w-10/12 h-[900px] overflow-hidden mx-auto mt-[100px]">
        <TempMap />
      </div>

      <Openmeteo />
    </div>
  );
};

export default App;
