import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import NavigationBar from "src/components/NavigationBar";

import HomePage from "src/pages/HomePage";
import PortfolioPage from 'src/pages/PortfolioPage';
import ProfilePage from "src/pages/ProfilePage";
import ContactPage from "src/pages/ContactPage";
import Error404Page from "src/pages/Error404Page";


function App() {
  return (
    <div className="antialiased relative w-screen h-screen">
      <NavigationBar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<PortfolioPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='*' element={<Error404Page/>}/>
      </Routes>
    </div>
  )
}

export default App
