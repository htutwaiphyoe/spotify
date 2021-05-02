import classes from "./Amount.module.scss";

function Amount({ items }) {
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
