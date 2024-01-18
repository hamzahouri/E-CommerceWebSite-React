import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/Home/HomePage';
import NavBarLogin from './Components/Utility/NavBarLogin';
import Footer from './Components/Utility/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import AllCategoryPage from './Pages/Category/AllCategoryPage';
import AllBrand from './Pages/Brand/AllBrandPage';

function App() {
  return (
    <div className='font'>  
     <NavBarLogin/>
    <BrowserRouter> 
    <Routes>
      <Route index element={<HomePage/> }  />
      <Route path='/login' element={<LoginPage/> }  />     
      <Route path='/register' element={<RegisterPage/> }  /> 
      <Route path='/allcategory' element={<AllCategoryPage/>}/>
      <Route path='/allbrand' element={<AllBrand/>}/>
      </Routes>
      </BrowserRouter>  
      <Footer/>
    </div>
  );
}

export default App;
