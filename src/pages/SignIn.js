import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { signInWithEmail } from '../firestore/firebaseService';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInUser } from '../store/actions/authActions';

function SignIn() {
  const dispatch = useDispatch();
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
            await dispatch(signInUser(values));
            history.push('/');
          } catch (error) {
            setErrors({ auth: 'Problem with username or password' });
          }
          // try {
          //   await signInWithEmail(values);
          //   history.push('/');
          //   setSubmitting(false);
          // } catch (error) {
          //   setErrors({ auth: 'Problem with username or password' });
          //   setSubmitting(false);
          // }
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
            {/* <div className="rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"> 
            </div> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
