import { LayerType } from "@/utils/data/layersData";
import { FC } from "react";

interface IInfoCardProps {
  layer: LayerType;
}

const InfoCard: FC<IInfoCardProps> = ({ layer }) => {
  const { descr, range, subTitle, title, units } = layer;

  return (
    <div className="border w-[400px] h-[600px] p-2 shrink-0">
      <h2 className="mb-4">{title}</h2>

      <div className="flex gap-x-3">
        <div className="flex">
          <div className="py-2.5 mr-1">
            <div className="h-60 w-10 bg-detailed-gradient border rounded"></div>
          </div>
          <div className="flex flex-col shrink-0">
            <span className="mb-2">{range[0]}</span>
            <span className="mb-8">{range[1]}</span>
            <span className="mb-8">{range[2]}</span>
            <span className="mb-8">{range[3]}</span>
            <span className="mb-2">{range[4]}</span>
            <span>{range[5]}</span>
          </div>
        </div>

        <div>
          <p>{subTitle}</p>
          <p>{descr}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
