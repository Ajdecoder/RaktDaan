import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components
const CustomPrevArrow = (props) => (
  <div {...props} className="custom-prev-arrow">
    Previous
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} className="custom-next-arrow">
    Next
  </div>
);

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: (currentSlide) => {
      console.log(`Slider changed to slide ${currentSlide}`);
    },
  };

  return (
    <>
      {/* Add your Navbar component here */}


      {/* Image Slider */}
      <Slider {...sliderSettings} className='sliderShow w-100'>
        <div>
          <img
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt="Slide 1"
            style={{ width: '100%', maxHeight: '400px' }}
            className=''
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"
            alt="Slide 2"
            style={{ width: '100%', maxHeight: '400px' }}
            className=''
          />
        </div>
        <div>
          {/* Specify width and height directly in the link */}
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="Slide 3"
            style={{ width: '100%', maxHeight: '400px' }}
            className=' m-4'
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>


      {/* Rest of your existing content */}
    </>
  );
}
