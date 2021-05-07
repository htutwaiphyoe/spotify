import { useState, useEffect } from "react";
import { validateEmail } from "../../../utils/helperUtils";
import useInput from "../../../hooks/useInput";

import Button from "../../shared/Button/Button";
import Notification from "../../shared/Notification/Notification";
import FormElement from "../../shared/FormElement/FormElement";
import Radio from "../../shared/Radio/Radio";
import classes from "./Form.module.scss";

function Form(props) {
    const [fullNameInput, onNameChange, resetNameInput] = useInput({
        elementType: "input",
        elementConfig: {
            required: true,
            placeholder: "John Doe",
            type: "text",
            id: "name",
        },
        label: "Full Name",
        validations: {
            untouch: { value: true, statusText: "", status: "untouch" },
            required: { value: true, statusText: "Name is required.", status: "required" },
            minLength: {
                value: 6,
                statusText: "Name must be at least 6 characters.",
                status: "minLength",
            },
            maxLength: {
                value: 20,
                statusText: "Name must be at most 20 characters.",
                status: "maxLength",
            },
        },
        status: "untouch",
        value: "",
        valid: false,
        touch: false,
    });
    const [emailInput, onEmailChange, resetEmailInput] = useInput({
        elementType: "input",
        elementConfig: {
            required: true,
            placeholder: "johndoe@domain.com",
            type: "text",
            id: "email",
        },
        label: "Email",
        validations: {
            untouch: { value: true, statusText: "", status: "untouch" },
            required: { value: true, statusText: "Email is required.", status: "required" },
            invalid: { value: true, statusText: "Email is invalid.", status: "invalid" },
        },
        status: "untouch",
        value: "",
        valid: false,
        touch: false,
    });
    const [messageInput, onMessageChange, resetMessageInput] = useInput({
        elementType: "textarea",
        elementConfig: {
            required: true,
            id: "message",
            name: "message",
            placeholder: "Write your message",
            rows: 4,
        },
        label: "Message",
        validations: {
            untouch: { value: true, statusText: "", status: "untouch" },
            required: { value: true, statusText: "Message is required.", status: "required" },
            minLength: { value: 20, statusText: "Message is too short.", status: "minLength" },
            maxLength: { value: 100, statusText: "Message is too long.", status: "maxLength" },
        },
        status: "untouch",
        value: "",
        valid: false,
        touch: false,
    });
    const [radioInput, setRadioInput] = useState("feedback");
    const [validButton, setValidButton] = useState(false);
    const [notification, setNotificaton] = useState(null);

    useEffect(() => {
        setValidButton(messageInput.valid && fullNameInput.valid && emailInput.valid && radioInput);
    }, [messageInput.valid, fullNameInput.valid, emailInput.valid, radioInput]);

    useEffect(() => {
        if (notification && notification.status !== "pending") {
            const timer = setTimeout(() => {
                setNotificaton(null);
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [notification]);

    async function formSubmitHandler(e) {
        e.preventDefault();
        setValidButton(false);
        setNotificaton({
            title: "Sending message...",
            status: "pending",
            message: "Your message is on its way.",
        });
        try {
            const response = await (
                await fetch("/api/contact", {
                    method: "POST",
                    body: JSON.stringify({
                        name: fullNameInput.value.trim(),
                        email: emailInput.value.trim(),
                        type: radioInput,
                        message: messageInput.value.trim(),
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            ).json();
            if (response.status === "fail" || response.status === "error") {
                throw new Error(response.message || "Something went wrong!");
            }
            setNotificaton({
                title: "Success",
                status: "success",
                message: "Your message has been sent successfully.",
            });
        } catch (e) {
            setNotificaton({
                title: "Error",
                status: "error",
                message: e.message || "Ah, something went wrong!",
            });
        }
        resetNameInput();
        resetEmailInput();
        resetMessageInput();
        setRadioInput("feedback");
    }
    return (
        <div className={classes.Form}>
            {notification && <Notification {...notification} />}
            <h1>Get in touch!</h1>
            <form onSubmit={formSubmitHandler}>
                <FormElement
                    elementType={fullNameInput.elementType}
                    elementConfig={fullNameInput.elementConfig}
                    label={fullNameInput.label}
                    status={fullNameInput.validations[fullNameInput.status].statusText}
                    value={fullNameInput.value}
                    valid={fullNameInput.valid}
                    onChange={onNameChange}
                    touch={fullNameInput.touch}
                />
                <FormElement
                    elementType={emailInput.elementType}
                    elementConfig={emailInput.elementConfig}
                    label={emailInput.label}
                    status={emailInput.validations[emailInput.status].statusText}
                    value={emailInput.value}
                    valid={emailInput.valid}
                    onChange={onEmailChange}
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
                        onChange={(e) => setRadioInput(e.target.value)}
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
                        onChange={(e) => setRadioInput(e.target.value)}
                    />
                </div>

                <FormElement
                    elementType={messageInput.elementType}
                    elementConfig={messageInput.elementConfig}
                    label={messageInput.label}
                    status={messageInput.validations[messageInput.status].statusText}
                    value={messageInput.value}
                    valid={messageInput.valid}
                    onChange={onMessageChange}
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
