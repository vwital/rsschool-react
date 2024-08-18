import userSchema from '../../utils/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import CountryForm from '../../components/CountryForm/CountryForm';
import convertToBase64 from '../../utils/convertImg';
import { addForm } from '../../state/slices/formSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import passwordComplexity from '../../utils/passwordComplexity';
import { InferType } from 'yup';
import { IFormState } from '../../utils/interfaces';
import styles from './index.module.css';

type UserSchema = InferType<typeof userSchema>;

function ReactHookForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [passwordStrength, setPasswordStrength] = useState<string>('');

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors, isValid, isSubmitting },
        trigger,
    } = useForm<UserSchema>({
        resolver: yupResolver(userSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            name: '',
            age: 0,
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            conditions: false,
            img: undefined,
            country: '',
        },
    });

    const password = watch('password');

    useEffect(() => {
        if (password) {
            setPasswordStrength(passwordComplexity(password));
        }
    }, [password]);

    const onSubmit = async (data: UserSchema) => {
        let imgBase64;
        if (data.img) {
            const dataImg = data.img as File;
            imgBase64 = await convertToBase64(dataImg);
        }
        const sendingForm: IFormState = { ...data, img: imgBase64 };
        dispatch(addForm(sendingForm));
        navigate('/');
    };

    return (
        <div className={styles['react-form']}>
            <h1>React Hook Form</h1>
            <form className={styles['react-form']} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    Name
                    <input {...register('name')} id="name" type="text" placeholder="First uppercased letter" required></input>
                </label>
                {errors.name && <p className={styles['validation-error']}>{errors.name.message}</p>}
                <label htmlFor="ahe">
                    Age
                    <input {...register('age')} id="age" type="text" defaultValue=""></input>
                    {errors.age && <p className={styles['validation-error']}>{errors.age.message}</p>}
                </label>
                <label htmlFor="email">
                    Email
                    <input {...register('email')} id="email" type="email"></input>
                </label>
                {errors.email && <p className={styles['validation-error']}>{errors.email.message}</p>}
                <label htmlFor="password">
                    Password
                    <input {...register('password')} id="password" type="password"></input>
                    <div className={styles['password-complexity']}>
                        <p className={styles['password-complexity-text']}>{password ? passwordComplexity(password) : ''}</p>
                        <div
                            className={`${styles['password-complexity-bar']} ${passwordStrength === 'Weak' ? styles.weak : passwordStrength === 'Good' ? styles.good : passwordStrength === 'Strong' ? styles.strong : passwordStrength === 'Super strong' ? styles['super-strong'] : styles.none}`}
                        ></div>
                    </div>
                    {errors.password && <p className={styles['validation-error']}>{errors.password.message}</p>}
                </label>
                <label htmlFor="confPassword">
                    Confirm password
                    <input {...register('confirmPassword')} id="confPassword" type="password"></input>
                </label>
                {errors.confirmPassword && <p className={styles['validation-error']}>{errors.confirmPassword.message}</p>}
                <label htmlFor="gender">
                    Gender
                    <select {...register('gender')} id="gender">
                        <option value="">Select...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Mechanic">Mechanic</option>
                    </select>
                </label>
                {errors.gender && <p className={styles['validation-error']}>{errors.gender.message}</p>}
                <label htmlFor="conditions">
                    {' '}
                    Accept Terms and Conditions
                    <input {...register('conditions')} id="conditions" type="checkbox" />
                </label>
                {errors.conditions && <p className={styles['validation-error']}>{errors.conditions.message}</p>}
                <label htmlFor="image">
                    {' '}
                    Your super picture
                    <Controller
                        name="img"
                        control={control}
                        defaultValue={undefined}
                        render={({ field }) => (
                            <input
                                {...field}
                                id="image"
                                type="file"
                                accept="image/jpeg, image/png"
                                onChange={(e) => {
                                    field.onChange(e.target.files?.[0] || null);
                                    trigger('img');
                                }}
                                value={undefined}
                            />
                        )}
                    />
                </label>
                {errors.img && <p className={styles['validation-error']}>{errors.img.message}</p>}
                <label htmlFor="country">
                    Country
                    <Controller name="country" control={control} render={({ field }) => <CountryForm reference={undefined} {...field} />} />
                </label>
                {errors.country && <p className={styles['validation-error']}>{errors.country.message}</p>}
                <button type="submit" disabled={!isValid || isSubmitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ReactHookForm;
