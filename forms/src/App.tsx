import reactLogo from './assets/react.svg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <>
            <div>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1>React forms.</h1>
            <div className="forms-store">
                <div className="card">
                    <h2>Form 1</h2>
                    <Link to="/uncontrolled-form">Uncontrolled </Link>
                </div>
                <div className="card">
                    <h2>React Hook Form</h2>
                    <Link to="/react-form">React Hook Form </Link>
                </div>
            </div>
        </>
    );
}

export default App;
