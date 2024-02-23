import Button from "./(utils)/Button";

const CTABox: React.FC = () => {
  return (
    <section className="mx-auto mt-36 max-w-[1200px] py-14 px-5 bg-primary flex items-center justify-center flex-col mb-[105px]">
      <h2 className="max-w-[835px] text-center mx-auto font-['Satoshi-Bold'] text-7xl leading-tight">
        Let’s grow your business, together.
      </h2>
      <Button link="#" classes="mt-6" isDark={true}>Get Started</Button>
    </section>
  );
};

export default CTABox;
