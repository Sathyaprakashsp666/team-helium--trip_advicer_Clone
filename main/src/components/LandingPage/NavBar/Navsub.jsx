import { Image } from "./Image";
import styles from "./NavBar.module.css";
import { P } from "./P";

function NavSub(props) {
  return (
    <div style={{ display: "flex" }}>
      <Image cls={styles.imagee} src={props.src} />
      <P value={props.text} clasName={styles.text} />{" "}
    </div>
  );
}
export { NavSub };
