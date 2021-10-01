import { BsArrowLeft } from 'react-icons/bs';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Send.css';

const Successful = () => {
  return (
    <section className='successful'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/sendfour'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Send Asset</h4>
          </div>
        </div>

        <div className='mark'>
          <IoIosCheckmarkCircleOutline />
        </div>

        <p className='text-center text-white mt-5'>Successful</p>

        <div className='d-grid gap-2'>
          <button
            className='btn btn-outline-secondary btn-lg mb-2 text-white'
            type='button'
          >
            Transaction Details
          </button>
          <Link to='/dashboard' className='btn btn-primary btn-lg'>
            Done
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Successful;
