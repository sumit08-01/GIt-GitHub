import { useRef } from 'react';
import { useReducer } from 'react';
import { useState } from 'react'
import React from 'react'


const initialState = { // Common for both
  employee: [
    {
      name: 'Ram',
      email: 'ram@gamil.com',
      manager: false
    }
  ]
}

export const EmployeeComponent = () => { // using useState Hooks

  const [employee, setEmployee] = useState(initialState.employee);
  const nameref = useRef(null);
  const emailRef = useRef(null);
  const managerRef = useRef(null);

  const addNewEmployee = () => {
    setEmployee([...employee, {
      name: nameref.current.value,
      email: emailRef.current.value,
      manager: managerRef.current.checked

    }])
  }

  const deleteEmployee = (name) => {
    setEmployee(employee.filter(employee => employee.name !== name));
  }

  return (
    <>
      <h3>Employees List -- useState Hooks</h3>
      <input type='text' ref={nameref} />
      <input type='email' ref={emailRef} />
      <input type='checkbox' ref={managerRef} />
      <button onClick={() => addNewEmployee()} >Add Employee</button>
      <ul>
        {employee.map((employees, index) => (
          <li key={index} onClick={() => deleteEmployee(employees.name)}>
            {employees.name}, {employees.email}, {employees.manager === false ? "employee" : "Manager"}
          </li>
        ))}
      </ul>
    </>
  )
}

// --------------------------------------------
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        employee: [
          ...state.employee,
          action.payload
        ]
      }
    case 'DELETE_EMPLOYEE':
      return {
        employee: state.employee.filter(emp => emp.name !== action.payload.name)
      }
    default:
      return state;
  }
}

const EmployeeComponentUseReducer = () => { // using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const nameref = useRef(null);
  const emailRef = useRef(null);
  const managerRef = useRef(null);

  const addNewEmployeeUseReducer = () => {
    dispatch({
      type: 'ADD_EMPLOYEE',
      payload: {
        'name': nameref.current.value,
        'email': emailRef.current.value,
        'manager': managerRef.current.checked
      }
    })
  }

  const deleteEmployeeUseReducer = (name) => {
    dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: {
        'name': name
      }
    })
  }
  return (
    <>
      <h3>Employees List -- useReducer Hooks</h3>
      <input type='text' ref={nameref} />
      <input type='email' ref={emailRef} />
      <input type='checkbox' ref={managerRef} />
      <button onClick={() => addNewEmployeeUseReducer()} >Add Employee</button>
      <ul>
        {state.employee.map((employees, index) => (
          <li key={index} onClick={() => deleteEmployeeUseReducer(employees.name)}>
            {employees.name}, {employees.email}, {employees.manager === false ? "employee" : "Manager"}
          </li>
        ))}
      </ul>
    </>
  )
}
function App() {

  return (
    <>
      {/* <EmployeeComponent /> using useState Hooks */}
      <EmployeeComponentUseReducer />

    </>
  )
}

export default App
