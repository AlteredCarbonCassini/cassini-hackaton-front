import TempMap from "../TempMap";
// import InfoCard from "../InfoCard";
import Openmeteo from "../Openmeteo/Openmeteo";

const App = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-red-700">Hello Hackaton!</h1>

      <div className="w-2/3 h-[900px]">
        <TempMap />
      </div>

      {/* <InfoCard /> */}

      <Openmeteo />
    </>
  );
};

export default App;
