import axios from "axios";
import { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080", {
                firstName,
                lastName,
                email,
            });
            alert("Form submitted successfully");
        } catch (error) {
            console.error(error);
            alert("Error submitting form");
        }
        setFirstName("");
        setLastName("");
        setEmail("");
    };

    return (
        <form onSubmit={submitForm} className="container">
            <div className="form">
                <h2 className="heading-h2">
                    Stay Updated with Our Latest
                    <br /> Jokes.
                </h2>
                <p className="form-paragraph">
                    Subscribe to our newsletter and never miss a joke! Get the
                    funniest programming jokes delivered straight to your inbox.
                </p>
                <div className="inputs">
                    <label htmlFor="first-name">
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="First Name"
                        />
                    </label>
                    <label htmlFor="last-name">
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Last Name"
                        />
                    </label>
                    <label htmlFor="email">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="emaile"
                            id="email"
                            placeholder="Email"
                        />
                    </label>
                    <button type="submit">Stay Updated</button>
                </div>
            </div>
        </form>
    );
};

export default Form;
