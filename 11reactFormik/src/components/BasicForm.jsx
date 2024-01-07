import React from 'react'
import {useFormik} from 'formik'
import { BasicSchema } from '../schemas/Yup';

const onSubmit = async(values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

function BasicForm() {

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',

        },
        validationSchema: BasicSchema,
        onSubmit,
    })

    console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete='off' >
        <label htmlFor='email'>Email</label>
        <input 
            className={errors.email && touched.email ? "input-error" : ""}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id='email'
            type='email' 
            placeholder='Enter your email'
        />
        {errors.email && touched.email && <p className='error'>{errors.email}</p>}
        <label htmlFor='age'>Age</label>
        <input 
            className={errors.age && touched.age ? "input-error" : ""}
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            id='age'
            type='number' 
            placeholder='Enter your age'
        />
        {errors.age && touched.age && <p className='error'>{errors.age}</p>}
        <label htmlFor='password'>Password</label>
        <input 
            className={errors.password && touched.password ? "input-error" : ""}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id='password'
            type='password' 
            placeholder='Enter your password'
        />
        {errors.password && touched.password && <p className='error'>{errors.password}</p>}
        <label htmlFor='Confirm password'>Confirm Password</label>
        <input 
            className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            id='confirmPassword'
            type='confirmPassword' 
            placeholder='Enter your confirmPassword'
        />
        {errors.confirmPassword && touched.confirmPassword  && <p className='error'>{errors.confirmPassword}</p>}
        <button disabled={isSubmitting} type='submit'>Submit</button>
    </form>
  )
}

export default BasicForm