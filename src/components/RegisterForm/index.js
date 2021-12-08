import React, { useState } from "react";
import { FormInput } from "../../elements/FormInput";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./index.module.scss";
import { PrimaryButton } from "../../elements/CustomButton";
import { NavLink, Redirect } from "react-router-dom";
import AuthHero from "../AuthHero";
import { connect } from "react-redux";
import { register } from "../../redux/actions/authActions";
import { toast } from "react-toastify";
import Simple from "../MainNav";

const RegisterForm = (props) => {
  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      admin.firstName &&
      admin.lastName &&
      admin.email &&
      admin.password &&
      admin.mobile
    ) {
      console.log(
        admin.email,
        admin.password,
        admin.firstName,
        admin.lastName,
        admin.mobile
      );
      props.register(
        admin.email,
        admin.password,
        admin.firstName,
        admin.lastName,
        admin.mobile
      );
      // setAdmin({firstName:"", lastName:"", email:"", password:"", mobile: "" })
    } else {
      toast.error("Please, fill all details");
    }
  };

  const { isLoading, isAuthenticated } = props.auth;

  if (isAuthenticated) {
    return <Redirect to="/subscriptions" />;
  }

  return (
    <>
      <Simple />
      <div className={styles._}>
        <div className={styles.container}>
          {/* <div className={styles.admin_logo}>
                    <h2>House9 Hospitality</h2>
                    <small>Admin</small>
                </div> */}
          <div className={styles.overall_wrapper}>
            <div className={styles.form_content}>
              <div className={styles.header}>
                {/* <h2>Register.</h2> */}
                <p>
                  Create your account to start managing your customers and
                  vouchers
                </p>
              </div>
              <div className={styles.form_wrapper}>
                <FormInput
                  type="text"
                  label="First Name"
                  placeholder="First name"
                  name="firstName"
                  value={admin.firstName}
                  handleChange={handleChange}
                  className={styles.form_input}
                  icons={<HiOutlineMail />}
                  required
                />
                <FormInput
                  type="text"
                  label="Last Name"
                  placeholder="Last name"
                  name="lastName"
                  value={admin.lastName}
                  handleChange={handleChange}
                  className={styles.form_input}
                  icons={<HiOutlineMail />}
                  required
                />
                <FormInput
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  name="email"
                  value={admin.email}
                  handleChange={handleChange}
                  className={styles.form_input}
                  icons={<HiOutlineMail />}
                  required
                />
                <FormInput
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  name="password"
                  value={admin.password}
                  handleChange={handleChange}
                  className={styles.form_input}
                  required
                />
                <FormInput
                  type="text"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  name="mobile"
                  value={admin.mobile}
                  handleChange={handleChange}
                  className={styles.form_input}
                  required
                />
                <PrimaryButton
                  className={styles.register_button}
                  handleClick={handleSubmit}
                  isLoading={isLoading}
                >
                  Register
                </PrimaryButton>
                <div className={styles.extras}>
                  <p>
                    Already have an account?{" "}
                    <span>
                      <NavLink to="/admin">Log In</NavLink>
                    </span>
                  </p>
                  <p>
                    <NavLink to="/forgot-password">Forgot Password?</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.register_hero}>
          <AuthHero caption="Register" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { register })(RegisterForm);
