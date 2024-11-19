import { body } from 'express-validator'

const authRegisterValidator = [
  body('name')
    .notEmpty().withMessage('Name is required'),
  body('lastname')
    .notEmpty().withMessage('Lastname is required'),
  body('email')
    .isEmail().withMessage('Некорректный формат email')
    .notEmpty().withMessage('Email is required'),
  body('password')
    .isLength({ min: 6 }).withMessage('Пароль должен содержать минимум 6 символов')
    .notEmpty().withMessage('Password is required')
    .matches(/\d/).withMessage('Пароль должен содержать хотя бы одну цифру')
    .matches(/[a-z]/).withMessage('Пароль должен содержать хотя бы одну букву'),
]

const authLoginValidator = [
  body('email')
    .isEmail().withMessage('Некорректный формат email')
    .notEmpty().withMessage('Email is required'),
  body('password')
    .isLength({ min: 6 }).withMessage('Пароль должен содержать минимум 6 символов')
    .notEmpty().withMessage('Password is required')
    .matches(/\d/).withMessage('Пароль должен содержать хотя бы одну цифру')
    .matches(/[a-z]/).withMessage('Пароль должен содержать хотя бы одну букву'),
]

export { authLoginValidator, authRegisterValidator }