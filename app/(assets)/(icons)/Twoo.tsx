import SvgIcon from "@/app/types/SvgIcon";

const Twoo: React.FC<SvgIcon> = ({ fill, stroke, classes }) => {
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
        <g clipPath="url(#clip0_504_263)">
          <path
            d="M9.39178 14.0994C9.44512 14.0544 9.49928 14.0077 9.54928 13.9585C6.76512 16.6902 2.22512 15.4152 1.16095 11.5627V11.5569C-0.266549 6.3152 5.75262 2.33353 9.54762 6.0002C9.62678 6.08437 14.8693 11.6752 14.536 11.3194H14.551C15.3335 12.126 16.4651 12.0377 17.1385 11.3327C17.8626 10.576 17.8885 9.34103 17.1776 8.57187C16.0551 7.27937 13.851 8.2452 14.0618 10.161L12.8001 8.87603L11.3368 7.47687C11.6385 6.8777 12.0343 6.35353 12.5301 5.9002C12.4768 5.94603 12.4226 5.99353 12.3726 6.04103C15.1676 3.29937 19.7043 4.60437 20.761 8.4402V8.4452C22.1918 13.686 16.166 17.6677 12.3743 14.001C12.2968 13.9177 7.05762 8.29187 7.38928 8.64853L7.38595 8.63603C7.37262 8.63603 7.37262 8.62353 7.37262 8.62353C6.55095 7.77603 5.43678 7.90353 4.78512 8.5977C4.06012 9.35437 4.03512 10.5894 4.74762 11.3469C5.82095 12.6094 8.07262 11.6735 7.86095 9.71937C7.94262 9.80353 10.7685 12.7044 10.5885 12.5202C10.131 13.4327 9.61928 13.8519 9.39178 14.0994Z"
            fill="auto"
          />
        </g>
        <defs>
          <clipPath id="clip0_504_263">
            <rect
              width="20"
              height="20"
              fill="auto"
              transform="translate(0.960938)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Twoo;
