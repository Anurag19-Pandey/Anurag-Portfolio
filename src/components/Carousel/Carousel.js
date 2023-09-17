import React from 'react'

const Carousel = () => {
  return (
    <section className='slider-section-container'>
        <div className='slider-wrapper'>
            <div className='slider'>
                <div id='slider-img-1'></div>
                <div id='slider-img-1'></div>
                <div id='slider-img-1'></div>
            </div>
            <div className='slider-nav'>
                <a href='#slider-img-1'></a>
                <a href='#slider-img-2'></a>
                <a href='#slider-img-3'></a>
            </div>
        </div>
    </section>
  )
}

export default Carousel