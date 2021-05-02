import Image from "next/image";

import Heading from "../shared/Heading/Heading";
import Paragraph from "../shared/Paragraph/Paragraph";
import Button from "../shared/Button/Button";
import Form from "./Form/Form";
import Info from "./Info/Info";
import classes from "./Contact.module.scss";

function Contact(props) {
    return (
        <section className={classes.Contact}>
            <Info />
            <Form />
        </section>
    );
}

export default Contact;
