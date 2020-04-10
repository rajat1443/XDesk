import React from 'react';
import {isEmpty,toString} from 'lodash';        
import xebia_logo from './xebia_logo.png';
import {Link} from 'react-router-dom';

const LoginView = (payload)=>{
    
   const {username, password, onInputChange, onFormSubmit, isValid} = payload;

    const isDisabledButton = (isEmpty(toString(username)) || isEmpty(toString(password)));
    
    return( <div className="background-container">
    <div className="container">
        <div className="form-wrapper">
            <div className="container-brand-wrapper">
                <img src={xebia_logo} alt="nothing going on here" />
            </div>
            <div className="vertical-line"></div>
                <form onSubmit={onFormSubmit}>

                    <div className="heading-wrapper">
                        <span id="sign-in-heading">
                            Sign in
                        </span>

                        <span id="text-wrapper">
                            to access HDesk
                        </span>
                    </div>               
                    
                {isValid ? null : <div className="login-error"><p>Please Enter the Correct Credentials</p></div>}
                    <div className="input-wrapper">
                        <div className="email-input-wrapper">            
                            <input 
                            type="text" 
                            placeholder="Username"
                            id="username"
                            onChange = { (e) => 
                                {
                                    onInputChange(
                                            {username: e.currentTarget.value}
                                        )
                                }
                            }
                            />
                        </div>    

                        <div className="password-input-wrapper">
                            <input
                            type="text"
                            id="password"
                            placeholder="Password"
                            onChange={
                                (e)=> {
                                    onInputChange(
                                        {password: e.currentTarget.value}
                                    )
                                }
                            }
                            />
                        </div>
                        <div className="button-wrapper">
                         {/* <Link to='/TicketList'>   */}
                            <input type="submit" id= "login-form-submit" value="Submit" disabled={isDisabledButton} />
                         {/* </Link>  */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}
export default LoginView;