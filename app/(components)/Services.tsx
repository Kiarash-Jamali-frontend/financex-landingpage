import ArrowRight from "../(assets)/(icons)/ArrowRight";
import Button from "./(utils)/Button";
import ServiceCard, { Service } from "./(utils)/ServiceCard";


const Services: React.FC = () => {
  const servicesList: Service[] = [
    {
      id: 1,
      title: "Checking accounts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      link: "#",
    },
    {
      id: 2,
      title: "Checking accounts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      link: "#",
    },
    {
      id: 3,
      title: "Checking accounts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      link: "#",
    },
    {
      id: 4,
      title: "Checking accounts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      link: "#",
    },
    {
      id: 5,
      title: "Checking accounts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      link: "#",
    },
  ];
  return (
    <section className="mx-auto mt-40 max-w-[1200px]">
      <div className="flex w-full">
        <div className="w-full max-w-[500px] pe-14">
          <span className="text-primary font-semibold text-xl">
            Our Services
          </span>
          <h2 className="text-white text-5xl font-['Satoshi-Bold'] mt-5 leading-snug">
            Browse our services &{" "}
            <span className="text-primary">offerings</span>
          </h2>
          <Button
            link="/"
            classes="mt-8 hover:shadow-xl hover:shadow-primary/10 duration-500"
          >
            Get Started
            <ArrowRight
              classes="ms-4 w-[18px] h-[18px] stroke-1 stroke-black"
              fill="#000"
            />
          </Button>
        </div>
        <div className="w-full flex justify-end">
            {servicesList.slice(0, 2).map((item) => {
                return (
                    <ServiceCard data={item} key={item.id} />
                )
            })}
        </div>
      </div>
      <div className="max-w-[1050px] ms-auto flex">
            {servicesList.slice(2).map((item) => {
                return (
                    <ServiceCard data={item} key={item.id} />
                )
            })}
      </div>
    </section>
  );
};

export default Services;
