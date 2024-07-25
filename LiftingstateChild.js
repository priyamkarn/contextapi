import React, { useState } from 'react'

function Child(props) {
    const [val,setval]=useState(9);
    props.getdata(val)
  return (
    <>
    
    </>
  )
}

export default Child
