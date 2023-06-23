import React, { useState } from 'react'

const Contact = () => {
const[userData ,setUserData]=useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    address:"",
    message:"",
});

 const { firstName,lastName,phone,email,address,message } = userData;
const postUserData = e=> {
    setUserData({...userData,[e.target.name]:e.target.value})
  };

  const submitData=async (e)=>{
    e.preventDefault();
    const { firstName,lastName,phone,email,address,message } = userData;
    if(firstName && lastName && phone&& email&& address&& message){
  const res = await fetch('https://vkpay-d75e3-default-rtdb.firebaseio.com/userDatabase.json',
  {method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify({
    firstName,
    lastName,
    phone,
    email,
    address,
    message,
  })
}
  );
     if(res.ok){
        setUserData({
            firstName:"",
            lastName:"",
            phone:"",
            email:"",
            address:"",
            message:"", 
        })
        alert('data stored')
     } else {
        alert('please fill the data')
     }
    }
    else {
        alert('please fill the data')
     }
  }


  return (
    <>
    <section className='contact-section'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                        <div className="contact-leftside col-12  col-lg-5 ">
                            <h1 className='main-heading'>Contact VijayAnand..G</h1>
                            <p className='main-hero-para'>
                                Developer and CEO of VKpay  <a href="https://vijayanand030201@gmail.com" >vijayanand030201@gmail.com</a> 
                                
                            </p>
                            <figure>
                                <img src="./Images/pic1.jpg" alt="vk"  className='img-fluid'/>
                            </figure>
                        </div>
                        <div className="contact-rightside col-12 col-lg-7 ">
                                     <form method='post'>
                                      
                                            <div className="row">
                                               <div className="col-12 col-lg-6 contact-input-field">
                                               <input type="text"  className='form-control' name='firstName' value={firstName} onChange={postUserData} placeholder='FirstName' />
                                               </div>
                                               <div className="col-12 col-lg-6 contact-input-field">
                                               <input type="text"  className='form-control' name='lastName' value={lastName} onChange={postUserData} placeholder='Lastname' />
                                               </div>
                                            </div>
                                            <div className="row">
                                               <div className="col-12 col-lg-6 contact-input-field">
                                               <input type="text"  className='form-control' name='phone' value={phone} onChange={postUserData} placeholder='Contact Number' />
                                               </div>
                                               <div className="col-12 col-lg-6 contact-input-field">
                                               <input type="email"  className='form-control' name='email' value={email} onChange={postUserData} placeholder='E-mail' />
                                               </div>
                                            </div>
                                     
                                     <div className="row">
                                        <div className="col-12">
                                            <input type="text"  className='form-control contact-input-field' name='address' value={address} onChange={postUserData} placeholder='Address' />
                                        </div>
                                     </div>
                                     <div className="row">
                                        <div className="col-12">
                                            <input type="text"  className='form-control contact-input-field'  name='message' value={message} onChange={postUserData} placeholder='Type your message' />
                                        </div>
                                     </div>

                                     <div class="form-check">
                                     <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" className='main-hero-para' for="flexCheckChecked">
                                                      I agree the above information is valid
                                                   </label>
                                                  </div>
                                                  <button type='submit' className='btn btn-style w-100' onClick={submitData}>Submit</button>
                                     </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact