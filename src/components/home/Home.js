import { Link } from 'react-router-dom';
import Img from '../../images/home1.png';
// import Img1 from '../../images/home2.png';
// import Img2 from '../../images/home3.png';
import './Home.css';

const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <div className='row'>
          <div className='central col-lg-9 mx-auto'>
            <img src={Img} alt='home' className='img-fluid' />

            <h2>Decentralized Foreign Exchange</h2>
            <Link
              to='/user'
              className='btn btn-primary btn-lg mt-4 mb-4 d-grid gap-2 d-block'
            >
              Get Started
            </Link>

            <p className='text-white text-center'>
              Already have an account?
              <Link to='/user' className='ms-2'>
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
