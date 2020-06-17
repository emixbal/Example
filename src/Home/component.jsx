import React from 'react'
import './style.css'
import Logo from '../resources/logo.svg'
import { Input, InputGroup, Icon } from 'rsuite';

function App({
    name, 
    change_name, 
    list, 
    add_list,
    delete_list,
}) {
    return (
        <div className="App">
            <div className="App-container">
                <img src={Logo} className="App-logo"/>
                
                {/* <div className="App-body">
                    <div className="row">
                        <div className="col-12">
                            <InputGroup>
                                <Input onChange={change_name} value={name}/>
                                <InputGroup.Button onClick={add_list}>
                                    <Icon icon="plus" className="text-dark" />
                                </InputGroup.Button>
                            </InputGroup>
                        </div>
                    </div>
                    <div className="row">
                        {list.map((value, index) => (
                            <div className="col-12" key={index}>
                                {value}
                                <Icon icon="trash" className="pointer pl-2 text-danger" onClick={delete_list.bind(this, index)}/>
                            </div>
                        ))}
                    </div>
                </div> */}

            </div>
        </div>
    );
}

export default App;
