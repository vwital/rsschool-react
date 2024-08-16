import * as yup from 'yup';

const regexpEmail = new RegExp(/^\S+@\S+\.S+$/);
const MAX_IMG_SIZE = 307200;

const userSchema = yup.object().shape({
    name: yup.string().required('Required field').uppercase('The name must start with a capital letter'),
    age: yup.number().typeError('Age must be an integer number').required('Required field').positive('Age should be a positive number'),
    email: yup.string().required('Required field').matches(regexpEmail, 'Incorrect email format'),
    password: yup
        .string()
        .required('')
        .matches(/[0-9]/, 'Password must contain at least 1 digit')
        .matches(/[A-Z]/, 'Password must contain at least 1 capital letter')
        .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter')
        .matches(/!"#$%&'()*\+,-\/:;<=>?@[\\]^_`{|}/g, 'Password must contain at least 1 special character'),
    confirmPassword: yup
        .string()
        .required('')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    gender: yup.string().required('Required field'),
    conditions: yup.string().required('Required field'),
    img: yup
        .mixed()
        .required('Required field')
        .test('is-valid-type', 'Not valid type, allowed formats: png, jpeg', (value) => {
            return value && value instanceof File && ['image/jpeg', 'image/png'].includes(value.type);
        })
        .test('is-valid-size', 'Max allowed size is 300KB', (value) => value && value instanceof File && value.size <= MAX_IMG_SIZE),
    country: yup.string().required('Required field'),
});

export default userSchema;
