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
  accept: boolean;
  isLoading: boolean;
  errorMessage: string;
  isValid: boolean;
  isExist: boolean;
  formValid: boolean;
}
// recover 
export interface Recover {
  id: string;
  email: string;
  password: string; 
  alertMessage: string;
  verified: boolean;
  done: boolean;
}

// Objective 
export interface Objective {
  name: string;
  priority: number;
  status: boolean;
  date: string;
  check: string;
}

// Task
export interface Task {
  name: string ;
  code: string;
  color: string;
}

// Todo
export interface Todo {
  priorety: number,
  type: string ;
  code: string ;
  title: string ;
  parent: string ;
  color: string ;
}

export interface userObject {
  name: string;
  owner: boolean;
  email: string;
  active: boolean
}

// props types
export interface oProps {
  objs: Array<Objective>
}

export interface dProps {
  tasks: Array<Task>
  todos: Array<Todo>

}

export interface uProps {
  users: Array<userObject>
}