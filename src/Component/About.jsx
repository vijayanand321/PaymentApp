import React, { useState } from 'react';
import UseApi from '../Api/UseApi';

const About = () => {

const[useData,setUseDAta]=useState(UseApi);

  return (
    <>
    <section className='common-section our-services'>
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-lg-5 text-center our-service-left-side-img">
                    <img src="./Images/logo512.png" alt="aboutUs" />
                </div>

                <div className="col-12 col-lg-7 our-services-list">
                    <h3 className='mini-title'>-- Contact @Vijayanand#321 For More Info</h3>
                    <h1 className='main-heading'>How to use the app ? </h1>
                    {useData.map((val)=>{
                        const{id ,title, info}=val;
                        return<>
                        <div className="row our-services-info" key={id}>
                        <div className="col-1 our-services-number">{id}</div>
                        <div className="col-10 our-services-data">
                            <h2>{title}</h2>
                            <p className='main-hero-para'>{info}</p>
                        </div>
                    </div>
                        </>
                    })}
                    <br />
                    <button className='btn-style btn-style-border'>Learn more</button>
                </div>
            </div>
        </div>
    </section>



    <section className='common-section our-services-righside'>
        <div className="container mb-5">
            <div className="row">
                

                <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center 
                align-items-start flex-column">
                    <h3 className='mini-title'>-- Contact @Vijayanand#321 For More Info</h3>
                    <h1 className='main-heading'>How to use the app ? </h1>
                    {useData.map((val)=>{
                        const{id ,title, info}=val;
                        return<>
                        <div className="row our-services-info" key={id}>
                        <div className="col-1 our-services-number">{id}</div>
                        <div className="col-10 our-services-data">
                            <h2>{title}</h2>
                            <p className='main-hero-para'>{info}</p>
                        </div>
                    </div>
                        </>
                    })}
                    <br />
                    <button className='btn-style btn-style-border'>Learn more</button>
                </div>
                <div className="col-12 col-lg-5  our-service-right-side-img">
                    <img src="./Images/logo512.png" alt="aboutUs" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About