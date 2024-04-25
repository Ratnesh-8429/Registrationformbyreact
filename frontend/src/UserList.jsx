import React from 'react'
import { Link } from 'react-router-dom';
export default  function UserList() {
  return (
    <React.Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h5 className='mt-2'>UserListing</h5>
                <div className='d-grid d-md-flex justify-content-md-end md-3'>
                <Link to="/UserRegistration" className='btn btn-success'>Add New User</Link>
                </div>
                <table className='table table-bordered'>
                  <thead className='bg-light'>
                    <tr>
                      <th>Sr .No</th>
                      <th>Name</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Phone no</th>
                      <th>Gender</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Test</td>
                      <td>TestUser</td>
                      <td>test@gmail</td>
                      <td>42ff5545522</td>
                      <td>Male</td>
                      <td>
                        <Link to="/userEdit" className='btn btn-success'>Edit</Link>
                        <Link to="/userDelete" className='btn btn-danger'>Delete</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Test2</td>
                      <td>TestUser2</td>
                      <td>test@gmail</td>
                      <td>42ff5545522</td>
                      <td>Male</td>
                      <td>
                        <Link to="/userEdit" className='btn btn-success'>Edit</Link>
                        <Link to="/userDelete" className='btn btn-danger'>Delete</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                </div>
            </div>
        </div>
   
    </React.Fragment> 
  )
}

