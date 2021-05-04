import { Fragment } from "react";

import Navigation from "../Navigation/Navigation";
import Meta from "./Meta/Meta";
import Footer from "./Footer/Footer";

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
