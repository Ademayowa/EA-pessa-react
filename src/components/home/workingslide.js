import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Img from '../../images/home1.png';
import Img1 from '../../images/home2.png';
import Img2 from '../../images/home3.png';
import './Home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
  };

  const [slides] = useState([
    {
      id: '1',
      image: Img,
    },
    {
      id: '2',
      image: Img1,
    },
    {
      id: '3',
      image: Img2,
    },
  ]);

  return (
    <section className='home'>
      <div className='container'>
        <div className='row'>
          <div className='central col-lg-9 mx-auto'>
            <Slider {...settings}>
              {slides.map((sld) => (
                <div
                  className='container-fluid mt-4'
                  style={{ width: '500px', height: '500px' }}
                >
                  <img src={sld.image} alt='home' className='img-fluid' />
                </div>
              ))}
            </Slider>

            <h2>Decentralized Foreign Exchange</h2>
            <Link
              to='/dashboard'
              className='btn btn-primary btn-lg mt-4 mb-4 d-grid gap-2 d-block'
            >
              Get Started
            </Link>

            <p className='text-white text-center'>
              Already have an account?
              <Link to='/dashboard' className='ms-2'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
