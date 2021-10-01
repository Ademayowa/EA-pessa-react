import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './User.css';

const CreateAccount = () => {
  return (
    <section className='sendOne'>
      <form className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/user-details'>
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
              <h4 className='text-white fs-6 mt-4 ms-2'>Generated Seed</h4>
              <div>
                <p className='text-secondary col-12 p-2 account-p'>
                  cup blame cover magic jelly romance blossom cloud brief fall
                  scale whisper mom inject shrimp harbor velvet treat
                </p>
              </div>
            </div>

            <p className='text-secondary mt-lg-5'>
              ATTENTION !! Please write down or memorize these 18 words (their
              order and capitalization matters - always lowercase). This
              passphrase is needed in order to access your account.
            </p>

            <div className='mt-2 mb-4'>
              <h4 className='text-white fs-6 mt-4'>Secret Strength</h4>
              <select className='form-select form-select-lg'>
                <option>18 Words</option>
              </select>
            </div>

            <p className='text-secondary mt-lg-5'>
              ATTENTION !! Please write down or memorize these 18 words (their
              order and capitalization matters - always lowercase). This
              passphrase is needed in order to access your account.
            </p>

            <div className='form-check text-secondary mb-5'>
              <input className='form-check-input' type='checkbox' />
              <label className='form-check-label' htmlFor='flexCheckDefault'>
                I will not forget my seed and I will never disclose it
              </label>
            </div>
          </div>
        </div>

        <div className='d-grid gap-2 d-block mt-4'>
          <Link to='#' className='btn btn-outline-secondary btn-lg mb-4'>
            Copy Seed
          </Link>
          <Link to='/create-one' className='btn btn-primary btn-lg'>
            Next
          </Link>
        </div>
      </form>

      <p className='mt-4 text-secondary text-center'>Create Paper Wallet</p>
    </section>
  );
};

export default CreateAccount;
