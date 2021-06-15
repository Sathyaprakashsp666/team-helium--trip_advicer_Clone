import { Route } from "react-router";
import { AbhuDhabi } from "./AbhuDhabi";

function Routes() {
  return (
    <div>
      <Route exact path="/things">
        <AbhuDhabi />
      </Route>
    </div>
  );
}
export { Routes };
