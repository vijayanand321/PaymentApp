import React, { useState } from 'react';
import serviceApi from '../Api/ServiceApi';

const Services = () => {
const[services,setServices]=useState(serviceApi);


  return (
    <>
    <section className='service-main-container'>
        <div className="container service-container">
            <h1 className='main-heading text-center fw-bold'>How to send Money</h1>
            <div className="row">
                {services.map((val)=>{
                    return<>
                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdivs">
                    <i className={`fontawesome-style ${val.icon}`}></i>
                    <h2 className='sub-heading'>{val.title}</h2>
                    <p>
                        {val.info}
                    </p>
                </div>
                    </>
                })}
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Services