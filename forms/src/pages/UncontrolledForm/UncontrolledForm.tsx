import { useRef, useState } from 'react';
import userSchema from '../../utils/shema';
import * as yup from 'yup';
import { IErrors } from './interfaces';
import styles from './index.module.css';

function UncontrolledForm() {
    const [errors, setErrors] = useState<IErrors>({});
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
        const formValues = {
            name: nameRef.current?.value,
            age: Number(ageRef.current?.value),
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            confirmPassword: confirmPasswordRef.current?.value,
            gender: genderRef.current?.value,
            conditions: conditionsRef.current?.checked,
            img: imgRef.current?.files ? imgRef.current.files[0] : undefined,
            country: countryRef.current?.value,
        };

        await userSchema
            .validate(formValues, { abortEarly: false })
            .then((data) => {
                console.log('Success validation', data);
                setErrors({});
            })
            .catch((errors) => {
                if (errors instanceof yup.ValidationError) {
                    const newErrors: IErrors = {};
                    errors.inner.forEach((error) => {
                        if (error.path) {
                            newErrors[error.path as keyof IErrors] = error.message;
                        }
                    });
                    setErrors(newErrors);
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
            {errors.name && <p className={styles['validation-error']}>{errors.name}</p>}
            <label htmlFor="ahe">
                Age
                <input ref={ageRef} id="age" name="age" type="text"></input>
                {errors.age && <p className={styles['validation-error']}>{errors.age}</p>}
            </label>
            <label htmlFor="email">
                Email
                <input ref={emailRef} id="email" name="email" type="email"></input>
            </label>
            {errors.email && <p className={styles['validation-error']}>{errors.email}</p>}
            <label htmlFor="password">
                Password
                <input ref={passwordRef} id="password" name="password" type="password"></input>
                <p className={styles['password-complexity']}></p>
                {errors.password && <p className={styles['validation-error']}>{errors.password}</p>}
            </label>
            <label htmlFor="confPassword">
                Confirm password
                <input ref={confirmPasswordRef} id="confPassword" name="confPassword" type="password"></input>
            </label>
            {errors.confirmPassword && <p className={styles['validation-error']}>{errors.confirmPassword}</p>}
            <label htmlFor="gender">
                Gender
                <select ref={genderRef} name="gender" id="gender">
                    <option value="">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Mechanic">Mechanic</option>
                </select>
            </label>
            {errors.gender && <p className={styles['validation-error']}>{errors.gender}</p>}
            <label htmlFor="conditions">
                {' '}
                Accept Terms and Conditions
                <input ref={conditionsRef} id="conditions" name="conditions" type="checkbox" />
            </label>
            {errors.conditions && <p className={styles['validation-error']}>{errors.conditions}</p>}
            <label htmlFor="img">
                {' '}
                Your super picture
                <input ref={imgRef} id="img" name="img" type="file" />
            </label>
            {errors.img && <p className={styles['validation-error']}>{errors.img}</p>}
            <label htmlFor="country">
                Country
                <input ref={countryRef} id="country" name="country" type="text" />
            </label>
            {errors.country && <p className={styles['validation-error']}>{errors.country}</p>}
            <button type="submit" onClick={submitHandler}>
                Submit
            </button>
        </div>
    );
}

export default UncontrolledForm;
