interface XOutlineProps {
  width?: string;
  isVisible?: boolean;
}

const XOutlineSvg: React.FC<XOutlineProps> = ({
  width = "6.4rem",
  isVisible = false,
}) => {
  // Apply width through style to leverage CSS's ability to handle "auto" values
  const svgStyle = {
    width,
    height: "auto",
    display: isVisible ? "block" : "none",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      style={svgStyle}
    >
      <path
        d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z"
        stroke="#31C3BD"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default XOutlineSvg;
