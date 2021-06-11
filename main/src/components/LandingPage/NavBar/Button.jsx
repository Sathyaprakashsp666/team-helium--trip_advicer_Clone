import styles from "./NavBar.module.css";
function Button(props) {
  return (
    <div>
      <button className={props.cls} className={styles.firstbutbb}>
        {props.value}
      </button>
    </div>
  );
}
export { Button };
