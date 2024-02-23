import GPSIcon from "../(assets)/(icons)/GPSIcon";
import InternetIcon from "../(assets)/(icons)/InternetIcon";
import WorldIcon from "../(assets)/(icons)/WorldIcon";
import ServiceCardSecondModel from "./(utils)/ServiceCardSecondModel";

const MoreServices: React.FC = () => {
  return (
    <section className="max-w-[1172px] mt-36 w-full mx-auto grid grid-cols-3">
      <ServiceCardSecondModel
        data={{
          title: "Local business finance",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut",
          icon: <GPSIcon stroke="#000" fill="transparent" />,
        }}
      />
      <ServiceCardSecondModel
        data={{
          title: "Built for global payments",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut",
          icon: <WorldIcon />,
        }}
      />
      <ServiceCardSecondModel
        data={{
          title: "Make internet of Money",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut",
          icon: <InternetIcon />,
        }}
      />
    </section>
  );
};

export default MoreServices;
