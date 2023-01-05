import React from 'react';
import './style.css'

export function BlockInfo() {

  return (
    <>
        <div className='container-block-info row p-0 m-0'>
            <div className='col-6 block-info-1 p-5'>
                <label className='block-info-title1 ms-5 mt-5'>PRACTICE IS KEY</label><br></br>
                <label className='block-info-title2 ms-5 mt-5'>Expert-Designed<br></br> Programs—<br></br>Certifications Included</label>
            </div>
            <div className='col-6 block-info-2 p-5'>
                <h4 className='ff-ubuntu ms-5 mt-5'>Annual programs</h4>
                <p className='ms-5'>Our courses run for one, two and three years</p>

                <h4 className='ff-ubuntu ms-5 mt-5'>Variety of technologies</h4>
                <p className='ms-5'>Studying diverse topics, frontend, backend, design, etc</p>

                <h4 className='ff-ubuntu ms-5 mt-5'>Your portfolio</h4>
                <p className='ms-5'>Training has a project orientation. In the process, you will create several of your projects</p>
            </div>
        </div>
    </>
  );
}
