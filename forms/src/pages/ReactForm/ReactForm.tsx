import styles from './index.module.css';

function ReactForm() {
    return (
        <div className={styles['react-form']}>
            <h1>React Form</h1>
            <label>
                Name
                <input type="text"></input>
            </label>
            <label>
                Age
                <input type="text"></input>
            </label>
            <label>
                Email
                <input type="email"></input>
            </label>
            <label>
                Password
                <input type="password"></input>
            </label>
            <label>
                Confirm password
                <input type="password"></input>
            </label>
            <label>
                Gender
                <input type="radio" id="m" name="gender" value="m"></input>
                <label htmlFor="m">Man</label>
                <input type="radio" id="w" name="gender" value="w"></input>
                <label htmlFor="w">Woman</label>
                <input type="radio" id="mechanic" name="gender" value="mechanic"></input>
                <label htmlFor="mechanic">Mechanic</label>
            </label>
            <label>
                {' '}
                Conditions agreement
                <input type="checkbox" />
            </label>
            <label htmlFor="">
                {' '}
                Your super picture
                <input type="file" />
            </label>
            <label>
                Country
                <input type="text" />
            </label>
            <button>Submit</button>
        </div>
    );
}

export default ReactForm;
