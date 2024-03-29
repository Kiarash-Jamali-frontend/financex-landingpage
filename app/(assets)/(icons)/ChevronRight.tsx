import SvgIcon from "@/app/types/SvgIcon";

const ChevronRight: React.FC<SvgIcon> = ({ fill, stroke, classes }) => {
  return (
    <>
      <svg
        width="11"
        height="18"
        viewBox="0 0 11 18"
        fill={fill}
        className={classes}
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 17L9 9L0.999999 0.999999"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default ChevronRight;
