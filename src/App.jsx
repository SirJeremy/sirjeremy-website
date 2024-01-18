import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import Error404Page from "./pages/Error404Page";

function App() {
  return (
    <div className="App antialiased">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<Error404Page/>}/>
      </Routes>
    </div>
  )
}

export default App
