import Link from "next/link";
import Linkedin from "../(assets)/(icons)/Linkedin";
import Messenger from "../(assets)/(icons)/Messenger";
import Twitter from "../(assets)/(icons)/Twitter";
import Twoo from "../(assets)/(icons)/Twoo";

const Footer: React.FC = () => {
  return (
    <footer className="mt-28 bg-footer bg-no-repeat bg-center">
      <div className="max-w-[1200px] mx-auto pt-11">
        <div className="flex">
          <div className="max-w-[215px]">
            <Link
              href={"/"}
              className="text-white text-[22px] font-['Satoshi-Bold']"
            >
              FinanceX
            </Link>
            <p className="text-white/70 mt-[18px]">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className="mt-10 flex items-center">
              <a href="#" className="me-4">
                <Linkedin fill="white" />
              </a>
              <a href="#" className="me-4">
                <Messenger fill="white" />
              </a>
              <a href="#" className="me-4">
                <Twitter fill="white" />
              </a>
              <a href="#">
                <Twoo fill="white" />
              </a>
            </div>
          </div>
          <div className="ps-28">
            <div className="mb-6 text-white/70 font-['Satoshi-Bold'] text-[22px]">
              Company
            </div>
            <ul className="list-none">
              <li className="text-white/70 mb-[18px]">
                <Link href={"/"}>About us</Link>
              </li>
              <li className="text-white/70 mb-[18px]">
                <Link href={"/"}>Careers</Link>
              </li>
              <li className="text-white/70 mb-[18px]">
                <Link href={"/"}>Blog</Link>
              </li>
              <li className="text-white/70">
                <Link href={"/"}>Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="ps-28">
            <div className="mb-6 text-white/70 font-['Satoshi-Bold'] text-[22px]">
              Resources
            </div>
            <ul className="list-none">
              <li className="text-white/70 mb-[13px]">
                <Link href={"/"}>Templates</Link>
              </li>
              <li className="text-white/70 mb-[13px]">
                <Link href={"/"}>Tutorials</Link>
              </li>
              <li className="text-white/70 mb-[13px]">
                <Link href={"/"}>Free resources</Link>
              </li>
              <li className="text-white/70">
                <Link href={"/"}>Contract templates</Link>
              </li>
            </ul>
          </div>
          <div className="ps-40">
            <div className="mb-6 text-white/70 font-['Satoshi-Bold'] text-[22px]">
              Join Our Newsletter
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Your email address"
                className="placeholder:text-black/70 py-3 px-[18px] bg-white/70"
              />
              <button className="bg-primary border-none font-['Satoshi-Bold'] px-10">
                Subscribe
              </button>
            </div>
            <p className="text-white/70 mt-5">
              * Will send you weekly updates for your better finance management.
            </p>
          </div>
        </div>
        <div className="mt-[60px] py-10 text-white/70 text-center font-['Satoshi-Medium']">
          Copyright @ Kartik Bansal 2022. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
