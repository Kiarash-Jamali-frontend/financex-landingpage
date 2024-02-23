import Image from "next/image";

export type Service = {
  id: number;
  title: string;
  description: string;
  link: string;
};

type PropTypes = {
  data: Service;
};

const ServiceCard: React.FC<PropTypes> = ({ data }) => {
  return (
    <div className="py-16 px-10 border border-[#2E2E2E] max-w-[350px] cursor-pointer group hover:bg-[#2E2E2E] transition-all duration-500">
      <div className="w-[40px] bg-white h-[2px]"></div>
      <h4 className="text-white font-['Satoshi-Medium'] text-2xl mt-9">
        {data.title}
      </h4>
      <p className="text-white/70 mt-6">
        {data.description}
      </p>
      <div className="mt-16 flex justify-end">
        <div className="bg-white w-[53px] h-[53px] flex items-center justify-center group-hover:bg-primary transition-all duration-500">
          <Image src={"/ArrowTopRight.png"} alt="" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
