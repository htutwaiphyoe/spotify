export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const validateInput = (value, validations, status) => {
    if (validations.required && value.trim().length === 0) {
        return validations.required.status;
    }
    if (validations.minLength && value.trim().length < validations.minLength.value) {
        return validations.minLength.status;
    }

    if (validations.maxLength && value.trim().length > validations.maxLength.value) {
        return validations.maxLength.status;
    }

    if (validations.invalid && !validateEmail(value.trim())) {
        return validations.invalid.status;
    }

    return validations.untouch.status;
};
