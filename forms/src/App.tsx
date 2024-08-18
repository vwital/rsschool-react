import reactLogo from './assets/react.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectForms } from './state/slices/formSlice';
import FormResult from './components/FormResult/FormResult';
import { IFormState } from './utils/interfaces';
import getRandomKey from './utils/getRandomKey';
import './App.css';

function App() {
    const [results, setResults] = useState<JSX.Element[]>([]);
    const formSelector = useSelector(selectForms);
    const lastResultRef = useRef<HTMLTableRowElement>(null);
    useEffect(() => {
        if (formSelector) {
            const length = (formSelector as Array<IFormState>).length;
            const forms = formSelector.map((form: IFormState, index) => (
                <FormResult key={`${getRandomKey()}${form.name}`} form={form} ref={index === length - 1 ? lastResultRef : null} />
            ));

            setResults(forms);
        }
    }, [formSelector]);

    useEffect(() => {
        if (results.length > 0 && lastResultRef.current) {
            lastResultRef.current.classList.add('red-bg');
            const timer = setTimeout(() => {
                lastResultRef.current?.classList.remove('red-bg');
            }, 7000);

            return () => clearTimeout(timer);
        }
    }, [results]);

    return (
        <>
            <div>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1>React forms.</h1>
            <div className="forms-store">
                <div className="card">
                    <h2>Uncontrolled form</h2>
                    <Link to="/uncontrolled-form">Uncontrolled </Link>
                </div>
                <div className="card">
                    <h2>React Hook Form</h2>
                    <Link to="/react-hook-form">React Hook Form </Link>
                </div>
            </div>
            <div className="form-results">
                <h2>Results</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>Conditions</th>
                            <th>Image</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>{results}</tbody>
                </table>
            </div>
        </>
    );
}

export default App;
