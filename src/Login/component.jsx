import React, { useState } from 'react'
// import './style.css'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom';
import sembakoo from '../resources/sembakoo.svg'
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
                <div className="mt-n5">
                    <div className="mb-4">
                        <h4>Masuk</h4>
                        <div>Silakan masuk untuk menikmati layanan yang tersedia di sembako</div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col">
                            <Input placeholder="Alamat email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <Input placeholder="Kata sandi"/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            Lupa kata sandi?
                        </div>
                        <div>
                            <Button className="bg-warning text-dark">Masuk <i className="fas fa-arrow-right"></i></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                width: '100%',
                zIndex: '999999',
                bottom: '0',
                textAlign: 'center',
                position: 'fixed',
                height: '3rem',
            }}>
                <img src={sembakoo} className="h-100"/>
            </div>
        </div>
    );
}

export default App;
