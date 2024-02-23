import Button from "./(utils)/Button";
import ArrowRight from "../(assets)/(icons)/ArrowRight";
import Image from "next/image";

const Intro: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-between mt-32">
      <div className="w-full max-w-[515px]">
        <span className="font-semibold text-primary text-xl">
          Welcome! Future Platform
        </span>
        <h1 className="mt-3 text-7xl text-white font-['Satoshi-Black'] leading-12">
          The World's Most Modern Card{" "}
          <span className="text-primary">Platform</span>
        </h1>
        <p className="text-white/70 mt-8 text-lg font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
        <Button link="/" classes="mt-8 hover:shadow-xl hover:shadow-primary/10 duration-500">
          Get Started
          <ArrowRight
            classes="ms-4 w-[18px] h-[18px] stroke-1 stroke-black"
            fill="#000"
          />
        </Button>
      </div>
      <div>
        <Image
          src={"/IntroHeroRight2.png"}
          alt=""
          width={859}
          height={568}
          className="absolute right-0 top-[185px] max-h-[740px] max-w-[825px]"
        />
      </div>
    </div>
  );
};

export default Intro;
