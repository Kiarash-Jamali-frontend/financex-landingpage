import Image from "next/image";
import StatisticsItem from "./(utils)/StatisticsItem";

const Statistics: React.FC = () => {
  return (
    <section className="mt-36 grid grid-cols-2 max-w-[1200px] mx-auto">
      <div>
        <div className="max-w-[450px]">
          <span className="font-semibold text-primary text-xl">Benefits</span>
          <h2 className="text-white text-5xl font-['Satoshi-Bold'] mt-5">
            We have many users all over the{" "}
            <span className="text-primary">world</span>
          </h2>
          <p className="mt-8 text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna
          </p>
          <div className="flex justify-between items-center mt-20">
            <StatisticsItem data={{
                title: "User active",
                value: "10M"
            }} />
            <StatisticsItem data={{
                title: "Country",
                value: "30"
            }} />
            <StatisticsItem data={{
                title: "Transaction",
                value: "$50M"
            }} />
          </div>
        </div>
      </div>
      <div>
        <Image src={"/map.png"} alt="" width={590} height={378} />
      </div>
    </section>
  );
};

export default Statistics;
