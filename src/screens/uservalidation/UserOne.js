import { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import './User.css';

const UserOne = () => {
  const [disabled, setDisabled] = useState(true);

  let history = useHistory();

  const onChange = (e) => {
    if (e.target.value.length >= 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleClick = (e) => {
    history.push('/user-success');
  };

  return (
    <section className='pin'>
      <div className='container'>
        <div className='wrapper d-flex text-right text-white mb-1'>
          <div className='arrow'>
            <Link to='/user'>
              <BsArrowLeft className='text-white' />
            </Link>
          </div>

          <div className='mx-auto'>
            <h4 className='fs-5'>User Validation</h4>
          </div>
        </div>

        <p className='fs-2 mt-5 text-center text-secondary'>
          Enter 6 digits OTP sent to your Registered Phone Number
        </p>

        <form className='form'>
          <input
            type='password'
            className='form-control form-control-lg form-lg'
            onChange={onChange}
          />

          <div className='d-grid d-gap-2'>
            <button
              onClick={handleClick}
              disabled={disabled}
              className='btn btn-primary btn-lg mt-4'
            >
              Next
            </button>
          </div>
        </form>

        <p className='text-white text-center mt-5'>
          Already have an account? <Link to='#'>Sign In</Link>
        </p>
      </div>
    </section>
  );
};

export default UserOne;
