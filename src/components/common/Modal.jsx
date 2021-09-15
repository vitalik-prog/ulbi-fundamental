import styles from './styles.module.css';

const Modal = ({children, visible, closeModal}) => {

  const rootClasses = [styles.modal]
  if (visible) {
    rootClasses.push(styles.active)
  }

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div onClick={closeModal} className={rootClasses.join(' ')}>
      <div className={styles.modalContent} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
