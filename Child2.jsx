import React, { useContext } from 'react'
import { data,data2 } from './App'
function Child2() {
    const gender=useContext(data2);
  return (
    <>
    <data.Consumer>
        {
            (name)=>
            {
                return(
                    <div>
                        my name is {name}
                    </div>
                )
            }
        }
    </data.Consumer>
    <div>
        my gender is {gender}
    </div>
    </>
  )
}

export default Child2
