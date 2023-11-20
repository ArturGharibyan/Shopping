import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, ChangeEvent, FC } from "react"
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import { loginUser } from "../../ReduxTypeScript/store/action-creators/productcreator";
import "./signup.css"

const SignUp = () => {

    const { user } = useTypedSelector(state => state.user)
    const dispatch = useDispatch()
    const [users, setUser] = useState<any>({ id: Date.now(), name: "", surname: "", email: "", password: "", userIsloading: true })
    const navigate = useNavigate()
    const [nameDirty, setNameDirty] = useState<boolean>(false)
    const [nameerror, setNameerror] = useState<string>("minimum 3 characters")
    const [surnameDirty, setSurnamedirty] = useState<boolean>(false)
    const [surnameerror, setSurnameerror] = useState<string>("minimum 3 characters")
    const [passworddirty, setpassworddirty] = useState<boolean>(false)
    const [passworderror, setPassworderror] = useState<string>("Fill the password please!")
    const [emailDirty, setEmaildirty] = useState<boolean>(false)
    const [emailerror, setEmailerror] = useState<string>("please enter an email address")
    const [valid, setValid] = useState<boolean>(false)

    console.log("user=>", user)

    const userinfo = user.find((user: any) => users.password == user.password && users.password==user.password)
    const navigation =()=>{
        if(userinfo){
            alert("try a different password")
        }
        else{
            navigate("/signin")
        }
    }

    useEffect(() => {

        if (nameerror || surnameerror || emailerror || passworderror) {
            setValid(false)
        }
        if (users.name && users.surname && users.email && users.password) {
            setValid(true)
        } else {
            setValid(false)
        }


    }, [nameerror, surnameerror, emailerror, users.name, users.surname, users.email, users.password])


    const blurhandler = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(true)
                break;
            case "surname":
                setSurnamedirty(true)
                break;
            case "email":
                setEmaildirty(true)
                break;
            case "password":
                setpassworddirty(true)
                break;
        }
    }
    const namevalide = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...users, name: e.target.value })
        if (e.target.value.length < 3) {
            setNameerror("minimum 3 characters")
        } else {
            setNameerror("")
        }
    }
    const surnamenamevalide = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...users, surname: e.target.value })
        if (e.target.value.length < 3) {
            setSurnameerror("minimum 3 characters")
        } else {
            setSurnameerror("")
        }
    }


    const emailvalidate = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...users, email: e.target.value })
        let filter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!e.target.value.match(filter)) {

            setEmailerror("this email incorect")
        } else {
            setEmailerror("")
        }
    }


    const passwordvalide = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...users, password: e.target.value })
        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*)(?=.*\W)/
        if (!(e.target.value.match(passwordRegex))) {
            setPassworderror("must contain symbols and numbers")
        }
        else {
            setPassworderror("")
        }
    }




    return (
        <div className="signin">
            <div className="signinchild">

                <div >
                    <label className="form-labels">Name</label>
                    <div className="inputs">
                        <input placeholder="name" name="name" onChange={(e) => namevalide(e)} onBlur={e => blurhandler(e)} value={users.name}  ></input>
                        {(nameDirty && nameerror) && <span style={{
                            color: "red",
                            fontSize: "12px",
                            position: "absolute",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            marginLeft: "13px"
                        }} >{nameerror}</span>}
                    </div>

                </div>
                <div>
                    <label className="form-labels">Surname</label>
                    <div className="inputs">
                        <input placeholder="surname" name="surname" onChange={(e) => surnamenamevalide(e)} onBlur={e => blurhandler(e)} value={users.surname}  ></input>
                        {(surnameDirty && surnameerror) && <span style={{
                            color: "red",
                            fontSize: "12px",
                            position: "absolute",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            marginLeft: "13px",
                        }}>{surnameerror}</span>}

                    </div>
                </div>
                <div>
                    <label className="form-labels">Email</label>
                    <div className="inputs">
                        <input placeholder="email" name="email" onChange={(e) => emailvalidate(e)} onBlur={e => blurhandler(e)} value={users.email}  ></input>
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
                </div>
                <div>
                    <label className="form-labels">Passwors</label>
                    <div className="inputs">
                        <input type="text" name="password" placeholder="password" onChange={(e) => passwordvalide(e)} onBlur={e => blurhandler(e)} value={users.password}  ></input>
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
                </div>
                <div className="button"><button style={!valid ? {background:"rgba(2, 22, 48, 0.377)"}:{background:"black"}} disabled={!valid} onClick={(e) => {
                    dispatch(loginUser(users))
                    setUser({ name: "", surname: "", email: "", password: "", })
                   navigation()
                }}
                >SignUp</button></div>
                <>
                    Have an account? <Link className='SignInSinguplink' to={"/signin"}  >Log in</Link>
                </>
            </div>
        </div>
    )
};

export default SignUp;


