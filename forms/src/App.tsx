import reactLogo from './assets/react.svg';
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
                    <a href="/uncontrolled-form">Uncontrolled </a>
                </div>
                <div className="card">
                    <h2>React Hook Form</h2>
                    <a href="/react-form">React Hook Form </a>
                </div>
            </div>
        </>
    );
}

export default App;
