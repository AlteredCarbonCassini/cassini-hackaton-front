import TempMap from "../TempMap";
// import InfoCard from "../InfoCard";
import Openmeteo from "../Openmeteo/Openmeteo";

const App = () => {
  return (
    <div className="px-[20px] py-[20px]">
      <h1 className="text-4xl ">Hello Hackaton!</h1>

      <div className="w-2/3 h-[900px]">
        <TempMap />
      </div>

      {/* <InfoCard /> */}

      <Openmeteo />
    </div>
  );
};

export default App;
