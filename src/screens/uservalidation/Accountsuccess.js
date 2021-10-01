import { BsArrowLeft } from 'react-icons/bs';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './User.css';

const AccountSuccess = () => {
  return (
    <section className='successful'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/account-id'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Create Account</h4>
          </div>
        </div>

        <div className='mark'>
          <IoIosCheckmarkCircleOutline />
        </div>

        <p className='text-center fs-2 text-white mt-5'>Successful</p>

        <div className='d-grid gap-2'>
          <Link to='/login' className='btn btn-primary btn-lg'>
            Continue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AccountSuccess;
