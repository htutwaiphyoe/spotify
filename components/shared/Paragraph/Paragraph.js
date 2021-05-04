import classes from "./Paragraph.module.scss";

const Paragraph = (props) => <p className={`${classes.Paragraph}`}>{props.children}</p>;

export default Paragraph;
