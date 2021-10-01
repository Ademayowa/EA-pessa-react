import Img from '../../images/logo.png';
import Img1 from '../../images/logo-letter.png';
import './Dashboard.css';

const DashboardHeader = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='d-flex'>
            <div className='col-lg-6 mt-3'>
              <img src={Img} alt='logo' />
            </div>

            <div className='col-lg-6 mt-3 text-white mx-auto'>
              <img src={Img1} alt='logo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
