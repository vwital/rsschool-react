import { useRef } from 'react';
import userSchema from '../../utils/shema';
import * as yup from 'yup';

import styles from './index.module.css';

function UncontrolledForm() {
    // const  validationErrors(){
    //     name: 'Reee'
    // }
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const conditionsRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);

    const submitHandler = async () => {
        // console.log(nameRef.current?.value);
        // Sending to redux store
        // TODO REDIRECT TO MAIN`
        //Use onChange
        // userSchema.validate(nameRef);

        const formValues = {
            name: nameRef.current?.value,
            age: Number(ageRef.current?.value),
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            confirmPassword: conditionsRef.current?.value,
            gender: genderRef.current?.value,
            conditions: conditionsRef.current?.checked,
            img: imgRef.current?.files ? imgRef.current.files[0] : undefined,
            country: countryRef.current?.value,
        };

        await userSchema
            .validate(formValues, { abortEarly: false })
            .then((data) => console.log(data))
            .catch((e) => {
                console.log('eeror validatuim');
                if (e instanceof yup.ValidationError) {
                    console.log(e.inner);
                    e.inner.forEach((el) => console.log(el.message));
                }
            });
        console.log(formValues);
    };

    return (
        <div className={styles['uncontrolled-form']}>
            <h1>Uncontrolled Form</h1>
            <label htmlFor="name">
                Name
                <input ref={nameRef} id="name" name="name" type="text" placeholder="First uppercased letter" required></input>
            </label>

            <label htmlFor="ahe">
                Age
                <input ref={ageRef} id="age" name="age" type="text"></input>
            </label>
            <label htmlFor="email">
                Email
                <input ref={emailRef} id="email" name="email" type="email"></input>
            </label>
            <label htmlFor="password">
                Password
                <input ref={passwordRef} id="password" name="password" type="password"></input>
                <p className={styles['password-complexity']}></p>
            </label>
            <label htmlFor="confPassword">
                Confirm password
                <input ref={confirmPasswordRef} id="confPassword" name="confPassword" type="password"></input>
            </label>
            <label htmlFor="gender">
                Gender
                <select ref={genderRef} name="gender" id="gender">
                    <option value="">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Mechanic">Mechanic</option>
                </select>
            </label>
            <label htmlFor="conditions">
                {' '}
                Accept Terms and Conditions
                <input ref={conditionsRef} id="conditions" name="conditions" type="checkbox" />
            </label>
            <label htmlFor="img">
                {' '}
                Your super picture
                <input ref={imgRef} id="img" name="img" type="file" />
            </label>
            <label htmlFor="country">
                Country
                <input ref={countryRef} id="country" name="country" type="text" />
            </label>
            <button type="submit" onClick={submitHandler}>
                Submit
            </button>
        </div>
    );
}

export default UncontrolledForm;
