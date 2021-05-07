import { useState } from "react";
import { validateInput } from "../utils/helperUtils";

function useInput(props) {
    const [inputState, setInputState] = useState(props);

    function onChangeHandler(e) {
        const enteredInput = e.target.value;

        setInputState((prevState) => {
            let status = validateInput(enteredInput, prevState.validations, prevState.status);
            return {
                ...prevState,
                value: enteredInput,
                touch: true,
                status,
                valid: status === "untouch",
            };
        });
    }

    function resetState() {
        setInputState((prevState) => ({
            ...prevState,
            status: "untouch",
            value: "",
            valid: false,
            touch: false,
        }));
    }

    return [inputState, onChangeHandler, resetState];
}

export default useInput;
