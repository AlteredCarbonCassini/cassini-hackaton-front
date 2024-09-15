import { LayerType } from "@/utils/data/layersData";
import { FC } from "react";

interface IInfoCardProps {
  layer: LayerType;
  selectedLayer: string;
}

const InfoCard: FC<IInfoCardProps> = ({ layer, selectedLayer }) => {
  const { descr, range, title, units, link } = layer;

  const isDefaultLayer = selectedLayer === "default";

  return (
    <div className="border w-[400px] h-[600px] p-2 shrink-0 bg-gray-300 text-gray-800">
      {isDefaultLayer ? (
        <h2 className="mb-4 font-bold text-xl text-center">Choose a layer</h2>
      ) : (
        <h2 className="mb-4 font-bold text-xl text-center">{title}</h2>
      )}

      {!isDefaultLayer && descr ? (
        <div className="flex gap-x-6">
          <div className="flex">
            <div className="py-1.5 mr-1">
              <div className="h-60 w-8 bg-detailed-gradient border rounded border-black"></div>
            </div>
            <div className="flex flex-col shrink-0 text-xs">
              <span className="mb-4">
                {range[0]} {units}
              </span>
              <span className="mb-10">{range[1]}</span>
              <span className="mb-10">{range[2]}</span>
              <span className="mb-10">{range[3]}</span>
              <span className="mb-4">{range[4]}</span>
              <span>{range[5]}</span>
            </div>
          </div>

          <div className="flex flex-col pt-6 text-sm">
            <p className="mb-4">{descr}</p>
            <p>
              More info{" "}
              <a
                className="underline text-blue-600"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </p>
          </div>
        </div>
      ) : (
        <p>{!isDefaultLayer && "Information will be updated soon..."}</p>
      )}
    </div>
  );
};

export default InfoCard;
