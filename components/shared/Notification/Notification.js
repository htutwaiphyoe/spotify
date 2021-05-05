import classes from "./Notification.module.scss";

function Toast({ title, status, message }) {
    return (
        <div className={`${classes.Notification} ${classes[status]}`}>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    );
}

export default Toast;
