import classes from "./Amount.module.scss";

function Amount({ items }) {
    items[3].amount = ((items[1].amount / items[0].amount) * 100).toFixed(2);
    return (
        <ul className={classes.Amount}>
            {items.map((item) => (
                <li key={item.type} className={classes.Amount__Item}>
                    <div className={classes.Amount__Item__Info}>
                        <h3>{item.amount.toLocaleString()}</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className={classes.Amount__Item__Icon}>
                        <ion-icon name={`${item.icon}-outline`}></ion-icon>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Amount;
