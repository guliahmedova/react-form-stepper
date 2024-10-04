const firstLetterUppercase = /[A-Z]/

export const validate = values => {
    const errors = {};
    const birthDate = new Date(values.birthDate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const birthMonth = currentDate.getMonth() - birthDate.getMonth();

    if (birthMonth < 0 || birthMonth === 0 && currentDate.getDate() < birthDate.getDate()) {
        age--;
    }

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 10) {
        errors.name = 'Name must be 10 characters or less';
    } else if (!firstLetterUppercase.test(values.name)) {
        errors.name = "Name must start with an uppercase letter";
    }

    if (!values.surname) {
        errors.surname = 'Required';
    } else if (values.surname.length > 15) {
        errors.surname = 'Surname be 15 characters or less';
    } else if (!firstLetterUppercase.test(values.surname)) {
        errors.surname = "Surname must start with an uppercase letter";
    }

    if (!values.position) {
        errors.position = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }


    if (!values.message) {
        errors.message = 'Required';
    } else if (values.message.length > 50 || values.message.length < 20) {
        errors.message = "Message must be between 20 and 50 characters"
    }

    if (!values.birthDate) {
        errors.birthDate = 'Required';
    } else if (age < 18) {
        errors.birthDate = "Age must be at least 18 years old"
    }

    if (!values.phone) {
        errors.phone = 'Required';
    } else if (values.phone.length > 14 || values.phone.length < 14) {
        errors.phone = "Phone number must be 14 characters long"
    } else if (!values.phone.startsWith('+994')) {
        errors.phone = "Phone number must start with +994"
    }

    return errors;
};