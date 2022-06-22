import classnames from 'classnames';

const Button = ({ buttonType, children, onClick }) => {
  return (
    <button
      className={classnames(
        buttonType === 'primary' && 'bg-blue px-7 hover:bg-blue-dark-saturated',
        buttonType === 'cancel' && 'bg-gray px-7 hover:bg-gray-dark',
        buttonType === 'delete' && 'bg-salmon px-7 hover:bg-red',
        buttonType === 'addNew' &&
          'bg-blue pl-2 pr-4 hover:bg-blue-dark-saturated',
        'py-2',
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
