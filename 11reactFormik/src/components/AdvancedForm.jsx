import React from 'react'
import { Form, Formik} from 'formik'
import Custominput from './Custominput'
import { AdvancedSchema } from '../schemas/Yup'
import CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckbox'

const onSubmit = async(values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
}

function AdvancedForm() {
  return (
      <Formik initialValues={{ username: '', jobType: "", acceptedTos: false }} validationSchema={AdvancedSchema}
      onSubmit={onSubmit}
      >
       {(props) => (
         <Form>
            <Custominput
               label="username"
               name="username"
               type="text"
               placeholder="Enter your username"
            />
            <CustomSelect
            label="Job Type"
            name="job type"
            placeholder="Please select a job"
            >
                <option value="">Please select a job</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
            </CustomSelect>
            <CustomCheckbox type='checkbox' name='acceptedTos'>

            </CustomCheckbox>
           {/* <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.name}
             name="name"
           /> */}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
  )
}

export default AdvancedForm
