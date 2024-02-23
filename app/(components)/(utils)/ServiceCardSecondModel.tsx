import ArrowRight from "@/app/(assets)/(icons)/ArrowRight";
import React from "react";

type PropTypes = {
  data: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
};

const ServiceCardSecondModel: React.FC<PropTypes> = ({ data }) => {
  return (
    <div className="p-[50px] border border-[#2E2E2E] hover:bg-[#2E2E2E] transition-all duration-500 group cursor-pointer">
      <div className="w-[50px] h-[50px] bg-white flex items-center justify-center group-hover:bg-primary transition-all duration-500">
        {data.icon}
      </div>
      <h3 className="mt-[22px] font-['Satoshi-Bold'] text-[32px] text-white leading-tight">
        {data.title}
      </h3>
      <p className="mt-[22px] text-white/70 leading-normal">
        {data.description}
      </p>
      <div className="mt-4 text-white flex items-center">Learn more <ArrowRight classes="ms-3" fill="#fff" /></div>
    </div>
  );
};

export default ServiceCardSecondModel;
