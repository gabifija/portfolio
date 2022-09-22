import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const ValidationSchema = Yup.object().shape({
   name: Yup.string()
     .min(2)
     .max(50)
     .required('required'),
   message: Yup.string()
     .min(2)
     .max(1000)
     .required('required'),
   email: Yup.string()
     .email('invalid email')
     .required('required'),
 });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: values => {
      const endpoint = 'https://getform.io/f/eefa2a49-7171-4ef1-bf6b-728c443e13cf';
      const formData = new FormData();

      formData.append(
          'name',
          values.name
      )
      formData.append(
          'email',
          values.email
      )
      formData.append(
          'message',
          values.message
      )
      return fetch(endpoint, {
        method: 'POST',
        body: formData
      })
      .then(() => setShowMessage(true))
      .catch(() => setShowMessage(false))
    },
  });

  return (
    <div name='contact' className='w-full h-screen bg-white text-black flex justify-center items-center p-4'>
      <form onSubmit={formik.handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-2xl font-bold inline text-white bg-[#9fb9ac] p-2'>contact</p>
          <p className='py-4'>submit the form below or send me an email - <a href='mailto:gabrielapapier@gmail.com'>gabrielapapier@gmail.com</a></p>
        </div>
        <>{showMessage ? <p className='text-[#327364]'>your message has been sent successfully!</p> : (
          <>
            <label className='pb-2'>name</label>
            <input
              className='p-2 bg-[#e5e7eb] text-black focus:outline focus:outline-black'
              id='name'
              name='name'
              type='text'
              placeholder='name'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
              <p className='pb-4 text-[#b66b53] text-sm'>{formik.errors.name}</p>
            ) : null}

            <label className='py-2'>email</label>
            <input
              className='p-2 bg-[#e5e7eb] text-black focus:outline focus:outline-black'
              id='email'
              name='email'
              type='email'
              placeholder='email@domain.com'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className='pb-2 text-[#b66b53] text-sm'>{formik.errors.email}</p>
            ) : null}

            <label className='py-2'>message</label>
            <textarea
              className='p-2 bg-[#e5e7eb] text-black focus:outline focus:outline-black'
              id='message'
              name='message'
              placeholder='your message here'
              type='text'
              cols='30'
              rows='10'
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {formik.errors.message && formik.touched.message ? (
              <p className='text-[#b66b53] text-sm'>{formik.errors.message}</p>
            ) : null}

            <button className='text-black bg-white border rounded-3xl border-black hover:bg-[#327364] hover:border-[#327364] hover:text-white px-4 py-3 my-8 mx-auto flex items-center' type='submit'>send</button>
          </>
        )}</>
      </form>
    </div>
  );
}

export default Contact;
