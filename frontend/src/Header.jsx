import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <React.Fragment>
      <nav className='navbar bg-light'></nav>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h5>Left Menu</h5>
                <ul className='navbar-nav'>
                    <li className='nav-item'> <Link to="/" className='nav-link'>Home</Link></li>
                    <li className='nav-item'> <Link to="/UserList" className='nav-link'>UserListing</Link></li>

                </ul>

            </div>

        </div>
         
      </div>
      
    </React.Fragment>
  )
}

