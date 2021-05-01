import classes from "./Paragraph.module.scss";

const Paragraph = (props) => <p className={`${classes.Paragraph} mt-sm mb-sm`}>{props.children}</p>;

export default Paragraph;
