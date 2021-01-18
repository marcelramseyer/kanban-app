import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { signInWithEmail } from '../firestore/firebaseService';
import { useHistory } from 'react-router-dom';
import SocialLogin from '../components/SocialLogin';

function SignIn() {
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Required').email('Invalid email'),
          password: Yup.string().required('Required').min(6),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await signInWithEmail(values);
            history.push('/');
            setSubmitting(false);
          } catch (error) {
            setErrors({ auth: error.message });
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errors, touched }) => (
          <Form className="">
            <Field name="email" placeholder="Email Address" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" placeholder="Password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            {errors.auth && (
              <div style={{ marginBottom: 10 }}>{errors.auth}</div>
            )}
            <button
              // loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              className="disabled:opacity-50"
              type="submit"
            >
              Log In
            </button>
            <SocialLogin />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
