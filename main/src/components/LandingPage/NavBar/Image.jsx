import React from "react";
function Image(props) {
  return (
    <div>
      <img className={props.cls} src={props.src} alt="" />
    </div>
  );
}
export { Image };
