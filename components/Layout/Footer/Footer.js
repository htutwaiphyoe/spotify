import Paragraph from "../../shared/Paragraph/Paragraph";
import classes from "./Footer.module.scss";
function Footer(props) {
    return (
        <footer className={classes.Footer}>
            <article>
                <Paragraph>
                    Copyright &copy; 2021 | MTU Students' Union <br />
                    Terms & Conditions
                </Paragraph>
            </article>
        </footer>
    );
}

export default Footer;
