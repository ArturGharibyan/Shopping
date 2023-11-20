import React from 'react';
import { useState, useEffect, ChangeEvent } from "react"
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import { Link, useNavigate } from 'react-router-dom';
import "./signin.css"


const SignIn = () => {
    const { user } = useTypedSelector(state => state.user)
    const [config, setConfig] = useState<any>({ email: "", password: "" })
    const navigate = useNavigate()
    const [passworddirty, setpassworddirty] = useState<boolean>(false)
    const [passworderror, setPassworderror] = useState<string>("Fill the password please!")
    const [emailDirty, setEmaildirty] = useState<boolean>(false)
    const [emailerror, setEmailerror] = useState<string>("please enter an email address")
    const [valid, setValid] = useState<boolean>(false)
    let current = user.find((e: any) => e.email == config.email && e.password == config.password)

    console.log("user=>", user)


    
    



    useEffect(() => {

        if (emailerror || passworderror) {
            setValid(false)
        }
        if (config.email && config.password) {
            setValid(true)
        } else {
            setValid(false)
        }

        localStorage.setItem("useridData",JSON.stringify(current?.id))


    }, [passworderror, emailerror, config.email, config.password])


    const blurhandler = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "email":
                setEmaildirty(true)
                break;
            case "password":
                setpassworddirty(true)
                break;
        }
    }

    const emailvalidate = (e: ChangeEvent<HTMLInputElement>) => {
        setConfig({ ...config, email: e.target.value })
        let filter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!filter.test(e.target.value) || e.target.value.length > 250) {
            setEmailerror("this email incorect")

        } else {
            setEmailerror("")
        }
    }
    const passwordvalide = (e: ChangeEvent<HTMLInputElement>) => {
        setConfig({ ...config, password: e.target.value })
        const caseRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
        if (!caseRegex.test((e.target.value))) {
            setPassworderror("incorect password")
        } else {
            setPassworderror("")
        }
    }


    let currentuser = user.find((e: any) => e.email == config.email && e.password == config.password)
    const toNavigateHome = () => {
        if (currentuser) {
            navigate("/" + currentuser?.id)
        } else {
            alert("The given email address or password already exists")
        }
    }



    return (
        <div className="signup">
            <div className="signupChild">
                <div className="signupinputs">
                    <div>
                        <label className="form-labels">Email</label>
                    </div>
                    <input placeholder="email" name="email" onChange={(e) => emailvalidate(e)} onBlur={e => blurhandler(e)} value={config.email}></input>
                    {(emailDirty && emailerror) && <span style={{
                        color: "red",
                        fontSize: "12px",
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginLeft: "13px"
                    }}>{emailerror}</span>}


                </div>
                <div className="signupinputs">
                    <div>
                        <label className="form-labels">Password</label>
                    </div>
                    <input placeholder="password" name="password" onChange={(e) => passwordvalide(e)} onBlur={e => blurhandler(e)} value={config.password}></input>
                    {(passworddirty && passworderror) && <span style={{
                        color: "red",
                        fontSize: "12px",
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginLeft: "13px"
                    }}>{passworderror}</span>}

                </div>
                <div className="button2">
                    <button style={!valid ? {background:"rgba(2, 22, 48, 0.377)"}:{background:"black"}} onClick={toNavigateHome}>Signin</button>
                </div>
                <div>
            
              <>
                Don't have an account?{" "}
                <Link className='SignInSinguplink' to={"/signup"}>SignUp</Link>
              </>
            </div>
            </div>
        </div>

    )
};

export default SignIn;