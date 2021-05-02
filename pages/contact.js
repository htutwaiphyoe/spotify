import Head from "next/head";
import { Fragment } from "react";
import Contact from "../components/Contact/Contact";

function ContactPage(props) {
    return (
        <Fragment>
            <Head>
                <meta
                    name="description"
                    content="Contact MTU CDM Support Team and donate for CDMers"
                />
                <title>Contact | MTU CDM Support Team</title>
            </Head>
            <Contact />
        </Fragment>
    );
}

export default ContactPage;
