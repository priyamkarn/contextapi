import React, { useState, useEffect, useMemo, useRef } from 'react';
import Child from './Child';
function App() {
function getdata(data)
{
  console.log(data);
}
  return (
    <>
    <Child getdata={getdata}></Child>
    </>
  );
}

export default App;
