import { LATITUDE, LONGITUDE } from "@/constants/openMeteoLocation";
import { createContext, useContext, useState } from "react";

type Coords = [number, number];

interface CoordsContextType {
  mainCoords: Coords;
  setMainCoords: (coords: Coords) => void;
}

const CoordsContext = createContext<CoordsContextType | undefined>(undefined);

export const useCoordsContext = (): CoordsContextType => {
  const context = useContext(CoordsContext);

  if (context === undefined) {
    throw new Error("useCoords must be used within a CoordsProvider");
  }

  return context;
};

const CoordsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mainCoords, setMainCoords] = useState<Coords>([LATITUDE, LONGITUDE]);

  return (
    <CoordsContext.Provider value={{ mainCoords, setMainCoords }}>
      {children}
    </CoordsContext.Provider>
  );
};

export default CoordsProvider;
