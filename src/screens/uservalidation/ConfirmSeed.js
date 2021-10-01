import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './User.css';

const ConfirmSeed = () => {
  return (
    <section className='confirm'>
      <form className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/create-one'>
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
              <h4 className='text-white fs-6 mt-4 ms-2'>Confirm Seed</h4>
              <div>
                <p className='text-secondary col-12 p-2 account-color'>
                  cup blame cover magic jelly romance blossom cloud brief fall
                  scale whisper mom inject shrimp harbor velvet treat
                </p>
              </div>
            </div>

            <p className='text-secondary mt-lg-5'>
              Your seed is very important! In order to be sure that you have
              saved it, please confirm your seed.
            </p>
          </div>
        </div>

        <div className='d-grid gap-2 d-block mt-4'>
          <Link to='/account-id' className='btn btn-primary btn-lg'>
            Next
          </Link>
        </div>
      </form>
    </section>
  );
};

export default ConfirmSeed;
