import { useRef, useState } from 'react';
import userSchema from '../../utils/schema';
import * as yup from 'yup';
import { IErrors } from './interfaces';
import CountryForm from '../../components/CountryForm/CountryForm';
import convertToBase64 from '../../utils/convertImg';
import { addForm } from '../../state/slices/formSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import passwordComplexity from '../../utils/passwordComplexity';
import styles from './index.module.css';

function UncontrolledForm() {
    const [errors, setErrors] = useState<IErrors>({});
    const [passwordStrength, setPasswordStrength] = useState<string>('');
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const conditionsRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
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

        let res: string | unknown | null = null;
        if (formValues.img) {
            res = await convertToBase64(formValues.img);
        }

        await userSchema
            .validate(formValues, { abortEarly: false })
            .then(() => {
                const sendingForm = { ...formValues, img: res };
                dispatch(addForm(sendingForm));
                setErrors({});
                navigate('/');
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
    };

    const handlePasswordInput = () => {
        const currentPassword = passwordRef.current?.value as string;
        const complexity = passwordComplexity(currentPassword);
        setPasswordStrength(complexity);
    };

    return (
        <div>
            <h1>Uncontrolled Form</h1>
            <form className={styles['uncontrolled-form']} onSubmit={submitHandler}>
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
                    <input ref={passwordRef} id="password" name="password" type="password" onChange={handlePasswordInput}></input>
                    <div className={styles['password-complexity']}>
                        <p className={styles['password-complexity-text']}>{passwordStrength}</p>
                        <div
                            className={`${styles['password-complexity-bar']} ${passwordStrength === 'Weak' ? styles.weak : passwordStrength === 'Good' ? styles.good : passwordStrength === 'Strong' ? styles.strong : passwordStrength === 'Super strong' ? styles['super-strong'] : styles.none}`}
                        ></div>
                    </div>
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
                    <CountryForm reference={countryRef} />
                </label>
                {errors.country && <p className={styles['validation-error']}>{errors.country}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UncontrolledForm;
