import classes from "./FAQ.module.scss";

function FAQ({ items }) {
    console.log(items);
    return (
        <ul className={classes.FAQ}>
            {items.map((item, i) => (
                <li key={i}>
                    <details>
                        <summary>{item.question}</summary>
                        <p>{item.answer}</p>
                    </details>
                </li>
            ))}
        </ul>
    );
}

export default FAQ;
