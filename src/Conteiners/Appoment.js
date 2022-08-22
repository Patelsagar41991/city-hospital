import React, { useRef } from 'react'
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import { NavLink, useHistory } from "react-router-dom";

const Appointment = (props) => {
  const history = useHistory();
  let schema = yup.object().shape({
    name: yup.string().required("Please Enter Name"),
    email: yup.string().email("").required("Plaese Enter Email"),
    date: yup.date().required("Please Enter date"),
    
    // message: yup.message().required("Please Enter message Year"),
  })
  const handleData = (values) => {
    let localData = JSON.parse(localStorage.getItem("BookApk"));
    let id = {
      id: Math.floor(Math.random() * 1000),
      ...values
    }

    if (localData === null) {
      localStorage.setItem('BookApk', JSON.stringify([values]))
    } else {
      localData.push(id);
      localStorage.setItem('BookApk', JSON.stringify(localData))
    }
    history.push("./list1");
  }
  function navigateToHome() {
  }
  let initVal = {
    email: '',
    password: '',
    name: '',
    date:'',
    message:'',

  }
  const formik = useFormik({
    initialValues: initVal,
    validationSchema: schema,
    onSubmit: values => {
     handleData(values);
    },
  });

  const { errors, touched, handleSubmit, handleBlur, handleChange, values } = formik
  return (
    <>
      <section id="appointment" className="appointment section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
           <div className='col-6'> 
                                 <NavLink exact to={"/Book-apt"} >Book An Appointment</NavLink> 
                             </div> 
                             <div className='col-6'> 
                                 <NavLink exact to={'./list1'} >list An Appointment</NavLink></div>

          <Formik values={formik}>
            <Form onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input type="text" 
                  value={values.name}
                  name="name" 
                  className="form-control" 
                  id="name" placeholder="Your Name" 
                  onChange={handleChange}
                  onBlur={handleBlur} />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="text" 
                  value={values.email}
                  className="form-control" 
                  name="email" id="email" 
                  placeholder="Your Email" 
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="tel" 
                  value={values.phone}
                      className="form-control" 
                      name="phone" 
                      id="phone" 
                      placeholder="Your Phone" 
                      
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
                <div className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input 
                  value={values.date}
                      type="date"
                      name="date" 
                      className="form-control datepicker" 
                      id="date" 
                      placeholder="Appointment Date" 
                      
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                {errors.date && touched.date ? <p>{errors.date}</p> : null}
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select 
                      name="department" 
                      id="department" 
                      className="form-select" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      >
                {errors.department && touched.department ? <p>{errors.department}</p> : null}
                  <option value>Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select 
                      name="doctor" 
                      id="doctor" 
                      className="form-select" 
                      onChange={handleChange}
                      onBlur={handleBlur}>
                {errors.doctor && touched.doctor ? <p>{errors.doctor}</p> : null}
                  <option value>Select Doctor</option>
                  <option value="Doctor 1">Doctor 1</option>
                  <option value="Doctor 2">Doctor 2</option>
                  <option value="Doctor 3">Doctor 3</option>
                </select>
                <div className="validate" />
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea 
                  className="form-control" 
                  name="message" rows={5} 
                  placeholder="Message (Optional)" 
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                {errors.message && touched.message ? <p>{errors.message}</p> : null}
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
            <div className="text-center">
              <button type="submit" onClick={handleData}>Make an Appointment</button>
              </div>
          </Form>
          </Formik>
        </div>
      </section>
    </>
  )
}

export default Appointment