import { useField } from 'formik';
import React from 'react'

function Custominput({label, ...props}) {

    const [field, meta] = useField(props);
    console.log("field", field);
    console.log("meta", meta);
  return (
    <div>
      <label>{label}</label>
      <input {...field} {...props}
      className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
    </div>
  )
}

export default Custominput
