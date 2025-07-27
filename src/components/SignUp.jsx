import { useState } from "react"
import "./SignUp.css";

function SignUp({setUser}) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [submit, setSubmit] = useState(false);

    const changeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(form);
        setSubmit(true);
        console.log("Form submitted:", form);
    };
    return (
        <>
            <div className="sign-up">
                <div className="login-container">
                    <div className="header">
                        <h1>Sign Up</h1>
                    </div>

                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name :</label>
                            <input id="name" type="text" name="name" onChange={changeInput} required />
                        </div>


                        <div className="form-group">
                            <label htmlFor="email"> Email :</label>
                            <input id="email" type="email" name="email" onChange={changeInput} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password"> Password :</label>
                            <input id="password" type="password" name="password" onChange={changeInput} required />
                        </div>

                        <div className="submit-button">
                            <button type="submit">Submit</button>
                            {submit && (
                                <div style={{ marginTop: 16, color: 'green' }}>Sign up successful!</div>
                            )}
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignUp