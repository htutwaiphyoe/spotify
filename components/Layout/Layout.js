import { Fragment } from "react";

import Navigation from "../Navigation/Navigation";
import Meta from "./Meta/Meta";

function Layout(props) {
    return (
        <Fragment>
            <Meta />
            <Navigation />
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;
