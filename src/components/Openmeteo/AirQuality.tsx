import { formatDate } from "@/utils/formatDate";
import { AirQualityDataProps } from "./AirQualityData";

export const AirQuality = ({ dataAir }: { dataAir: AirQualityDataProps }) => {
  if (!dataAir.current) {
    return <p>No information was found for your parameters</p>;
  }
  const {
    time,
    europeanAqi,
    pm10,
    pm25,
    carbonMonoxide,
    nitrogenDioxide,
    sulphurDioxide,
    ozone,
    aerosolOpticalDepth,
    dust,
    uvIndex,
    uvIndexClearSky,
    ammonia,
    alderPollen,
    birchPollen,
    grassPollen,
    mugwortPollen,
    olivePollen,
    ragweedPollen,
  } = dataAir.current;

  const checkAirQualityDataExicting =
    time &&
    europeanAqi &&
    pm10 &&
    pm25 &&
    carbonMonoxide &&
    nitrogenDioxide &&
    sulphurDioxide &&
    ozone &&
    aerosolOpticalDepth &&
    dust &&
    uvIndex &&
    uvIndexClearSky &&
    ammonia &&
    alderPollen &&
    birchPollen &&
    grassPollen &&
    mugwortPollen &&
    olivePollen &&
    ragweedPollen;

  console.log(checkAirQualityDataExicting);

  const tableRowStyle = "border px-2 py-1";

  return (
    <>
      {!checkAirQualityDataExicting ? (
        <div className="mx-auto flex flex-col justify-center min-w-[320px] max-w-[400px]">
          <h2 className="text-center mb-5 text-lg font-bold">
            Air quality on {formatDate(time)} in Warsaw
          </h2>
          <table>
            <tbody>
              <tr>
                <td className={tableRowStyle}>European AQI</td>
                <td className={tableRowStyle}>{europeanAqi?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>PM10</td>
                <td className={tableRowStyle}>{pm10?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>PM2.5</td>
                <td className={tableRowStyle}>{pm25?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Carbon Monoxide</td>
                <td className={tableRowStyle}>{carbonMonoxide?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Nitrogen Dioxide</td>
                <td className={tableRowStyle}>{nitrogenDioxide?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Sulphur Dioxide</td>
                <td className={tableRowStyle}>{sulphurDioxide?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Ozone</td>
                <td className={tableRowStyle}>{ozone?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Aerosol Optical Depth</td>
                <td className={tableRowStyle}>
                  {aerosolOpticalDepth?.toFixed(1)}
                </td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Dust</td>
                <td className={tableRowStyle}>{dust?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>UV Index</td>
                <td className={tableRowStyle}>{uvIndex?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>UV Index Clear Sky</td>
                <td className={tableRowStyle}>{uvIndexClearSky?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Ammonia</td>
                <td className={tableRowStyle}>{ammonia?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Alder Pollen</td>
                <td className={tableRowStyle}>{alderPollen?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Birch Pollen</td>
                <td className={tableRowStyle}>{birchPollen?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Grass Pollen</td>
                <td className={tableRowStyle}>{grassPollen?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Mugwort Pollen</td>
                <td className={tableRowStyle}>{mugwortPollen?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Olive Pollen</td>
                <td className={tableRowStyle}>{olivePollen?.toFixed(1)}</td>
              </tr>
              <tr>
                <td className={tableRowStyle}>Ragweed Pollen</td>
                <td className={tableRowStyle}>{ragweedPollen?.toFixed(1)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No information was found for your parameters</p>
      )}
    </>
  );
};
