import classes from "./Button.module.scss";

function Button(props) {
    const classNames = [classes.Button];
    if (!props.valid) {
        classNames.push(classes.Button_Disable);
    }
    if (props.link) {
        return (
            <div className="center">
                <a href={props.url} className={classes.Button}>
                    {props.children}
                </a>
            </div>
        );
    }

    return (
        <div className="center">
            <button
                onClick={props.onClick}
                className={classNames.join(" ")}
                disabled={!props.valid}
            >
                {props.children}
            </button>
        </div>
    );
}

export default Button;
