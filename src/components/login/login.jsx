import React from 'react'
import { useHistory } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from '../../api/api'
import './login.scss'

const Login = () => {

    const history = useHistory()

    const loginSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),

        firstName: Yup.string()
            .required("Firstname is required"),

        lastName: Yup.string()
            .required("Lastname is required"),

        password: Yup.string()
            .required("Password is required")
    });

    const initialValues = {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => {
                login({email: values.email, password: values.password })
                    .then(() => {
                        history.push('/home')
                    })
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                    <div className="container">
                        <h1>Sign in</h1>
                        <Form>
                            <div className="form-row">
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={errors.email && touched.email ?
                                        "input-error" : null}
                                />
                                <ErrorMessage name="email" component="span" className="error" />
                            </div>

                            <div className="form-row">
                                <label htmlFor="firstName">First Name</label>
                                <Field
                                    type="firstName"
                                    name="firstName"
                                    id="firstName"
                                    className={errors.firstName && touched.firstName ?
                                        "input-error" : null}
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component="span"
                                    className="error"
                                />
                            </div>

                            <div className="form-row">
                                <label htmlFor="lastName">Last Name</label>
                                <Field
                                    type="lastName"
                                    name="lastName"
                                    id="lastName"
                                    className={errors.lastName && touched.lastName ?
                                        "input-error" : null}
                                />
                                <ErrorMessage
                                    name="lastName"
                                    component="span"
                                    className="error"
                                />
                            </div>

                            <div className="form-row">
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={errors.password && touched.password ?
                                        "input-error" : null}
                                />
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                    className="error"
                                />
                            </div>

                            <button
                                type="submit"
                                className={!(dirty && isValid) ? "disabled-btn" : ""}
                                disabled={!(dirty && isValid)}
                            >
                                Sign In
                  </button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
}

export default Login;