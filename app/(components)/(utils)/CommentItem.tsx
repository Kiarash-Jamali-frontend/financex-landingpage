import Image from "next/image";
import { CommentData } from "../Comments";

type PropTypes = {
  data: CommentData;
};

const CommentItem: React.FC<PropTypes> = ({ data }) => {
  return (
    <div className="bg-[#151515] py-14 px-12 shadow-xl max-w-[365px]">
      <p className="text-sm leading-8 text-white">{data.text}</p>
      <div className="mt-7 flex items-center">
        <Image
          src={data.userProfile}
          width={48}
          height={48}
          alt=""
          className="rounded-full w-[48px] h-[48px]"
        />
        <div className="ms-[14px]">
          <div className="font-['Satoshi-Bold'] text-sm text-white">{data.userName}</div>
          <div className="mt-1 text-xs text-white/70">{data.userRole}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
