import { formatDate } from "@/utils/formatDate";
import { AirQualityDataProps } from "./AirQualityData";
import StatusLabel from "./StatusLabel";
import { airQualityData, airQualityStatus } from "@/utils/data/airQualityData";

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

  const tableFirstRowStyle = "border px-2 py-1 min-w-[150px]";
  const tableRowStyle = "border px-2 py-1";
  const tableLastColStyle = "border px-2 py-1 w-[400px]";

  return (
    <>
      {!checkAirQualityDataExicting ? (
        <div className="mx-auto flex flex-col justify-center min-w-[320px] max-w-[600px]">
          <h2 className="mb-5 text-lg font-bold">
            Air quality on {formatDate(time)}
          </h2>
          <table>
            <tbody>
              {airQualityData.map(({ name, key, description }) => {
                const value = (dataAir.current as any)[key];
                const status = airQualityStatus[key](value);

                return (
                  <tr key={key}>
                    <td className={tableFirstRowStyle}>{name}</td>
                    <td className={tableRowStyle}>{value?.toFixed(1)}</td>
                    <td className={tableRowStyle}>
                      {value !== null && <StatusLabel isValid={status} />}
                    </td>
                    <td className={tableLastColStyle}>{description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No information was found for your parameters</p>
      )}
    </>
  );
};
