import Image from "next/image";
import Header from "./(components)/Header";
import Intro from "./(components)/Intro";
import Customers from "./(components)/Customers";
import Services from "./(components)/Services";
import Statistics from "./(components)/Statistics";
import RealTimeTransactionReport from "./(components)/RealTimeTransactionReport";
import MoreServices from "./(components)/MoreServices";
import Comments from "./(components)/Comments";
import CTABox from "./(components)/CTABox";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <Image
        src={"/IntroBackground.svg"}
        alt=""
        width={1440}
        height={918}
        className="opacity-40 w-full object-cover absolute -z-50 max-h-screen top-0 left-0 right-0"
      />
      <Customers />
      <Services />
      <Statistics />
      <RealTimeTransactionReport />
      <MoreServices />
      <Comments />
      <CTABox />
      <Footer />
    </main>
  );
}
