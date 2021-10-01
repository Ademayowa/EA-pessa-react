import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Img from '../../images/scan.png';
import './Qr.css';

const QrScan = () => {
  return (
    <section className='qrScan'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/dashboard'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>QR Scan</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='image mt-4 mb-4 text-center'>
              <img src={Img} alt='qr' className='img-fluid' />
            </div>

            <div className='d-grid gap-2 d-block mt-4'>
              <Link to='#' className='btn btn-secondary btn-lg'>
                Pay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QrScan;
