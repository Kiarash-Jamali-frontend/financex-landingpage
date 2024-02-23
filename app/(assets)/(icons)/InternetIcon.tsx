import SvgIcon from "@/app/types/SvgIcon";

const InternetIcon: React.FC<SvgIcon> = ({ fill, stroke, classes }) => {
  return (
    <>
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12H2V17H0V12ZM4 9H6V17H4V9ZM8 6H10V17H8V6ZM12 3H14V17H12V3ZM16 0H18V17H16V0Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

export default InternetIcon;
