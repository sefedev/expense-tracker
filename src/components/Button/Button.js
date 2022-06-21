const Button = ({ buttonType, children, onClick }) => {
  return (
    <button
      className={`bg-blue py-2 px-7 font-bold text-white rounded-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
