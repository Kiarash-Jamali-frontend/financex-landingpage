type StatisticsItemData = {
  value: string;
  title: string;
};

type PropTypes = {
  data: StatisticsItemData;
};

const StatisticsItem: React.FC<PropTypes> = ({ data }) => {
  return <div>
    <div className="text-white text-[28px] font-['Satoshi-Black']">{data.value}<span className="text-primary">+</span></div>
    <div className="text-primary text-sm mt-5">{data.title}</div>
  </div>;
};

export default StatisticsItem;
