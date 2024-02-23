import Image from "next/image";
import Button from "./(utils)/Button";
import ArrowRight from "../(assets)/(icons)/ArrowRight";

const RealTimeTransactionReport: React.FC = () => {
  return (
    <section className="max-w-[1200px] mt-40 mx-auto w-full flex items-center justify-between">
      <div className="max-w-[488px]">
        <span className="text-primary font-semibold text-xl">Our Services</span>
          <h2 className="text-white text-5xl font-['Satoshi-Bold'] mt-5 leading-snug">
            Real Time{" "}
            <span className="text-primary">Transaction Report</span>
          </h2>
          <p className="mt-8 text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna
          </p>
          <Button
            link="/"
            classes="mt-12 hover:shadow-xl hover:shadow-primary/10 duration-500"
          >
            Get Started
            <ArrowRight
              classes="ms-4 w-[18px] h-[18px] stroke-1 stroke-black"
              fill="#000"
            />
          </Button>
      </div>
      <div>
        <Image src={"/serviceRight.png"} alt="" width={604} height={476} />
      </div>
    </section>
  );
};

export default RealTimeTransactionReport;
