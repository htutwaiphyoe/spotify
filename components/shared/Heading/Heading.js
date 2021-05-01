import classes from "./Heading.module.scss";

const Heading = (props) => <h1 className={classes.Heading}>{props.text}</h1>;

export default Heading;
