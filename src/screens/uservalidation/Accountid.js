import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './User.css';

const Accountid = () => {
  return (
    <section className='sendOne'>
      <form className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/confirm-seed'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Create Account</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='hold'>
              <label className='text-white fs-6 mt-4 ms-2 mb-2'>
                Account ID
              </label>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control bgc mb-4'
                  placeholder='PESA-ELRY-LWLK-NVAU-HNAEL'
                />
              </div>
            </div>

            <p className='text-secondary mt-lg-5'>
              Congratulations!! Your account has been create. Kindly select
              login and transaction signing methods.
            </p>
          </div>
        </div>

        <div className='d-grid gap-2 d-block mt-4'>
          <Link to='/account-success' className='btn btn-primary btn-lg'>
            Next
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Accountid;
