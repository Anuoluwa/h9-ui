import React, { useState } from 'react';
import { FormInput } from '../../elements/FormInput';
import { HiOutlineMail } from 'react-icons/hi'
import styles from './index.module.scss';
import { PrimaryButton } from '../../elements/CustomButton';
import { NavLink, Redirect } from 'react-router-dom';
import AuthHero from '../AuthHero';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import { toast } from 'react-toastify';

const LoginForm = (props) => {
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

  
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email && password){
            props.login(email, password)
        }else{
            toast.error("Enter both email and password")
        }
    }


    const {isLoading, isAuthenticated} = props.auth

    if(isAuthenticated){
        return <Redirect to ="/subscriptions" />
    }

    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.supplier_logo}>
                    {/* <h2>House9 Hospitality</h2> */}
                    {/* <small>Supplier</small> */}
                </div>
                <div className={styles.overall_wrapper}>
                    <div className={styles.form_content}>
                        <div className={styles.header}>
                            <p>Login to your account with your registered email and password</p>
                        </div>
                        <div className={styles.form_wrapper}>
                            <FormInput 
                                type="text"
                                label="Email"
                                placeholder="Enter your email"
                                name="email"
                                value={email}
                                handleChange={(e) => setEmail(e.target.value)}
                                className={styles.form_input}
                                icons={<HiOutlineMail />}
                                required
                            />
                            <FormInput 
                                type="password"
                                label="Password"
                                placeholder="Enter your password"
                                name="password"
                                value={password}
                                handleChange={(e) => setPassword(e.target.value)}
                                className={styles.form_input}
                                required
                            /> 
                            <PrimaryButton 
                                className={styles.login_button} 
                                handleClick={handleSubmit}
                                isLoading={isLoading}>
                                    Log In
                            </PrimaryButton>
                            <div className={styles.extras}>
                                <p>Don't have an account? <span><NavLink to="/house9/h/register">Sign Up</NavLink></span></p>
                                <p><NavLink to="/forgot-password">Forgot Password?</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.login_hero}>
                <AuthHero caption="Manage"/>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    auth:state.auth
})


export default connect( mapStateToProps, {login}) (LoginForm)