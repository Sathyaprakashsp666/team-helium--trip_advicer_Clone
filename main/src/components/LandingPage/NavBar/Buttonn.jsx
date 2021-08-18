import styles from "./NavBar.module.css";
function Buttonn(props) {
  return (
    <div>
      <button className={props.cls}>{props.value}</button>
    </div>
  );
}
export { Buttonn };
