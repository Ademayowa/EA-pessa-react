import { BsArrowLeft } from 'react-icons/bs';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';
import './Send.css';

const Successful = () => {
  let history = useHistory();

  const handleClick = (e) => {
    history.push('/success');
  };

  return (
    <section className='successful'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/'>
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
            className='btn  btn-outline-secondary mb-2 text-white'
            type='button'
          >
            Transaction Details
          </button>
          <button onClick={handleClick} className='btn btn-primary'>
            Done
          </button>
        </div>
      </div>
    </section>
  );
};

export default Successful;
