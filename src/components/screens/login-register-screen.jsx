import React, { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import { auth } from '../services/firebase';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Screen = () => {
    const [showInput, setShowInput] = useState(true);
    const [check, setCheck] = useState(false)
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");

    let navigate = useNavigate();
    const routeChange = (bool) => {
        if (bool === true) {
            let path = "/app";
            navigate(path);
        };
    };

    const showWarning = () => {
        if (check && true) {
            return (
                <>
                    <p style={{ color: "red", margin: "1vw", marginRight: "13vw", marginTop: "-1vw" }}>*Password does not match</p>
                </>
            )
        }
    }

    const HandleSubmit = (event) => {
        event.preventDefault();
        if (email === "" && password === "") {
            setCheck(true);
            routeChange(false);
        }
        else if (showInput === true) {
            if (password !== confirmPassword) {
                setCheck(true);
            }
            else if (password === confirmPassword && email && password) {
                if (password.length < 6) {
                    alert("password must be of atleast 6 characters");
                    routeChange(false);
                } else {
                    const auth = getAuth();
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                        });
                    routeChange(true);
                };
            };
        };
    };

    const LoginSubmit = (event) => {
        event.preventDefault();
        if (email === "" && password === "") {
            setCheck(true);
            routeChange(false);
        } else if (showInput === false) {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                        navigate("/")
                    });
                console.log("tapped");
                routeChange(true);
            };
    };

    function HandleClick() {
        setShowInput(false);
        SetEmail("");
        SetPassword("");
        SetConfirmPassword("");
    };

    return (
        <div className="screen">
            <h1 className="h_1"> <LightModeIcon /> Planner</h1>
            <div className="form">
                <h1 className="form_h1">{showInput ? "Register" : "Login"}</h1>
                <form autoComplete="off">
                    <input type="email" value={email} className="form_input" name="email" placeholder="Enter your email" onChange={(e) => SetEmail(e.target.value)} />
                    {check ? <p style={{ color: "red", margin: "1vw", marginRight: "22vw", marginTop: "-1vw" }}>*Enter Email</p> : null}
                    <input type="password" value={password} className="form_input" name="password" placeholder="Password" onChange={(e) => SetPassword(e.target.value)} />
                    {check ? <p style={{ color: "red", margin: "1vw", marginRight: "20vw", marginTop: "-1vw" }}>*Enter password</p> : null}
                    {showInput ? <input type="password" value={confirmPassword} className="form_input" name="Confirm password" placeholder="Confirm password" onChange={(e) => SetConfirmPassword(e.target.value)} /> : null}
                    {showInput ? showWarning() : null}
                    {showInput ? <button type="submit" className="form_button" onClick={HandleSubmit} >Register</button> : <button type="submit" className="form_button" onClick={LoginSubmit} >Login</button>}
                </form>
                {showInput ? <p className="form_p">Already have a account? <span onClick={HandleClick} style={{ cursor: "pointer", textDecoration: "underline" }} >  Login</span></p>
                    : <p className="form_p">Don't have a account? <span onClick={setShowInput} style={{ cursor: "pointer", textDecoration: "underline" }} >Create account</span></p>
                }

            </div>
        </div>
    )
}

export default Screen;
