import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './Assignment4/NavBar';
import Home from './Assignment4/Home';
import Student from './Assignment4/Student';
import Contact from './Assignment4/Contact';
import Edit from './Assignment4/Edit';
import AddStudent from './Assignment4/AddStudent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/Edit' element={<Edit/>}></Route>
        <Route path='/AddStudent' element={<AddStudent/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
