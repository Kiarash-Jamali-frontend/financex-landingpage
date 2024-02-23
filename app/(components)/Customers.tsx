import Image from "next/image";

const Customers: React.FC = () => {
  return (
    <section className="bg-primary py-20 mt-48">
      <div className="mx-auto flex items-center justify-between max-w-[1200px]">
        <Image
          src={"/Customers/Paypal-Grey.svg"}
          alt=""
          width={50}
          height={50}
        />
        <Image 
          src={"/Customers/Webflow Grey.svg"}
          alt=""
          width={170}
          height={42} />
        <Image
          src={"/Customers/Google Grey.svg"}
          alt=""
          width={135}
          height={44} />
        <Image
          src={"/Customers/Amazon.svg"}
          alt=""
          width={165}
          height={50} />
        <Image
          src={"/Customers/Adobe Grey.svg"}
          alt=""
          width={51}
          height={47} />
      </div>
    </section>
  );
};

export default Customers;
