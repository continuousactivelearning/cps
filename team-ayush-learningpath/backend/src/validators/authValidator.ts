// src/validators/authValidator.ts
import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const registerRules = () => [
    body('name', 'Name is required.').not().isEmpty(),
    body('email', 'Please include a valid email.').isEmail(),
    body('password', 'Password must be 6 or more characters.').isLength({ min: 6 }),
];

export const loginRules = () => [
    body('email', 'Please include a valid email.').isEmail(),
    body('password', 'Password is required.').exists(),
];

export const changePasswordRules = () => [
    body('oldPassword', 'Old password is required.').not().isEmpty(),
    body('newPassword', 'New password must be at least 6 characters.').isLength({ min: 6 }),
];

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors: object[] = [];
    errors.array().map(err => extractedErrors.push({ [err.type === 'field' ? err.path : '']: err.msg }));
    return res.status(422).json({ errors: extractedErrors });
};