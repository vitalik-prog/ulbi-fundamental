import styles from './styles.module.css';

const Button = ({ children, style, ...props }) => {

  return (
    <button {...props} className={[styles.btn, style].join(' ')}>
      {children}
    </button>
  );
}

export default Button;
