import classnames from 'classnames';

const Button = ({ buttonType, children, onClick }) => {
  return (
    <button
      className={classnames(
        buttonType === 'primary' && 'bg-blue',
        buttonType === 'cancel' && 'bg-gray',
        'py-2 px-7',
        'font-bold text-white',
        'rounded-full'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
