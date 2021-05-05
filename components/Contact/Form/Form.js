import { useState, useEffect } from "react";
import { validateEmail } from "../../../utils/helperUtils";

import Button from "../../shared/Button/Button";
import Notification from "../../shared/Notification/Notification";
import FormElement from "../../shared/FormElement/FormElement";
import Radio from "../../shared/Radio/Radio";
import classes from "./Form.module.scss";

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
            maxLength: "Name must be at most 20 characters.",
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
    const [notification, setNotificaton] = useState(null);
    function nameChangeHandler(e) {
        const enteredInput = e.target.value;

        setFullNameInput((prevProps) => {
            let status = prevProps.status;
            if (!enteredInput.trim()) {
                status = "required";
            } else if (enteredInput.trim().length < 6) {
                status = "minLength";
            } else if (enteredInput.trim().length > 20) {
                status = "maxLength";
            } else {
                status = "untouch";
            }
            return {
                ...prevProps,
                value: enteredInput,
                touch: true,
                status,
                valid: enteredInput.trim().length >= 6 && enteredInput.trim().length <= 20,
            };
        });

        setValidButton(
            enteredInput.trim().length >= 6 &&
                enteredInput.trim().length <= 20 &&
                emailInput.valid &&
                messageInput.valid &&
                radioInput
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
            setFullNameInput((prevProps) => {
                return {
                    ...prevProps,
                    value: "",
                };
            });
            setEmailInput((prevProps) => {
                return {
                    ...prevProps,
                    value: "",
                };
            });
            setMessageInput((prevProps) => {
                return {
                    ...prevProps,
                    value: "",
                };
            });
            setRadioInput("feedback");

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
