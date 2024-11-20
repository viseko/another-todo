const StatusIndicator = ({
  value
}) => {
  const colors = ["green", "lime", "yellow", "orange", "red"];

  return (
    <div
      className={`size-4 rounded-xl bg-${
        colors[value - 1]
      }-500 `}
    />
  );
};

export default StatusIndicator;