const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none mr-4
      ${backgroundColor ? backgroundColor : "bg-coral-red"}
      ${textColor ? textColor : "text-white"}
      ${borderColor ? borderColor : ""}
      ${fullWidth && 'w-full'}
      rounded-full`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 w-5 h-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
