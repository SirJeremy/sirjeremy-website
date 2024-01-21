import { Route, Routes } from "react-router-dom";

import NavigationBar from "components/NavigationBar";

import HomePage from 'pages/HomePage';
import PortfolioPage from 'pages/PortfolioPage';
import ProfilePage from "pages/ProfilePage";
import Error404Page from "pages/Error404Page";


function App() {
  return (
    <div className="antialiased relative w-screen h-screen">
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<PortfolioPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='*' element={<Error404Page/>}/>
      </Routes>
    </div>
  )
}

export default App
