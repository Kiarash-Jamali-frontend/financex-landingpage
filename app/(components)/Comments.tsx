"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import CommentItem from "./(utils)/CommentItem";
import { Autoplay } from "swiper/modules";
import ChevronLeft from "../(assets)/(icons)/ChevronLeft";
import ChevronRight from "../(assets)/(icons)/ChevronRight";

export type CommentData = {
  id: number;
  text: string;
  userName: string;
  userProfile: string;
  userRole: string;
};

const Comments: React.FC = () => {

  const swiper = useSwiper();

  const commentsList: CommentData[] = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
      userName: "Mahesh",
      userRole: "CEO",
      userProfile: "/Comments/Comment-1.png",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
      userName: "Ranveer",
      userRole: "Webflow Developer",
      userProfile: "/Comments/Comment-2.png",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
      userName: "Tony Stark",
      userRole: "CEO",
      userProfile: "/Comments/Comment-3.png",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
      userName: "Ranveer",
      userRole: "Webflow Developer",
      userProfile: "/Comments/Comment-4.png",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
      userName: "Mahesh",
      userRole: "CEO",
      userProfile: "/Comments/Comment-3.png",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
      userName: "Mahesh",
      userRole: "CEO",
      userProfile: "/Comments/Comment-2.png",
    },
  ];

  return (
    <section className="mt-36 bg-primary relative bg-contain bg-comments">
      <div className="pt-[120px] px-[120px] z-10">
        <div className="z-10 max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="max-w-[638px]">
              <span className="font-semibold text-[#151515] text-xl">
                Our Services
              </span>
              <h2 className="mt-5 text-7xl font-['Satoshi-Bold']">
                Global businesses love FinanceX
              </h2>
            </div>
            <div className="flex items-center justify-end">
              <button className="w-[56px] h-[56px] rounded-full border-2 border-black flex items-center justify-center hover:bg-[#151515] group transition-all duration-500"
              onClick={() => swiper.slideNext()}>
                <ChevronLeft
                  fill="none"
                  stroke="#151515"
                  classes="group-hover:stroke-white transition-all duration-500"
                />
              </button>
              <button className="w-[56px] h-[56px] rounded-full border-2 border-black flex items-center justify-center ms-5 hover:bg-[#151515] group transition-all duration-500">
                <ChevronRight
                  stroke="#151515"
                  fill="none"
                  classes="group-hover:stroke-white transition-all duration-500"
                />
              </button> 
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="mt-14 !pb-[120px]"
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={true}
        loop={true}
        modules={[Autoplay]}
        grabCursor={true}
        speed={1000}
      >
        {commentsList.map((item) => {
          return (
            <SwiperSlide key={item.id} className="max-w-[365px]">
              <CommentItem data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Comments;
