// User
export interface User {
  id: string;
  email: string;
  password: string;
  isLoading: boolean;
  errorMessage: string;
  isValid: boolean
}

// NewUser
export interface NewUser {
  id: string;
  email: string;
  name: string;
  password: string;
  company: string;
  space: string;
  industry: string;
  employees: string;
  accept: boolean
  isLoading: boolean;
  errorMessage: string;
  isValid: boolean;
  isExist: boolean;
  formValid: boolean;
}


