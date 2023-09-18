// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// const Basic = () => {
//   const [test, setTest] = useState({
//     email: '',
//     password: ''
//   });

 

//   return (
//     <div className='d-flex flex-column justify-content-center h-100 align-items-center'>
//       <h1>Any place in your app!</h1>
//       <Formik
//         initialValues={test}
//         validate={(values) => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = 'Required';
//           } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//             errors.email = 'Invalid email address';
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             console.log(values);
//             const localData = localStorage.getItem('demo')
//             const allData = localData ? JSON.parse(localData) : []
//             allData.push(values)
//             // const newDATA = JSON.stringify(values, null, 2);
//             localStorage.setItem('demo', JSON.stringify(allData));
//             // setTest(values); // Update the test state with the new form values
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form className='d-flex flex-column gap-3 m-4'>
//             <Field type='email' name='email' placeholder='Enter your email' />
//             <ErrorMessage name='email' component='div' />
//             <Field type='password' name='password' placeholder='Enter your password' />
//             <ErrorMessage name='password' component='div' />
//             <button type='submit' disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Basic;
