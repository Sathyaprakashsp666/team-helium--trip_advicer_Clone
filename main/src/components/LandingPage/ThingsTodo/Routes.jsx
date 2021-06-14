import { Route } from "react-router";
import {AbhuDhabi} from './AbhuDhabi'



function Routes(){
    return (
        <div>
            <Route path='/things'>
                    <AbhuDhabi/>
            </Route>

        </div>
    )
}
export {Routes}