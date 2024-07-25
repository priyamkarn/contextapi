import { createContext, useState } from 'react'
import Child2 from './Child2'
const data=createContext();
const data2=createContext();
function App() {
const name ="priyam";
const gender="male";
  return (
    <>
      <data.Provider value={name}>
        <data2.Provider value={gender}>
        <Child2/>
        </data2.Provider>
      </data.Provider>
    </>
  )
}

export default App
export {data,data2}
