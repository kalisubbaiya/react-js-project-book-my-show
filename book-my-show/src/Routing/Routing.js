import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                {/* <Route path='*' element={<Task />}></Route>
                <Route path='/task' element={<Task />}></Route>
                <Route path='/content' element={<Content />}></Route> */}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing