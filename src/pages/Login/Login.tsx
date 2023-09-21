import { Formik, Form, Field,ErrorMessage } from "formik"
import {FC, useState} from "react"
import * as Yup from 'yup'
import styles from "./Login.module.scss"
import {auth} from "../../config/firebaseConfig"
import {signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from "react-router-dom"

type State = {
    email: string;
    password: string;
};

const initialValues: State = {
    email: "",
    password: ""
}
const validationSchema = Yup.object({
    email:Yup.string().email("invalid email").required("required"),
    password: Yup.string().required("required"),
});
const Login:FC = () => {
    const [errors, setErrors] = useState<boolean>(false)
    const navigate = useNavigate()
    const onSubmit = (values: State, submittingObject: any) => {
        submittingObject.resetForm()
        login(values)
    }
    async function login(values: State ){
        console.log(values)
        try{
            await signInWithEmailAndPassword(auth, values!.email, values!.password)
            navigate("/")
            console.log(values)
        }catch(error) {
            console.error('Error:', error)
            console.log(error)
            setErrors(prev => !prev)
        }
    }
  return (
    <section className={styles.container}>
        <div className={styles.form__card}>
            <h1>Login</h1>
            <p className={styles.header__text}>Enter your correct details!</p>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(formik)=>{
                    return(
                        <Form>
                            <div className={styles.input}>
                                {/* <label htmlFor="userName">UserName</label> */}
                                <Field className={styles.field} type="email" name='email' placeholder="Email"/>
                                <ErrorMessage name="email" component="div"/>
                            </div>
                            <div className={styles.input}>
                                {/* <label htmlFor="password">Password</label> */}
                                <Field className={styles.field} type="password" name='password' placeholder="Password"/>
                                <ErrorMessage name="password" component="div"/>
                            </div>
                            {
                                errors ? <p>invalid credentials</p> : ''
                            }
                            <button className={styles.btn} type="submit" disabled={!formik.isValid || formik.isSubmitting}>Login</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    </section>
  )
}

export default Login