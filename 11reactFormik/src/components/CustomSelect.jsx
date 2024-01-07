import { useField } from 'formik';
import React from 'react'

function CustomSelect({label, ...props}) {
    const [field, meta] = useField(props);
    
  return (
    <div>
      <label>{label}</label>
      <select {...field} {...props}
      className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
    </div>
  )
}

export default CustomSelect
