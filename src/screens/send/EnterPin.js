import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const EnterPin = () => {
  return (
    <section className='pin'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>Enter Pin</h4>
          </div>
        </div>

        <p className='fs-2 mt-5 text-center text-secondary'>
          Enter your PIN to continue
        </p>

        <form className='form'>
          <input
            type='password'
            className='form-control form-control-lg form-lg'
          />

          <div className='d-grid d-gap-2'>
            <Link className='btn btn-primary btn-lg mt-4' to='#'>
              Next
            </Link>
          </div>
        </form>

        <p className='text-white text-center mt-5'>
          Already have an account? <Link to='#'>Sign In</Link>
        </p>
      </div>
    </section>
  );
};

export default EnterPin;
