// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Courses from './Components/Home/home';
import About from './Components/About/about';
import SignUp from './Components/SignUp/signup';
import Login from './Components/Login/login';
import Image from './Cover Photo.jpg';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1><a href='/App'>IT Gate Academy</a></h1>
        <Nav /><br/>
        <img src={Image} alt='Cover Photo'/>
        <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, dolorem! Placeat officia quaerat facilis at, 
                possimus omnis magnam.Odio fugit eius laudantium cum,
                neque ducimus veniam atque alias quos iusto?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, dolorem! Placeat officia quaerat facilis at, 
                possimus omnis magnam.Odio fugit eius laudantium cum,
                neque ducimus veniam atque alias quos iusto?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, dolorem! Placeat officia quaerat facilis at, 
                possimus omnis magnam.Odio fugit eius laudantium cum,
                neque ducimus veniam atque alias quos iusto?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, dolorem! Placeat officia quaerat facilis at, 
                possimus omnis magnam.Odio fugit eius laudantium cum,
                neque ducimus veniam atque alias quos iusto?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, dolorem! Placeat officia quaerat facilis at, 
                possimus omnis magnam.Odio fugit eius laudantium cum,
                neque ducimus veniam atque alias quos iusto?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro, dolorem! Placeat officia quaerat facilis at, 
                possimus omnis magnam.Odio fugit eius laudantium cum,
                neque ducimus veniam atque alias quos iusto?
            </p>
        <Routes>
          <Route path='/home' element={<Courses />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
