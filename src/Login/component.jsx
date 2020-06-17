import React, { useState } from 'react'
// import './style.css'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import {
    Sidenav,
    Nav,
    Dropdown,
    Navbar,
    Sidebar,
    Icon,
    Input,
    Button,
} from 'rsuite'

function App({open, toogle_open}) {
    const [message, setMessage] = useState("")
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = (data) => { 
        console.log("data", data)

        // onLogin(data).then((value) => { 
        //     setMessage(value)
        // })
    }

    return (
        <div className="h-100vh w-100vw">
            <div className="centering shift h-100">
                <div>
                    <h4>Masuk</h4>
                    <div>Silakan masuk untuk menikmati layanan yang tersedia di sembako</div>
                    <div>
                        <Input placeholder="Alamat email"/>
                    </div>
                    <div>
                        <Input placeholder="Kata sandi" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            Lupa kata sandi?
                        </div>
                        <div>
                            <Button>Masuk <i className="fas fa-arrow-right"></i></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
