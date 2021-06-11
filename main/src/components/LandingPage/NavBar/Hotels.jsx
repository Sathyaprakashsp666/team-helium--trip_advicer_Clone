import { Image } from "./Image";
import { P } from "./P";
import styles from "./NavBar.module.css";
function Hotels(props) {
  return (
    <div className={styles.dire}>
      <P value={props.value} />
      <Image cls={styles.hotels} src={props.src} />
    </div>
  );
}
export { Hotels };
