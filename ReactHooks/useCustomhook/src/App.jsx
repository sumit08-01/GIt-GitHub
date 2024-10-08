import { EmployeeList } from './components/EmployeeList'
import { CustomerList } from './components/CustomerList'


function App() {

  return (
    <>
      <EmployeeList heading={"Employee List Using Custom Hooks"} />
      <CustomerList heading={"Customer List Using Custom Hooks"} />
    </>
  )
}

export default App
