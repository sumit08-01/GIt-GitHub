
// Props Drilling -- simple
// const App = () => {
//   return (
//     <OuterComponent value={"Props Drilling using function components"} />
//   )
// }

import React, { createContext } from "react";
import ComA from "./ComA";


// const OuterComponent = (props) => {
//   <InnerComponet value={props.value} />
// }

// const InnerComponet = (props) => {
//   <div>{props.value}</div>
// }


// Props Drilling using Context

// 1 ) Creating context
// const EmpContext = React.createContext("Here you can pass default value also");
// const EmpContext = React.createContext();
// const App = () => (

//   // 2 ) Provide The context
//   <EmpContext value={"SumitContextValue"}>
//     <OutterComponent />
//   </EmpContext>
// );

// const OutterComponent = () => (
//   <InnerComponent />
// );

// const InnerComponent = () => (
//   // 3 ) Consume The context, The below line will work as render method
//   <EmpContext.Consumer>
//     {(contextValue) =>
//       <>
//         <h1>Welcome to inner Componnet</h1>
//         <div>The Context Value is {contextValue}</div>
//       </>
//     }
//   </EmpContext.Consumer>
// );


//Another Example of useContext

// const FirstName = createContext(); // First Step --> Create Context
// const LastName = createContext(); // First Step --> Create Context

// const App = () => {
//   return (
//     <>
//       <FirstName.Provider value={"Sumit"}> {/* step : 2 -->  Provide the value to Provider like this */}
//         <LastName.Provider value={"Gond"}> {/* step : 2 -->  Provide the value to Provider like this */}
//           <ComA />
//         </LastName.Provider>
//       </FirstName.Provider>
//     </>
//   )
// }

const FirstName = createContext(); // 1 : step --> createContext
const LastName = createContext(); // 1 : step --> createContext

class App extends React.Component {
  render() {
    return (
      <>
        <FirstName.Provider value={{ Fname: 'Sumit' }}> {/* 2 : Step --> Provide Context and Wrap with it */}
          <LastName.Provider value={{ Lname: 'Gond' }}>
            <ComA />
          </LastName.Provider>
        </FirstName.Provider>
      </>
    );
  }
}

export default App;
export { FirstName, LastName }; // 3 : Step --> export the context you create, We use this context in ComC

