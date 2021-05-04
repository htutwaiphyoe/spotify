import classes from "./Radio.module.scss";

function Radio(props) {
    return (
        <div className={classes.Radio}>
            <input {...props.elementConfig} onChange={props.onChange} />
            <label htmlFor={props.elementConfig.id}>{props.label}</label>
        </div>
    );
}

export default Radio;
