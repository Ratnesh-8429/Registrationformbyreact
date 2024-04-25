import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default  function UserRegistration() {

const { register, formState:{errors}, handleSubmit}= useForm();

const [ countryData, setCountryData] = useState([]);
const handleCountry=(e)=>{
    const getCountryid= e.target.value;
    console.log(getCountryid);
}
useEffect(()=>{
    const getCountry= async()=>{
        const reqData= await fetch("http://localhost:7000/api/country");
        const resData= await reqData.json();
        setCountryData(resData);
    }
    getCountry();
},[]);












const onSubmit =(data)=>{
    console.log(data);
}

  return (
    <React.Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <h5 className='mt-2'>User Registration Form</h5>
                <form  onSubmit={handleSubmit(onSubmit)}>
               <div className='row'>
               <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-lable'>Name</label>
                    <input type="text" {...register("name", {required:true})} className='form-control' />
                   <span className="text-danger">
                    { errors.name?.type==="required" && "Name is Required"}
                   </span>
                    </div>
                </div>

                <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-lable'>User Name</label>
                    <input type="username" {...register("username", {required:true,pattern: /^[a-zA-Z0-9_]+$/i,})} className='form-control' />
                    <span className="text-danger">  
                    { errors.username?.type==="required" && "username is Required"}
                    { errors.username?.type==="pattern" && "username is in wrong Format"}
                   </span>
                </div></div>
                <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-lable'>Email <span className='text-danger'>*</span></label>
                    <input type="email"{...register("email", {required:true,pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,})}
                    className='form-control' />
                   <span className="text-danger">  
                    { errors.email?.type==="required" && "email is Required"}
                    { errors.email?.type==="pattern" && "enter valid email"}
                   </span>
                    </div>
                </div>
                <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-lable'>Password</label>
                    <input type="password"{...register("password", {required:true, minLength:6, maxLength:20})} className='form-control' />
                    <span className="text-danger">  
                    { errors.password?.type==="required" && "password is Required"}
                    { errors.password?.type==="minLength" && "enter password less than 6"}
                    { errors.password?.type==="maxLength" && "enter password more than 20"}
                    </span>
                </div>
               </div>
               <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-lable'>Phone No</label>
                    <input type="number"{...register("phoneno", {required:true, minLength:6, maxLength:10})} className='form-control' />
                    <span className="text-danger">  
                    { errors.phoneno?.type==="required" && "phoneno is Required"}
                    { errors.phoneno?.type==="minLength" && "enter phoneno less than 6"}
                    { errors.phoneno?.type==="maxLength" && "enter phoneno more than 10"}
                    </span>
                </div>
               </div>
               <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-lable'>Gender</label>
                    <select {...register("gender", {required:true})} className='form-control'>
                   
                        <option value="">--Please Select--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="other">other</option>
                    </select>
                    <span className="text-danger">
                    { errors.gender?.type==="required" && "gender is Required"}
                   </span>
                </div>
               </div>
               <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-lable'>Country</label>
                    <select  {...register("country", {required:true})} className='form-control'
                    onChange={handleCountry}>
                        <option value="">--Please Select--</option>
                       
                        {
                            countryData.map( (countryitem, index)=>(
                                <option value={countryitem.id} key={index}> {countryitem.name} </option>
                            ))
                        }
                    </select>
                    <span className="text-danger">
                    { errors.country?.type==="required" && "country is Required"}
                   </span>
                </div>
               </div>
               <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-lable'>State</label>
                    <select {...register("state", {required:true})} className='form-control'>
                        <option value="">--Please Select--</option>
                        <option value="Male">Uttar Pradesh</option>
                        <option value="Female">Mumbai</option>
                        <option value="other">Gujrat</option>
                    </select>
                    <span className="text-danger">
                    { errors.state?.type==="required" && "state is Required"}
                   </span>
                </div>
               </div>
               <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-lable'>Address 1<span className="text-danger">*</span></label>
                    <textarea {...register("address1", {required:true})} className='form-control' />
                    { errors.address1?.type==="required" && "address1 is Required"}
                </div>
               </div>
               <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-lable'>Address 2</label>
                    <textarea {...register("address2", {required:true})} className='form-control' />
                    { errors.address2?.type==="required" && "address2 is Required"}

                </div>
               </div>



               <div className='col-md-6'>
                <div className='mb-3'>
                    <div className='form-check form-check-inline'>
                   
                     <input type="checkbox" 
                     name='accept'
                     {...register("accept", {required:true})} className='form-check-input' value='1'/>
                    
                    <label className='form-checklabel'>Accept All Condition
                    <span className='text-danger'>*</span>
                    </label>
                    <span className="text-danger">
                    { errors.accept?.type==="required" && "accept is Required"}
                   </span>
                    </div>
                </div>
               </div>

               <div className='col-md-12'>
                <div className='mb-3'>
                    <label className='form-lable'></label>
                    <button type="submit" className='btn btn-success bt-lg'>Submit</button>
                   
                </div>
               </div>








               </div>
               </form>
                
                </div>
            </div>
        </div>
   
    </React.Fragment> 
  )
}

