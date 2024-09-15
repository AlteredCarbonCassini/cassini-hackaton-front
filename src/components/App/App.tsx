import TempMap from "../TempMap";
import Openmeteo from "../Openmeteo/Openmeteo";

const App = () => {
  return (
    <div className="px-[80px] py-[20px] mx-auto w-[1620px]">
      <h1 className="text-5xl mb-8 text-center">Hello, Cassini Hackathon!</h1>

      <div className="h-[600px] mb-8 max-w-[1620px]">
        <TempMap />
      </div>

      <Openmeteo />
    </div>
  );
};

export default App;
