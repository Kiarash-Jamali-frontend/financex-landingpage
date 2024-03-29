import SvgIcon from "@/app/types/SvgIcon";

const Messenger: React.FC<SvgIcon> = ({ fill, stroke, classes }) => {
  return (
    <>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill={fill}
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_504_255)">
          <path
            d="M0.986816 9.25917C0.986816 12.1725 2.44015 14.7717 4.71265 16.4692V20L8.11765 18.1317C9.02598 18.3825 9.98848 18.5192 10.986 18.5192C16.5085 18.5192 20.986 14.3742 20.986 9.26C20.9868 4.14583 16.5093 0 10.9868 0C5.46432 0 0.986816 4.145 0.986816 9.25917H0.986816ZM9.93182 6.66583L12.5402 9.38167L17.446 6.66583L11.9793 12.4675L9.43348 9.7525L4.46432 12.4683L9.93182 6.66583Z"
            fill="auto"
          />
        </g>
        <defs>
          <clipPath id="clip0_504_255">
            <rect
              width="20"
              height="20"
              fill="auto"
              transform="translate(0.986816)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Messenger;
