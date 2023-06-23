import React from 'react'

const Head = () => {
  return (
    <>
    <header>
    <section className='container  main-hero-container'>
        <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex 
            justify-content-center flex-column align-items-start order-lg-first order-last">
                <h1 className='display-2'>Pay AnyWhere Using VKpay <br />
               payment made easy for you</h1>
                <p className='main-hero-para'>
Lorem, ipsum dolor sit amet consectetur adipisicing elit.
 Architecto aliquam quisquam natus? Pariatur excepturi, 
ut eum dignissimos rem aliquam quos et exercitationem officia blanditiis, 
minus quo odio cum, asperiores culpa!
                </p>
                         <h3>Get Early Access</h3>
                         <div className="input-group mt-3">
                         <input type="text"  placeholder='Enter Your E-mail' className='rounded-pill w-75 w-lg-75 p-2 me-3 form-control-text' />
                         <div className="input-group-button">Get it now</div>
                         </div>
            </div>
            {/* main header */}
            <div className="col-12 col-lg-6 header-right-side d-flex 
            justify-content-center align-items-center main-hero-section-images order-md-first order-sm-first">
              <img src="./Images/logo512.png" alt="heroimg" className='img-fluid' />
              <img src="./Images/pic1.jpg" alt="heroimg2" className='img-fluid main-hero-img2' />
            </div>
        </div>
    </section>
    </header>
    </>
  )
}

export default Head