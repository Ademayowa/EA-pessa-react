import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Qr.css';

const QrOne = () => {
  return (
    <section className='qrOne'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>QR Scan</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <form>
              <div className='hold'>
                <h4 className='text-white fs-6 mt-4 ms-2'>Wallet Address</h4>
                <div className='input-group group'>
                  <input
                    type='text'
                    className='form-control bgc fs-6'
                    placeholder='bc1qxy2kgdygjrsqtzq2n0yrf2493'
                  />
                  <span className='input-group-text'>T</span>
                </div>
              </div>

              <div className='hold'>
                <h4 className='text-white fs-6 mt-4 ms-2'>Amount</h4>
                <div className='input-group group'>
                  <input
                    type='text'
                    className='form-control bgc fs-6'
                    placeholder='50000 TSH'
                  />
                  <span className='input-group-text'>T</span>
                </div>
              </div>

              <div className='hold'>
                <div className='text-white mt-4 group'>
                  <label className='mb-2 ms-2' htmlFor='description'>
                    Description
                  </label>
                  <textarea className='form-control des' rows='8'>
                    Test Transaction
                  </textarea>
                </div>
              </div>

              <div className='d-grid gap-2 d-block mt-4'>
                <Link to='#' className='btn btn-primary btn-lg'>
                  Pay
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QrOne;
