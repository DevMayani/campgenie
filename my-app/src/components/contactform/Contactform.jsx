import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().matches(/^\d+$/, 'Must be a valid phone number').required('Phone is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Submitted', values);
    },
  });

  return (
    <div className=" bg-white border rounded-md">
    
      <form onSubmit={formik.handleSubmit} className="space-y-4 px-6 py-10 md:py-12">
        {/* Name and Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Name<span className='text-red-500'>*</span></label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full p-2 border rounded-md"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Email<span className='text-red-500'>*</span></label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full p-2 border rounded-md"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>
        </div>

        {/* Phone and Subject */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Phone Number<span className='text-red-500'>*</span></label>
            <input
              type="text"
              name="phone"
              className="mt-1 block w-full p-2 border rounded-md"
              {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-red-500 text-sm">{formik.errors.phone}</p>
            ) : null}
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Subject<span className='text-red-500'>*</span></label>
            <input
              type="text"
              name="subject"
              className="mt-1 block w-full p-2 border rounded-md"
              {...formik.getFieldProps('subject')}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <p className="text-red-500 text-sm">{formik.errors.subject}</p>
            ) : null}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Message<span className='text-red-500'>*</span></label>
          <textarea
            name="message"
            rows="6"
            className="mt-1 block w-full p-2 border rounded-md"
            {...formik.getFieldProps('message')}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="text-red-500 text-sm">{formik.errors.message}</p>
          ) : null}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 text-white rounded-md hover:bg-green-600 transition text-xs md:text-2xl lg:text-sm xl:text-lg font-nunito-sans font-light"  style={{ backgroundColor: '#3F8361' }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
