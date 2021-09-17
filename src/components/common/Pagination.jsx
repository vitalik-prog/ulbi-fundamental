import Button from "./Button";
import styles from './styles.module.css';

const Pagination = ({pagesNumbers, goToPage, activePage}) => {

  return (
    <div className={styles.paginationWrapper}>
      {pagesNumbers.map(number =>
        <Button
          key={number}
          style={activePage === number && styles.activePage}
          onClick={() => goToPage(number)}
        >
          {number}
        </Button>
      )}
    </div>
  );
}

export default Pagination;
