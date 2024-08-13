export const LogoTitle = ({imgSrc, imgAlt, text, className}) => {
  return (
    <div className="flex items-center">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-20"
      />
      <p className={`text-3xl font-bold text-white ${className}`}>{text}</p>
    </div>
  );
};

export default LogoTitle;
