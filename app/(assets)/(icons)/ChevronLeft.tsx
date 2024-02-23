import SvgIcon from "@/app/types/SvgIcon";

const ChevronLeft: React.FC<SvgIcon> = ({ fill, stroke, classes }) => {
  return (
    <>
      <svg
        width="11"
        height="18"
        viewBox="0 0 11 18"
        fill={fill}
        stroke={stroke}
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 17L2 9L10 0.999999"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default ChevronLeft;
