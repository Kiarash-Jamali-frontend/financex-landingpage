import SvgIcon from "@/app/types/SvgIcon";

const Linkedin: React.FC<SvgIcon> = ({ fill, stroke, classes }) => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_504_257)">
          <path
            d="M19.9951 19.9999V19.999H20.0001V12.664C20.0001 9.07569 19.2276 6.31152 15.0326 6.31152C13.0159 6.31152 11.6626 7.41819 11.1101 8.46736H11.0517V6.64652H7.07422V19.999H11.2159V13.3874C11.2159 11.6465 11.5459 9.96319 13.7017 9.96319C15.8259 9.96319 15.8576 11.9499 15.8576 13.499V19.9999H19.9951Z"
            fill="auto"
          />
          <path
            d="M0.330078 6.64746H4.47675V20H0.330078V6.64746Z"
            fill="auto"
          />
          <path
            d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z"
            fill="auto"
          />
        </g>
        <defs>
          <clipPath id="clip0_504_257">
            <rect width="20" height="20" fill="auto" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Linkedin;
