import React from "react";
import { IconType } from "react-icons";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

interface Props {
  feature: Feature;
}

const FeaturesItem: React.FC<Props> = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div className="text-center px-6 max-w-[80%]">
      <Icon className="mx-auto w-12 h-12 mb-4 text-[#493628]" />
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-md opacity-80">{feature.description}</p>
    </div>
  );
};

export default FeaturesItem;
