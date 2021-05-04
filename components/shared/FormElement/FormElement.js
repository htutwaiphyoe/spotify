import classes from "./FormElement.module.scss";

function FormElement(props) {
    let formElement;
    let validClass = "";
    if (props.touch) {
        if (props.valid) validClass = classes.FormElement_Valid;
        else validClass = classes.FormElement_Invalid;
    }
    switch (props.elementType) {
        case "textarea":
            formElement = (
                <textarea
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.onChange}
                    className={validClass}
                />
            );
            break;

        default:
            formElement = (
                <input
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.onChange}
                    className={validClass}
                    autoComplete={"off"}
                />
            );
    }

    return (
        <div className={`${classes.FormElement}`}>
            <label htmlFor={props.elementConfig.id}>{props.label}</label>
            {formElement}
            <span>{props.status && props.status}</span>
        </div>
    );
}

export default FormElement;
