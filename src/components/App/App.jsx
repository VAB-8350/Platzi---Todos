import React, { useState, useEffect } from "react";
import { TodoProvider } from "../../TodoContext";
import AppUI from './AppUI';


function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
