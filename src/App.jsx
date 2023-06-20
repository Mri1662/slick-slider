import React from 'react';
import Slider from 'react-slick';
import './App.css';

const App = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  const images = [
    {
      id: 1,
      url: require('./assets/image1.jpg'),
      alt: 'Image1',
    },
    {
      id: 2,
      url: require('./assets/image2.jpg'),
      alt: 'Image2',
    },
    {
      id: 3,
      url: require('./assets/image3.jpg'),
      alt: 'Image3',
    },
    {
      id: 3,
      url: require('./assets/image4.jpg'),
      alt: 'Image4',
    },
    {
      id: 3,
      url: require('./assets/image5.jpg'),
      alt: 'Image5',
    },
  ];

  const handleDownload = (src) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop(); // Set the downloaded file name
    link.click();
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="slide">
            <img src={image.url} alt={image.alt} />
            <button
              className="download-button"
              onClick={() => handleDownload(image.url)}
            >
              Download
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;
