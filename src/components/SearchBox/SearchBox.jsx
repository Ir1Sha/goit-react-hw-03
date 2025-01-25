import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchLabel} htmlFor="search">
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={onChange}
          className={styles.searchInput}
        />
      </label>
    </div>
  );
};

export default SearchBox;
