import React from 'react'
import Header from './Header';
import Home from './Home';
import UserList from './UserList';
import UserRegistration from './UserRegistration';
import { Routes, Route} from 'react-router-dom';


export default    function App() {
  return (
    <div className='App'>
        <div className='leftside'>
        <Header />
        </div>
        <div className='rightside'>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/UserList" element={<UserList />} />
            <Route path="/UserRegistration" element={<UserRegistration />} />
          </Routes>
            
        </div>
      
       
    </div>
  );
}

