import styles from "./NavBar.module.css";
import { Image } from "./Image";

function Search() {
  return (
    <div className={styles.search}>
      <form action="">
        <button className={styles.b}>
          {" "}
          <Image
            cls={styles.icon}
            src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
          />{" "}
        </button>
        <input type="text" placeholder="Where to?" />
      </form>
    </div>
  );
}
export { Search };
