import { useField } from 'formik';
import React from 'react'

function CustomCheckbox({label, ...props}) {
    const [field, meta] = useField(props);
    
  return (
    <>
    <p>
    <div className='checkbox'>
      <input 
        {...field} 
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      <span>I accept the terms of service</span>
      </div>
      </p>
      {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
    </>
  )
}

export default CustomCheckbox
