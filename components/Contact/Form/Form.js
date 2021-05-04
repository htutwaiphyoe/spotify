import { useState } from "react";

import Button from "../../shared/Button/Button";
import FormElement from "../../shared/FormElement/FormElement";
import Radio from "../../shared/Radio/Radio";
import classes from "./Form.module.scss";

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
function Form(props) {
    const [fullNameInput, setFullNameInput] = useState({
        elementType: "input",
        elementConfig: {
            required: true,
            placeholder: "John Doe",
            type: "text",
            id: "name",
        },
        label: "Full Name",
        statusText: {
            untouch: "",
            required: "Name is required.",
            minLength: "Name must be at least 6 characters.",
        },
        status: "untouch",
        value: "",
        valid: false,
        touch: false,
    });
    const [emailInput, setEmailInput] = useState({
        elementType: "input",
        elementConfig: {
            required: true,
            placeholder: "johndoe@domain.com",
            type: "text",
            id: "email",
        },
        label: "Email",
        statusText: {
            untouch: "",
            required: "Email is required.",
            invalid: "Email is invalid.",
        },
        status: "untouch",
        value: "",
        valid: false,
        touch: false,
    });
    const [messageInput, setMessageInput] = useState({
        elementType: "textarea",
        elementConfig: {
            required: true,
            id: "message",
            name: "message",
            placeholder: "Write your message",
            rows: 4,
        },
        label: "Message",
        statusText: {
            untouch: "",
            required: "Message is required.",
            short: "Message is too short.",
            long: "Message is too long.",
        },
        status: "untouch",
        value: "",
        valid: false,
        touch: false,
    });
    const [validButton, setValidButton] = useState(false);
    const [radioInput, setRadioInput] = useState("feedback");
    function nameChangeHandler(e) {
        const enteredInput = e.target.value;

        setFullNameInput((prevProps) => {
            let status = prevProps.status;
            if (!enteredInput.trim()) {
                status = "required";
            } else if (enteredInput.trim().length < 6) {
                status = "minLength";
            } else {
                status = "untouch";
            }
            return {
                ...prevProps,
                value: enteredInput,
                touch: true,
                status,
                valid: enteredInput.trim().length >= 6,
            };
        });

        setValidButton(
            enteredInput.trim().length >= 6 && emailInput.valid && messageInput.valid && radioInput
        );
    }
    function emailChangeHandler(e) {
        const enteredInput = e.target.value;

        setEmailInput((prevProps) => {
            let status = prevProps.status;

            if (enteredInput.trim() === "") {
                status = "required";
            } else if (!validateEmail(enteredInput.trim())) {
                status = "invalid";
            } else {
                status = "untouch";
            }

            return {
                ...prevProps,
                value: enteredInput,
                touch: true,
                status,
                valid: validateEmail(enteredInput.trim()),
            };
        });
        setValidButton(
            validateEmail(enteredInput.trim()) &&
                fullNameInput.valid &&
                messageInput.valid &&
                radioInput
        );
    }
    function messageChangeHandler(e) {
        const enteredInput = e.target.value;

        setMessageInput((prevProps) => {
            let status = prevProps.status;
            if (!enteredInput.trim()) {
                status = "required";
            } else if (enteredInput.trim().length < 20) {
                status = "short";
            } else if (enteredInput.trim().length > 100) {
                status = "long";
            } else {
                status = "untouch";
            }
            return {
                ...prevProps,
                value: enteredInput,
                touch: true,
                status,
                valid: enteredInput.trim().length >= 20 && enteredInput.trim().length <= 100,
            };
        });
        setValidButton(
            enteredInput.trim().length >= 20 &&
                enteredInput.trim().length <= 100 &&
                fullNameInput.valid &&
                emailInput.valid &&
                radioInput
        );
    }
    function radioChangeHandler(e) {
        setRadioInput(e.target.value);
        setValidButton(
            e.target.value && messageInput.valid && fullNameInput.valid && emailInput.valid
        );
    }
    function formSubmitHandler(e) {
        e.preventDefault();
        console.log(
            fullNameInput.value.trim(),
            emailInput.value.trim(),
            messageInput.value.trim(),
            radioInput
        );
    }
    return (
        <div className={classes.Form}>
            <h1>Get in touch!</h1>
            <form onSubmit={formSubmitHandler}>
                <FormElement
                    elementType={fullNameInput.elementType}
                    elementConfig={fullNameInput.elementConfig}
                    label={fullNameInput.label}
                    status={fullNameInput.statusText[fullNameInput.status]}
                    value={fullNameInput.value}
                    valid={fullNameInput.valid}
                    onChange={nameChangeHandler}
                    touch={fullNameInput.touch}
                />
                <FormElement
                    elementType={emailInput.elementType}
                    elementConfig={emailInput.elementConfig}
                    label={emailInput.label}
                    status={emailInput.statusText[emailInput.status]}
                    value={emailInput.value}
                    valid={emailInput.valid}
                    onChange={emailChangeHandler}
                    touch={emailInput.touch}
                />
                <div className={classes.Form__Grid}>
                    <Radio
                        elementType="input"
                        elementConfig={{
                            required: true,
                            type: "radio",
                            id: "feedback",
                            value: "feedback",
                            name: "formType",
                            defaultChecked: true,
                        }}
                        label="feedback"
                        onChange={radioChangeHandler}
                    />
                    <Radio
                        elementType="input"
                        elementConfig={{
                            required: true,
                            type: "radio",
                            id: "bug",
                            value: "report",
                            name: "formType",
                        }}
                        label="report a bug"
                        onChange={radioChangeHandler}
                    />
                </div>

                <FormElement
                    elementType={messageInput.elementType}
                    elementConfig={messageInput.elementConfig}
                    label={messageInput.label}
                    status={messageInput.statusText[messageInput.status]}
                    value={messageInput.value}
                    valid={messageInput.valid}
                    onChange={messageChangeHandler}
                    touch={messageInput.touch}
                />

                <div className={classes.Form__Btn}>
                    <Button valid={validButton}>Send now</Button>
                </div>
            </form>
        </div>
    );
}

export default Form;
