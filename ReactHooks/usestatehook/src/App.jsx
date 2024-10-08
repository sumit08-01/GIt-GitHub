import { useState } from 'react'


function App() {
  const [checked, setChecked] = useState(true); // destructing -- boolean
  const [title, setTitle] = useState("React"); // String 


  const handleCheckBox = () => setChecked(preChecked => (!preChecked));
  const handleTitleChange = (e) => setTitle(e.target.value);

  let currentState = checked ? 'Checked' : 'UnChecked';

  // --------------------------------Object
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" })
  const handleFirstName = (e) => setFullName({ ...fullName, firstName: e.target.value });
  const handleLastName = (e) => setFullName({ ...fullName, lastName: e.target.value });

  // -------------------------------------Array
  const [emp, setEmp] = useState([]);

  const HandleEmployeeAdd = () => setEmp([...emp, `Employee${emp.length}`]);




  return (

    <>
      <h1>State Demo using React Hooks</h1>
      <h2>useState - boolean</h2>
      <input type='checkbox' defaultChecked={currentState} onChange={handleCheckBox} />
      <span>{currentState} State </span><br />
      <h2>Enter Title - String</h2>
      <input type='text' defaultValue={title} onChange={handleTitleChange} />
      <span>Title : {title}</span>

      <hr />

      <h2>useState Object</h2>
      <label>Enter FirstName : </label>
      <input type='text' onChange={handleFirstName} />
      <label>Enter LastName : </label>
      <input type='text' onChange={handleLastName} />
      FullName : {fullName.firstName} {fullName.lastName}

      <hr />

      <h2>useState Array</h2>
      <button onClick={() => HandleEmployeeAdd()} >Add Employee</button>
      <ul>
        {emp.map((employee, index) => {
          <li key={index}>{employee}</li>
        })}
      </ul>
    </>
  )
}


export default App
