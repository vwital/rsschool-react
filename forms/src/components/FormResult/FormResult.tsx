import React, { forwardRef } from 'react';
import { IFormState } from '../../utils/interfaces';
import styles from './index.module.css';

interface FormResultProps {
    form: IFormState;
}

const FormResult = forwardRef<HTMLTableRowElement, FormResultProps>(({ form }, ref) => {
    return (
        <tr ref={ref} className="form-result">
            <td>{form.name}</td>
            <td>{form.age}</td>
            <td>{form.email}</td>
            <td>{form.password}</td>
            <td>{form.gender}</td>
            <td>{form.conditions ? 'True' : 'False'}</td>
            <td>
                <img src={form.img as string} alt={`${form.name}-img`} className={styles['form-img']} />
            </td>
            <td>{form.country}</td>
        </tr>
    );
});

export default FormResult;
