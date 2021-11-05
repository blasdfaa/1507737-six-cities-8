import { EMAIL_VALID_REGEX, PASSWORD_VALID_REGEX } from '../const';

export const isEmailValid = (email: string): boolean => EMAIL_VALID_REGEX.test(String(email).toLowerCase());

export const isPasswordValid = (password: string): boolean =>
  PASSWORD_VALID_REGEX.test(String(password).toLowerCase());
