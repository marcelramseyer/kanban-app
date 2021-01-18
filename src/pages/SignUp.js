import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { registerInFirebase } from '../firestore/firebaseService';
import { useHistory } from 'react-router-dom';

function SignIn() {
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{ displayName: '', email: '', password: '' }}
        validationSchema={Yup.object().shape({
          displayName: Yup.string().required('Required'),
          email: Yup.string().required('Required').email('Invalid email'),
          password: Yup.string().required('Required').min(6),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await registerInFirebase(values);
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
            <Field name="displayName" placeholder="displayName" />
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
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
