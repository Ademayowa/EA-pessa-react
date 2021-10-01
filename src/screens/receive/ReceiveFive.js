import { BsArrowLeft, BsUpload } from 'react-icons/bs';
import { IoIosCopy } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Img from '../../images/qr.png';
import './Receive.css';

const ReceiveFive = () => {
  return (
    <section className='receiveFive'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/receivefour'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Receive TSH</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='image mt-4 mb-4 text-center'>
              <img src={Img} alt='qr' className='img-fluid' />
            </div>

            <p className='text-secondary text-center'>
              bc1qxy2kgdygjrsqtzq2n0yrf2493
            </p>

            <div className='d-grid gap-2 d-block mt-4 btns'>
              <Link to='#' className='btn btn-outline-secondary btn-lg mb-2'>
                <IoIosCopy /> Copy Link
              </Link>
              <Link to='#' className='btn btn-outline-secondary btn-lg mb-2'>
                <BsUpload /> Share Payment Request
              </Link>
              <Link to='/dashboard' className='btn btn-primary btn-lg'>
                Done
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiveFive;
