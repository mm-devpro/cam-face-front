import React from "react";
import {Link, useNavigate} from "react-router-dom"
import {login} from '../../store/reducers/auth';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {Button} from 'reactstrap';

const Home = () => {

  const lockers = [
    "1er locker", "2e locker", "3e locker"
  ]
  let navigate = useNavigate()

  return (
    <>
      <div className="homepage">
        <h1>It's the homepage</h1>
          <div>
            <Link to="/admin/workers">Admin site</Link>
          </div>
          <div>
            <Formik
              initialValues={{locker: ''}}
              onSubmit={(values) => navigate(`/stream/6`)}
            >
              {
                ({errors, touched, isSubmitting}) => (
                  <Form className="camera-form">
                    <Field as="select" name="locker">
                      {
                        Object.entries(lockers).map((k,l) => (
                          <option value={lockers[l]} key={k}>{lockers[l]}</option>
                        ))
                      }
                    </Field>
                    <ErrorMessage name="locker"/>
                    <Button color="primary" type="submit" disabled={isSubmitting}>Camera correspondante</Button>
                  </Form>
                )
              }
            </Formik>
          </div>

      </div>
    </>
  )
}

export default Home
