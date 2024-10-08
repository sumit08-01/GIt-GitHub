
import { MyFile } from './MyFile';
import React from 'react'

const UseName = React.createContext(); // First step 

function App() {


  return (
    <UseName.Provider value={"sumit"}> {/*second step*/}
      <MyFile />
    </UseName.Provider>
  )
}




export default App
export { UseName };
