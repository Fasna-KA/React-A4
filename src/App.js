import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './Assignment4/NavBar';
import Home from './Assignment4/Home';
import Student from './Assignment4/Student';
import Contact from './Assignment4/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
