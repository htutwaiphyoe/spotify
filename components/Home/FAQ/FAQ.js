import classes from "./FAQ.module.scss";

function FAQ({ items }) {
    return (
        <ul className={classes.FAQ}>
            {items.map((item, i) => (
                <li key={i}>
                    <details>
                        <summary>{item.question}</summary>
                        <p>{items.answer}</p>
                    </details>
                </li>
            ))}
        </ul>
    );
}

export default FAQ;
