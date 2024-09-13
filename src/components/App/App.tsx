import TempMap from "../TempMap";

const App = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-red-700">Hello Hackaton!</h1>

      <div className="w-10/12 h-[900px] overflow-hidden mx-auto mt-[100px]">
        <TempMap />
      </div>
    </>
  );
};

export default App;
