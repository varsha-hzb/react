import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const BasicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup
    .string()
    .min(5)
    .matches(passwordRules, {massage: "Please create a stronger password"})
    .required("Required"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Password must match")
    .required("Required"),
})


export const AdvancedSchema = yup.object().shape({
    username: yup
    .string()
    .min(3, "Username must be at least 3 characters lng")
    .required("Required"),
    jobType: yup
    .string()
    .oneOf(["designer", "devloper", "manager", "other"], "I accept the term of servise")
    .required("Required"),
    acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
})