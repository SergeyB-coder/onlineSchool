import React from 'react';
import './style.css'
import ImgBackground from '../../static/block_present2.jpg'
export function BlockPresent() {

  return (
    <>
        <div className='container-block-present' style={{
                        backgroundImage: `url(${ImgBackground})`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
        >
            <div className='info-author'>Photo by Adrien Olichon: https://www.pexels.com/photo/low-angle-shot-of-a-modern-structure-with-geometric-design-3137056/</div>
            <div className='block-present-text'>Easy and Fast<br></br> Way to IT</div>

            <div className='anim-element1'></div>
            <div className='anim-element2'></div>
            <div className='anim-element3'></div>
        </div>
    </>
  );
}
