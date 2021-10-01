import { BsArrowLeft } from 'react-icons/bs';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './User.css';

const Successful = () => {
  return (
    <section className='successful'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/user-one'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>User Validation</h4>
          </div>
        </div>

        <div className='mark'>
          <IoIosCheckmarkCircleOutline />
        </div>

        <p className='text-center fs-2 text-white mt-5'>Successful</p>

        <div className='d-grid gap-2'>
          <Link to='/dashboard' className='btn btn-primary btn-lg'>
            Continue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Successful;
