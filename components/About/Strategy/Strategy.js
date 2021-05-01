import Paragraph from "../../shared/Paragraph/Paragraph";
import classes from "./Strategy.module.scss";

function Strategy(props) {
    const { items } = props;
    return (
        <ul className={classes.Strategy}>
            {items.map((item, i) => (
                <li key={i}>
                    <ion-icon name={`${item.icon}-outline`}></ion-icon>
                    <Paragraph>{item.text}</Paragraph>
                </li>
            ))}
        </ul>
    );
}

export default Strategy;
