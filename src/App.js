import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './Assignment4/NavBar';
import Home from './Assignment4/Home';
import Student from './Assignment4/Student';
import Contact from './Assignment4/Contact';
import Detail from './Assignment4/Detail';
import AddStudent from './Assignment4/AddStudent';
import Edit from './Assignment4/Edit';

function App() {
  return (

    <Detail>
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/addStudent' element={<AddStudent/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>

    </Detail>
  );
}

export default App;
