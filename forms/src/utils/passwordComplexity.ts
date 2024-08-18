function passwordComplexity(password: string) {
    const upperCaseLetters = /[A-Z]/;
    const numbers = /[0-9]/;
    const specialChars = /[!@#$%^&*()_+{}\\[\]:;"'<>,.?/\\|`~]/;

    let result = '';
    if (password.length === 0) {
        result = '';
    }
    if (password.length < 8) {
        result = 'Weak';
    }
    if (upperCaseLetters.test(password) && numbers.test(password) && specialChars.test(password)) {
        result = 'Good';
    }
    if (upperCaseLetters.test(password) && numbers.test(password) && specialChars.test(password) && password.length > 6) {
        result = 'Strong';
    }
    if (upperCaseLetters.test(password) && numbers.test(password) && specialChars.test(password) && password.length > 10) {
        result = 'Super strong';
    }
    return result;
}

export default passwordComplexity;
