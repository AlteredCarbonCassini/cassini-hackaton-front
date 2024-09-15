import { formatDate } from "@/utils/formatDate";
import { AirQualityDataProps } from "./AirQualityData";
import StatusLabel from "./StatusLabel";

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

  console.log(dataAir);

  const airQualityStatus = {
    europeanAqi: (val: number) => val >= 0 && val <= 50,
    pm10: (val: number) => val <= 20,
    pm25: (val: number) => val <= 10,
    carbonMonoxide: (val: number) => val <= 300,
    nitrogenDioxide: (val: number) => val <= 40,
    sulphurDioxide: (val: number) => val <= 20,
    ozone: (val: number) => val <= 180,
    aerosolOpticalDepth: (val: number) => val <= 0.3,
    dust: (val: number) => val <= 15,
    uvIndex: (val: number) => val <= 3,
    uvIndexClearSky: (val: number) => val <= 3,
    ammonia: (val: number) => val <= 10,
    alderPollen: (val: number) => val <= 5,
    birchPollen: (val: number) => val <= 5,
    grassPollen: (val: number) => val <= 5,
    mugwortPollen: (val: number) => val <= 5,
    olivePollen: (val: number) => val <= 5,
    ragweedPollen: (val: number) => val <= 5,
  };

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

  // const table = [{ name: "europeanAqi" }];

  return (
    <>
      {!checkAirQualityDataExicting ? (
        <div className="mx-auto flex flex-col justify-center min-w-[320px] max-w-[600px]">
          <h2 className="mb-5 text-lg font-bold">
            Air quality on {formatDate(time)}
          </h2>
          <table>
            <tbody>
              <tr>
                <td className={tableFirstRowStyle}>European AQI</td>
                <td className={tableRowStyle}>{europeanAqi?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {europeanAqi !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.europeanAqi(europeanAqi)}
                    />
                  )}
                </td>
                <td className={tableLastColStyle}>
                  Low pollution level, comfortable breathing conditions.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>PM10</td>
                <td className={tableRowStyle}>{pm10?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {pm10 !== null && (
                    <StatusLabel isValid={airQualityStatus.pm10(pm10)} />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Elevated levels can cause respiratory issues, eye irritation,
                  coughing.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>PM2.5</td>
                <td className={tableRowStyle}>{pm25?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {pm25 !== null && (
                    <StatusLabel isValid={airQualityStatus.pm25(pm25)} />
                  )}
                </td>
                <td className={tableRowStyle}>
                  High concentrations can lead to heart disease and lung
                  diseases.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Carbon Monoxide</td>
                <td className={tableRowStyle}>{carbonMonoxide?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {carbonMonoxide !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.carbonMonoxide(carbonMonoxide)}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  High levels of CO can lead to headaches, dizziness, and
                  unconsciousness at very high concentrations.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Nitrogen Dioxide</td>
                <td className={tableRowStyle}>{nitrogenDioxide?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {nitrogenDioxide !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.nitrogenDioxide(
                        nitrogenDioxide
                      )}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Can irritate the respiratory system and cause chronic lung
                  problems.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Sulphur Dioxide</td>
                <td className={tableRowStyle}>{sulphurDioxide?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {sulphurDioxide !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.sulphurDioxide(sulphurDioxide)}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Can irritate the respiratory system, asthma, and allergies.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Ozone</td>
                <td className={tableRowStyle}>{ozone?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {ozone !== null && (
                    <StatusLabel isValid={airQualityStatus.ozone(ozone)} />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Affects the respiratory system and can cause fainting at very
                  high levels.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Aerosol Optical Depth</td>
                <td className={tableRowStyle}>
                  {aerosolOpticalDepth?.toFixed(1)}
                </td>
                <td className={tableRowStyle}>
                  {aerosolOpticalDepth !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.aerosolOpticalDepth(
                        aerosolOpticalDepth
                      )}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  High concentrations can worsen visibility and contribute to
                  climate change.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Dust</td>
                <td className={tableRowStyle}>{dust?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {dust !== null && (
                    <StatusLabel isValid={airQualityStatus.dust(dust)} />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Elevated levels can degrade air quality and cause respiratory
                  problems.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>UV Index</td>
                <td className={tableRowStyle}>{uvIndex?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {uvIndex !== null && (
                    <StatusLabel isValid={airQualityStatus.uvIndex(uvIndex)} />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Not significant, but prolonged sun exposure can lead to
                  sunburn.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>UV Index Clear Sky</td>
                <td className={tableRowStyle}>{uvIndexClearSky?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {uvIndexClearSky !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.uvIndexClearSky(
                        uvIndexClearSky
                      )}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Not significant, but sun protection is recommended.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Ammonia</td>
                <td className={tableRowStyle}>{ammonia?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {ammonia !== null && (
                    <StatusLabel isValid={airQualityStatus.ammonia(ammonia)} />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Can irritate skin, eyes, and respiratory tract, causing
                  allergic reactions.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Alder Pollen</td>
                <td className={tableRowStyle}>{alderPollen?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {alderPollen !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.alderPollen(alderPollen)}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Safe level, pollen does not cause allergic reactions.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Birch Pollen</td>
                <td className={tableRowStyle}>{birchPollen?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {birchPollen !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.birchPollen(birchPollen)}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Safe level, pollen does not cause allergic reactions.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Grass Pollen</td>
                <td className={tableRowStyle}>{grassPollen?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {grassPollen !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.grassPollen(grassPollen)}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Safe level, pollen does not cause allergic reactions.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Mugwort Pollen</td>
                <td className={tableRowStyle}>{mugwortPollen?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {mugwortPollen !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.mugwortPollen(mugwortPollen)}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Safe level, pollen does not cause allergic reactions.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Olive Pollen</td>
                <td className={tableRowStyle}>{olivePollen?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {olivePollen !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.olivePollen(olivePollen)}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Safe level, pollen does not cause allergic reactions.
                </td>
              </tr>
              <tr>
                <td className={tableFirstRowStyle}>Ragweed Pollen</td>
                <td className={tableRowStyle}>{ragweedPollen?.toFixed(1)}</td>
                <td className={tableRowStyle}>
                  {ragweedPollen !== null && (
                    <StatusLabel
                      isValid={airQualityStatus.ragweedPollen(ragweedPollen)}
                    />
                  )}
                </td>
                <td className={tableRowStyle}>
                  Can cause allergic reactions, itching, irritation, runny nose,
                  and breathing difficulties.
                </td>
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
