import React from "react";
import {BrowserRouter , Route,Routes} from 'react-router-dom';
import Home from "./page/Home";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        
      </Route>
    </Routes>
  </BrowserRouter>
    
      
  );
}

export default App;
