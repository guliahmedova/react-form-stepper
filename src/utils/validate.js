const firstLetterUppercase = /[A-Z]/

export const validate = (values, currentStep) => {
    const errors = {};
    errors.isValid = false;
    const birthDate = new Date(values.birthDate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const birthMonth = currentDate.getMonth() - birthDate.getMonth();

    console.log(currentStep, 'currentStep');

    if (birthMonth < 0 || birthMonth === 0 && currentDate.getDate() < birthDate.getDate()) {
        age--;
    }

    if (currentStep === 1) {
        if (!values.name) {
            errors.name = 'Required';
            errors.isValid = false;
        } else if (values.name.length > 10) {
            errors.name = 'Name must be 10 characters or less';
            errors.isValid = false;
        } else if (!firstLetterUppercase.test(values.name)) {
            errors.name = 'Name must start with an uppercase letter';
            errors.isValid = false;
        }

        if (!values.surname) {
            errors.surname = 'Required';
            errors.isValid = false;
        } else if (values.surname.length > 15) {
            errors.surname = 'Surname must be 15 characters or less';
            errors.isValid = false;
        } else if (!firstLetterUppercase.test(values.surname)) {
            errors.surname = 'Surname must start with an uppercase letter';
            errors.isValid = false;
        } else {
            errors.isValid = true;
        }
    }

    if (currentStep === 2) {
        if (!values.birthDate) {
            errors.birthDate = 'Required';
            errors.isValid = false;
        } else if (age < 18) {
            errors.birthDate = 'Age must be at least 18 years old';
            errors.isValid = false;
        }

        if (!values.position) {
            errors.position = 'Required';
            errors.isValid = false;
        } else {
            errors.isValid = true;
        }
    }

    if (currentStep === 3) {
        if (!values.email) {
            errors.email = 'Required';
            errors.isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
            errors.isValid = false;
        }

        if (!values.phone) {
            errors.phone = 'Required';
            errors.isValid = false;
        } else if (values.phone.length !== 14) {
            errors.phone = 'Phone number must be 14 characters long';
            errors.isValid = false;
        } else if (!values.phone.startsWith('+994')) {
            errors.phone = 'Phone number must start with +994';
            errors.isValid = false;
        } else {
            errors.isValid = true;
        }
    }

    if (currentStep === 4) {
        if (!values.message) {
            errors.message = 'Required';
            errors.isValid = false;
        } else if (values.message.length > 50 || values.message.length < 20) {
            errors.message = 'Message must be between 20 and 50 characters';
            errors.isValid = false;
        } else {
            errors.isValid = true;
        }
    }

    return errors;
};